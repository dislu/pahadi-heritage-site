import api from './api';
import { mockHotelService } from './mockData';

// Flag to enable/disable mock data (set to false when backend is running)
const USE_MOCK_DATA = true;

// Hotel API service
export const hotelService = {
  // Get all active hotels
  getAllHotels: async () => {
    if (USE_MOCK_DATA) {
      return mockHotelService.getAllHotels();
    }
    
    try {
      const response = await api.get('/hotels');
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockHotelService.getAllHotels();
    }
  },

  // Get hotel by ID
  getHotelById: async (id) => {
    try {
      const response = await api.get(`/hotels/${id}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch hotel details');
    }
  },

  // Get hotels by region
  getHotelsByRegion: async (region) => {
    try {
      const response = await api.get(`/hotels/region/${region}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch hotels by region');
    }
  },

  // Get hotels by city
  getHotelsByCity: async (city) => {
    try {
      const response = await api.get(`/hotels/city/${city}`);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to fetch hotels by city');
    }
  },

  // Get featured hotels
  getFeaturedHotels: async () => {
    if (USE_MOCK_DATA) {
      return mockHotelService.getFeaturedHotels();
    }
    
    try {
      const response = await api.get('/hotels/featured');
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockHotelService.getFeaturedHotels();
    }
  },

  // Search hotels with filters
  searchHotels: async (filters = {}) => {
    if (USE_MOCK_DATA) {
      return mockHotelService.searchHotels(filters);
    }
    
    try {
      const params = new URLSearchParams();
      if (filters.name) params.append('name', filters.name);
      if (filters.minPrice) params.append('minPrice', filters.minPrice);
      if (filters.maxPrice) params.append('maxPrice', filters.maxPrice);
      if (filters.city) params.append('city', filters.city);
      if (filters.region) params.append('region', filters.region);

      const response = await api.get(`/hotels/search?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.warn('Backend not available, using mock data');
      return mockHotelService.searchHotels(filters);
    }
  },

  // Create new hotel (admin only)
  createHotel: async (hotelData) => {
    try {
      const response = await api.post('/hotels', hotelData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to create hotel');
    }
  },

  // Update hotel (admin only)
  updateHotel: async (id, hotelData) => {
    try {
      const response = await api.put(`/hotels/${id}`, hotelData);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to update hotel');
    }
  },

  // Delete hotel (admin only)
  deleteHotel: async (id) => {
    try {
      await api.delete(`/hotels/${id}`);
      return true;
    } catch (error) {
      throw new Error(error.response?.data?.message || 'Failed to delete hotel');
    }
  }
};

export default hotelService;