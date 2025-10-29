import api from './api';
import { mockEventService } from './mockData';

// Flag to enable/disable mock data (set to false when backend is running)
const USE_MOCK_DATA = true;

// Event API service
export const eventService = {
  // Get all active events
  getAllEvents: async () => {
    if (USE_MOCK_DATA) {
      return mockEventService.getAllEvents();
    }
    
    try {
      const response = await api.get('/events');
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockEventService.getAllEvents();
    }
  },

  // Get event by ID
  getEventById: async (id) => {
    try {
      const response = await api.get(`/events/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch event details');
    }
  },

  // Get events by region
  getEventsByRegion: async (region) => {
    if (USE_MOCK_DATA) {
      return mockEventService.getEventsByRegion(region);
    }
    
    try {
      const response = await api.get(`/events/region/${region}`);
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockEventService.getEventsByRegion(region);
    }
  },

  // Get events by type
  getEventsByType: async (eventType) => {
    if (USE_MOCK_DATA) {
      return mockEventService.getEventsByType(eventType);
    }
    
    try {
      const response = await api.get(`/events/type/${eventType}`);
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockEventService.getEventsByType(eventType);
    }
  },

  // Get upcoming events
  getUpcomingEvents: async () => {
    if (USE_MOCK_DATA) {
      return mockEventService.getUpcomingEvents();
    }
    
    try {
      const response = await api.get('/events/upcoming');
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockEventService.getUpcomingEvents();
    }
  },

  // Get upcoming events by region
  getUpcomingEventsByRegion: async (region) => {
    if (USE_MOCK_DATA) {
      return mockEventService.getEventsByRegion(region);
    }
    
    try {
      const response = await api.get(`/events/upcoming/${region}`);
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockEventService.getEventsByRegion(region);
    }
  },

  // Get events by date range
  getEventsByDateRange: async (startDate, endDate, region = null) => {
    try {
      const params = new URLSearchParams();
      params.append('startDate', startDate);
      params.append('endDate', endDate);
      if (region) params.append('region', region);

      const response = await api.get(`/events/date-range?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch events by date range');
    }
  },

  // Search events with filters
  searchEvents: async (filters = {}) => {
    try {
      const params = new URLSearchParams();
      if (filters.name) params.append('name', filters.name);
      if (filters.location) params.append('location', filters.location);
      if (filters.eventType) params.append('eventType', filters.eventType);
      if (filters.region) params.append('region', filters.region);

      const response = await api.get(`/events/search?${params.toString()}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to search events');
    }
  },

  // Create new event (admin only)
  createEvent: async (eventData) => {
    try {
      const response = await api.post('/events', eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create event');
    }
  },

  // Update event (admin only)
  updateEvent: async (id, eventData) => {
    try {
      const response = await api.put(`/events/${id}`, eventData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update event');
    }
  },

  // Delete event (admin only)
  deleteEvent: async (id) => {
    try {
      await api.delete(`/events/${id}`);
      return true;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete event');
    }
  }
};

export default eventService;