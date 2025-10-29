// Mock data for testing API integration
export const mockHotels = [
  {
    id: 1,
    name: "Himalayan Heritage Resort",
    city: "Rishikesh",
    region: "UTTARAKHAND",
    description: "A serene resort nestled in the foothills of the Himalayas, offering authentic Pahadi hospitality.",
    pricePerNight: 3500,
    rating: 4.5,
    imageUrl: null,
    isFeatured: true,
    amenities: ["Free WiFi", "Restaurant", "Spa", "Mountain View", "River Side"],
    isActive: true
  },
  {
    id: 2,
    name: "Apple Valley Inn",
    city: "Manali",
    region: "HIMACHAL_PRADESH",
    description: "Charming accommodation in the heart of apple orchards with stunning valley views.",
    pricePerNight: 2800,
    rating: 4.2,
    imageUrl: null,
    isFeatured: true,
    amenities: ["Orchard View", "Bonfire", "Local Cuisine", "Trekking Guide"],
    isActive: true
  },
  {
    id: 3,
    name: "Everest View Lodge",
    city: "Kathmandu",
    region: "NEPAL",
    description: "Traditional Nepali hospitality with modern amenities in the capital city.",
    pricePerNight: 2200,
    rating: 4.0,
    imageUrl: null,
    isFeatured: false,
    amenities: ["City View", "Cultural Tours", "Traditional Food", "Shopping Nearby"],
    isActive: true
  }
];

export const mockEvents = [
  {
    id: 1,
    name: "Kedarnath Yatra Opening",
    description: "Sacred pilgrimage to one of the twelve Jyotirlingas, marking the temple opening after winter.",
    startDate: "2025-05-15T06:00:00",
    endDate: "2025-05-15T18:00:00",
    location: "Kedarnath Temple, Rudraprayag",
    region: "UTTARAKHAND",
    eventType: "RELIGIOUS",
    price: 0,
    organizer: "Kedarnath Temple Committee",
    isActive: true
  },
  {
    id: 2,
    name: "Kullu Dussehra Festival",
    description: "The grand week-long festival celebrating the victory of good over evil with traditional dances and processions.",
    startDate: "2025-10-15T09:00:00",
    endDate: "2025-10-22T21:00:00",
    location: "Kullu, Himachal Pradesh",
    region: "HIMACHAL_PRADESH",
    eventType: "FESTIVAL",
    price: 0,
    organizer: "Kullu District Administration",
    isActive: true
  },
  {
    id: 3,
    name: "Everest Marathon",
    description: "World's highest marathon starting from Everest Base Camp, a challenging adventure race.",
    startDate: "2025-05-29T06:00:00",
    endDate: "2025-05-29T15:00:00",
    location: "Everest Base Camp, Nepal",
    region: "NEPAL",
    eventType: "SPORTS",
    price: 15000,
    organizer: "Nepal Mountaineering Association",
    isActive: true
  }
];

// Mock API functions that simulate backend responses
export const mockHotelService = {
  getAllHotels: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHotels), 500);
    });
  },

  getFeaturedHotels: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHotels.filter(h => h.isFeatured)), 300);
    });
  },

  getHotelsByRegion: async (region) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockHotels.filter(h => h.region === region)), 400);
    });
  },

  searchHotels: async (filters) => {
    return new Promise((resolve) => {
      let filtered = mockHotels;
      
      if (filters.region && filters.region !== 'ALL') {
        filtered = filtered.filter(h => h.region === filters.region);
      }
      if (filters.city) {
        filtered = filtered.filter(h => h.city.toLowerCase().includes(filters.city.toLowerCase()));
      }
      if (filters.name) {
        filtered = filtered.filter(h => h.name.toLowerCase().includes(filters.name.toLowerCase()));
      }
      if (filters.minPrice) {
        filtered = filtered.filter(h => h.pricePerNight >= parseFloat(filters.minPrice));
      }
      if (filters.maxPrice) {
        filtered = filtered.filter(h => h.pricePerNight <= parseFloat(filters.maxPrice));
      }
      
      setTimeout(() => resolve(filtered), 600);
    });
  }
};

export const mockEventService = {
  getAllEvents: async () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockEvents), 500);
    });
  },

  getUpcomingEvents: async () => {
    const now = new Date();
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockEvents.filter(e => new Date(e.startDate) > now)), 300);
    });
  },

  getEventsByRegion: async (region) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockEvents.filter(e => e.region === region)), 400);
    });
  },

  getEventsByType: async (eventType) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockEvents.filter(e => e.eventType === eventType)), 400);
    });
  }
};