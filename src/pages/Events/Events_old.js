import React, { useState, useMemo } from 'react';
import { useDataFetch, useApiState } from '../../hooks/useApi';
import { eventService } from '../../services/eventService';
import { useTranslation } from '../../hooks/useTranslation';
import './Events.css';

const Events = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('ALL');
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [eventType, setEventType] = useState('ALL');

  // Fetch all events
  const { data: allEvents, loading: eventsLoading, error: eventsError, refetch } = useDataFetch(
    () => eventService.getAllEvents(),
    []
  );

  // Fetch upcoming events
  const { data: upcomingEvents, loading: upcomingLoading } = useDataFetch(
    () => eventService.getUpcomingEvents(),
    []
  );

  const { executeAsync, loading: searchLoading } = useApiState();

  // Filter events based on current selections
  const filteredEvents = useMemo(() => {
    if (!allEvents) return [];

    let filtered = allEvents;

    // Filter by region
    if (activeTab !== 'ALL') {
      filtered = filtered.filter(event => event.region === activeTab);
    }

    // Filter by event type
    if (eventType !== 'ALL') {
      filtered = filtered.filter(event => event.eventType === eventType);
    }

    // Filter by month
    if (selectedMonth !== 'all') {
      filtered = filtered.filter(event => {
        const eventDate = new Date(event.startDate);
        const month = eventDate.toLocaleString('default', { month: 'long' });
        return month.toLowerCase() === selectedMonth.toLowerCase();
      });
    }

    return filtered.sort((a, b) => new Date(a.startDate) - new Date(b.startDate));
  }, [allEvents, activeTab, selectedMonth, eventType]);

  // Search events by region
  const handleRegionChange = async (region) => {
    setActiveTab(region);
    
    if (region !== 'ALL') {
      try {
        await executeAsync(() => eventService.getEventsByRegion(region));
      } catch (error) {
        console.error('Failed to fetch events by region:', error);
      }
    }
  };

  // Get events by type
  const handleTypeChange = async (type) => {
    setEventType(type);
    
    if (type !== 'ALL') {
      try {
        await executeAsync(() => eventService.getEventsByType(type));
      } catch (error) {
        console.error('Failed to fetch events by type:', error);
      }
    }
  };

  if (eventsLoading) {
    return (
      <div className="events-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>{t('common.loading') || 'Loading events...'}</p>
        </div>
      </div>
    );
  }

  if (eventsError) {
    return (
      <div className="events-error">
        <div className="error-message">
          <h3>❌ {t('common.error') || 'Error'}</h3>
          <p>{eventsError}</p>
          <button onClick={refetch} className="retry-button">
            {t('common.retry') || 'Retry'}
          </button>
        </div>
      </div>
    );
  }

  // Static data as fallback (keeping some of the original structure for comparison)
  const staticEventsData = {
    uttarakhand: [
      {
        name: "Makar Sankranti Mela",
        date: "2025-01-14",
        month: "January",
        location: "Haridwar, Ganga Ghat",
        type: "Religious Festival",
        duration: "3 days",
        description: "Grand celebration marking the sun's transition into Capricorn with holy dips in Ganga and kite flying.",
        highlights: ["Mass congregation", "Holy bathing", "Kite flying", "Traditional sweets", "Cultural programs"],
        ticketPrice: "Free",
        organizer: "Haridwar Temple Committee",
        icon: "🪁"
      },
      {
        name: "Phool Dei Festival",
        date: "2025-03-15",
        month: "March", 
        location: "Kumaon Region Villages",
        type: "Cultural Festival",
        duration: "1 month",
        description: "Spring festival where children go door-to-door blessing homes with flowers and traditional songs.",
        highlights: ["Children's processions", "Flower decorations", "Traditional songs", "Community blessings", "Spring celebration"],
        ticketPrice: "Free",
        organizer: "Local Village Communities",
        icon: "🌸"
      },
      {
        name: "Kedarnath Temple Opening",
        date: "2025-05-10",
        month: "May",
        location: "Kedarnath Temple, Rudraprayag",
        type: "Religious Event",
        duration: "1 day ceremony",
        description: "Sacred ceremony marking the opening of Kedarnath temple doors after winter closure.",
        highlights: ["Temple door opening", "Special prayers", "Pilgrimage beginning", "Cultural performances", "Mass gathering"],
        ticketPrice: "Free (Travel costs apply)",
        organizer: "Kedarnath Temple Committee", 
        icon: "🏛️"
      },
      {
        name: "Valley of Flowers Blooming Season",
        date: "2025-07-15",
        month: "July",
        location: "Valley of Flowers National Park",
        type: "Nature Event",
        duration: "60 days",
        description: "Peak blooming season in the UNESCO World Heritage valley with 600+ flower varieties.",
        highlights: ["600+ flower species", "Blue poppy blooms", "Photography tours", "Guided treks", "Research programs"],
        ticketPrice: "₹150 entry + Trek costs",
        organizer: "Forest Department",
        icon: "🌺"
      },
      {
        name: "Harela Festival",
        date: "2025-07-16",
        month: "July",
        location: "Garhwal and Kumaon Regions",
        type: "Harvest Festival",
        duration: "3 days",
        description: "Traditional harvest festival celebrating nature and agriculture with seed sowing ceremonies.",
        highlights: ["Seed sowing rituals", "Green processions", "Folk music", "Traditional dances", "Agriculture celebration"],
        ticketPrice: "Free",
        organizer: "Local Communities",
        icon: "🌾"
      },
      {
        name: "Nanda Devi Raj Jat Yatra",
        date: "2025-09-05",
        month: "September",
        location: "Chamoli District (Route: Nauti to Roopkund)",
        type: "Religious Pilgrimage",
        duration: "22 days",
        description: "The grand pilgrimage held every 12 years, covering 280km through Himalayan trails.",
        highlights: ["22-day journey", "280km trail", "Ancient rituals", "Cultural heritage", "Mountain expedition"],
        ticketPrice: "₹5000 registration",
        organizer: "Uttarakhand Government",
        icon: "⛰️"
      }
    ],
    himachal: [
      {
        name: "Winter Carnival Manali",
        date: "2025-01-02",
        month: "January",
        location: "Manali, Mall Road",
        type: "Winter Sports Festival",
        duration: "5 days",
        description: "Annual winter celebration featuring skiing competitions, cultural performances, and snow activities.",
        highlights: ["Skiing competitions", "Ice skating", "Cultural shows", "Snow sculptures", "Adventure sports"],
        ticketPrice: "₹500-2000 per activity",
        organizer: "Himachal Tourism",
        icon: "⛷️"
      },
      {
        name: "Losar Festival (Spiti)",
        date: "2025-02-18",
        month: "February",
        location: "Spiti Valley Monasteries",
        type: "Buddhist New Year",
        duration: "15 days",
        description: "Tibetan Buddhist New Year celebrated with traditional dances, prayers, and cultural programs.",
        highlights: ["Monastery ceremonies", "Traditional dances", "Butter tea", "Prayer flags", "Cultural exchange"],
        ticketPrice: "Free",
        organizer: "Spiti Monasteries",
        icon: "🏔️"
      },
      {
        name: "Apple Blossom Festival",
        date: "2025-05-01",
        month: "May",
        location: "Shimla, Kinnaur Valley",
        type: "Agricultural Festival",
        duration: "10 days",
        description: "Celebration of apple blossom season with cultural programs, local cuisine, and orchard tours.",
        highlights: ["Apple orchard tours", "Traditional dances", "Local cuisine", "Photography contests", "Cultural exhibitions"],
        ticketPrice: "₹200 entry",
        organizer: "Himachal Apple Growers",
        icon: "🍎"
      },
      {
        name: "Kullu Dussehra",
        date: "2025-10-15",
        month: "October",
        location: "Kullu, Dhalpur Maidan",
        type: "Cultural Festival",
        duration: "7 days",
        description: "Unique Dussehra celebration starting when rest of India ends, featuring deity processions.",
        highlights: ["Deity processions", "International folk performances", "Traditional music", "Cultural exchange", "Handicraft fair"],
        ticketPrice: "Free",
        organizer: "Kullu Administration",
        icon: "🎭"
      },
      {
        name: "Great Himalayan National Park Festival",
        date: "2025-11-10",
        month: "November",
        location: "Great Himalayan National Park",
        type: "Eco Festival",
        duration: "3 days",
        description: "Wildlife and nature conservation festival promoting eco-tourism and local culture.",
        highlights: ["Wildlife tours", "Conservation talks", "Local handicrafts", "Cultural programs", "Nature photography"],
        ticketPrice: "₹300 + Park entry",
        organizer: "Forest Department & NGOs",
        icon: "🦌"
      },
      {
        name: "Kinnaur Kailash Festival",
        date: "2025-12-05",
        month: "December",
        location: "Kinnaur District",
        type: "Religious & Cultural",
        duration: "4 days",
        description: "Sacred festival celebrating Kinnaur Kailash with traditional customs and pilgrimage.",
        highlights: ["Sacred mountain views", "Traditional rituals", "Local dances", "Handicraft exhibition", "Spiritual talks"],
        ticketPrice: "₹100",
        organizer: "Kinnaur Cultural Society",
        icon: "🏔️"
      }
    ],
    nepal: [
      {
        name: "Maghe Sankranti",
        date: "2025-01-15",
        month: "January",
        location: "Devghat, Chitwan",
        type: "Religious Festival",
        duration: "1 day",
        description: "Nepalese New Year celebration with holy bathing, traditional foods, and cultural programs.",
        highlights: ["Holy river bathing", "Traditional sweets", "Cultural programs", "Charity events", "Family gatherings"],
        ticketPrice: "Free",
        organizer: "Local Communities",
        icon: "🌅"
      },
      {
        name: "Sonam Lhosar (Tamang New Year)",
        date: "2025-02-19",
        month: "February", 
        location: "Kathmandu, Tamang Communities",
        type: "Ethnic New Year",
        duration: "3 days",
        description: "Tamang community's New Year celebration with traditional dances and cultural exchange.",
        highlights: ["Tamang dances", "Traditional music", "Cultural exchange", "Community feasts", "Ethnic costumes"],
        ticketPrice: "Free",
        organizer: "Nepal Tamang Ghedung",
        icon: "🎊"
      },
      {
        name: "Buddha Jayanti Festival", 
        date: "2025-05-12",
        month: "May",
        location: "Lumbini, Swayambhunath",
        type: "Religious Festival",
        duration: "1 day",
        description: "Celebration of Lord Buddha's birth, enlightenment, and death with prayers and cultural programs.",
        highlights: ["Monastery ceremonies", "Peace rallies", "Cultural programs", "Meditation sessions", "Charitable activities"],
        ticketPrice: "Free",
        organizer: "Buddhist Monasteries",
        icon: "🧘"
      },
      {
        name: "Teej Festival",
        date: "2025-08-30",
        month: "August",
        location: "Pashupatinath Temple, Kathmandu",
        type: "Women's Festival", 
        duration: "3 days",
        description: "Women's festival for marital happiness with fasting, traditional songs, and cultural activities.",
        highlights: ["Women's gatherings", "Traditional songs", "Red saree processions", "Fasting rituals", "Cultural dances"],
        ticketPrice: "Free",
        organizer: "Women's Organizations",
        icon: "👗"
      },
      {
        name: "Dashain Festival",
        date: "2025-10-02",
        month: "October",
        location: "Nationwide Nepal",
        type: "Major Festival",
        duration: "15 days",
        description: "Nepal's biggest festival celebrating victory of good over evil with family reunions and celebrations.",
        highlights: ["Family reunions", "Tika ceremonies", "Kite flying", "Traditional feast", "Cultural programs"],
        ticketPrice: "Free",
        organizer: "Government of Nepal",
        icon: "🪁"
      },
      {
        name: "Mani Rimdu Festival",
        date: "2025-11-15",
        month: "November",
        location: "Tengboche Monastery, Everest Region",
        type: "Buddhist Festival",
        duration: "3 days", 
        description: "Sacred Buddhist festival in Everest region with masked dances and spiritual teachings.",
        highlights: ["Masked dances", "Monastery ceremonies", "Spiritual teachings", "Community blessings", "Cultural exchange"],
        ticketPrice: "Free (Trek costs apply)",
        organizer: "Tengboche Monastery",
        icon: "🎭"
      }
    ]
  };

  const months = ["all", "January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

  const getFilteredEvents = () => {
    let events = eventsData[activeTab];
    if (selectedMonth !== 'all') {
      events = events.filter(event => event.month === selectedMonth);
    }
    return events.sort((a, b) => new Date(a.date) - new Date(b.date));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="events-page">
      <div className="container">
        <header className="page-header">
          <h1>🎉 {t('events.title') || 'Upcoming Events & Celebrations'}</h1>
          <p className="subtitle">{t('events.subtitle') || 'Join the vibrant cultural festivals, religious ceremonies, and community celebrations across the Himalayan regions.'}</p>
        </header>

        {/* Filters Section */}
        <div className="filters-section">
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'ALL' ? 'active' : ''}`}
              onClick={() => handleRegionChange('ALL')}
            >
              🌏 {t('events.allRegions') || 'All Regions'}
            </button>
            <button 
              className={`tab ${activeTab === 'UTTARAKHAND' ? 'active' : ''}`}
              onClick={() => handleRegionChange('UTTARAKHAND')}
            >
              🔱 {t('regions.uttarakhand') || 'Uttarakhand'}
            </button>
            <button 
              className={`tab ${activeTab === 'HIMACHAL_PRADESH' ? 'active' : ''}`}
              onClick={() => handleRegionChange('HIMACHAL_PRADESH')}
            >
              🏔️ {t('regions.himachal') || 'Himachal Pradesh'}
            </button>
            <button 
              className={`tab ${activeTab === 'NEPAL' ? 'active' : ''}`}
              onClick={() => handleRegionChange('NEPAL')}
            >
              🇳🇵 {t('regions.nepal') || 'Nepal'}
            </button>
          </div>

          <div className="type-filter">
            <h3>🎭 {t('events.filterByType') || 'Filter by Type'}:</h3>
            <div className="type-buttons">
              <button 
                className={`type-btn ${eventType === 'ALL' ? 'active' : ''}`}
                onClick={() => handleTypeChange('ALL')}
              >
                🗂️ {t('events.allTypes') || 'All Types'}
              </button>
              <button 
                className={`type-btn ${eventType === 'FESTIVAL' ? 'active' : ''}`}
                onClick={() => handleTypeChange('FESTIVAL')}
              >
                🎉 {t('events.festivals') || 'Festivals'}
              </button>
              <button 
                className={`type-btn ${eventType === 'CULTURAL' ? 'active' : ''}`}
                onClick={() => handleTypeChange('CULTURAL')}
              >
                🎭 {t('events.cultural') || 'Cultural'}
              </button>
              <button 
                className={`type-btn ${eventType === 'RELIGIOUS' ? 'active' : ''}`}
                onClick={() => handleTypeChange('RELIGIOUS')}
              >
                🙏 {t('events.religious') || 'Religious'}
              </button>
              <button 
                className={`type-btn ${eventType === 'SPORTS' ? 'active' : ''}`}
                onClick={() => handleTypeChange('SPORTS')}
              >
                ⚽ {t('events.sports') || 'Sports'}
              </button>
            </div>
          </div>
        </div>

        {/* Upcoming Events Highlight */}
        {upcomingEvents && upcomingEvents.length > 0 && (
          <div className="upcoming-section">
            <h2>⭐ {t('events.upcoming') || 'Upcoming Events'}</h2>
            <div className="upcoming-grid">
              {upcomingEvents.slice(0, 3).map(event => (
                <EventCard key={event.id} event={event} isUpcoming={true} />
              ))}
            </div>
          </div>
        )}

        <div className="month-filter">
          <h3>📅 {t('events.filterByMonth') || 'Filter by Month'}:</h3>
          <div className="month-buttons">
            {['all', 'January', 'February', 'March', 'April', 'May', 'June', 
              'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
              <button 
                key={month}
                className={`month-btn ${selectedMonth === month ? 'active' : ''}`}
                onClick={() => setSelectedMonth(month)}
              >
                {month === 'all' ? '🗓️ All Year' : month}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content active">
          <div className="events-header">
            <h2>🎉 {activeTab === 'ALL' ? (t('events.allEvents') || 'All Events') : `${t(`regions.${activeTab.toLowerCase()}`) || activeTab} Events`}</h2>
            <p className="events-count">
              {filteredEvents?.length || 0} {selectedMonth === 'all' ? 'events' : selectedMonth + ' events'} scheduled
            </p>
          </div>

          <div className="events-timeline">
            {filteredEvents && filteredEvents.length > 0 ? (
              filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
                  </div>

                  <div className="event-description">
                    <p>{event.description}</p>
                  </div>

                  <div className="event-highlights">
                    <h4>✨ Event Highlights</h4>
                    <div className="highlights-grid">
                      {event.highlights.map((highlight, i) => (
                        <span key={i} className="highlight-tag">{highlight}</span>
                      ))}
                    </div>
                  </div>

                  <div className="event-actions">
                    <button className="btn-primary">📅 Add to Calendar</button>
                    <button className="btn-secondary">ℹ️ More Details</button>
                    <button className="btn-share">📱 Share Event</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredEvents().length === 0 && (
            <div className="no-events">
              <h3>🔍 No events found</h3>
              <p>Try selecting a different month to see more events, or check back later for updates.</p>
            </div>
          )}
        </div>

        <div className="event-planning-guide">
          <h3>📋 Event Planning Guide</h3>
          <div className="planning-grid">
            <div className="planning-card">
              <h4>🎒 What to Bring</h4>
              <ul>
                <li>Comfortable clothing suitable for weather</li>
                <li>Valid ID and required documents</li>
                <li>Camera for memorable moments</li>
                <li>Cash for local purchases and donations</li>
                <li>Respectful attitude towards local customs</li>
              </ul>
            </div>
            <div className="planning-card">
              <h4>🏨 Accommodation Tips</h4>
              <ul>
                <li>Book hotels well in advance during festival seasons</li>
                <li>Consider homestays for authentic experiences</li>
                <li>Check proximity to event venues</li>
                <li>Look for cultural immersion packages</li>
                <li>Contact local tourism offices for recommendations</li>
              </ul>
            </div>
            <div className="planning-card">
              <h4>🚗 Transportation</h4>
              <ul>
                <li>Public transport may be crowded during events</li>
                <li>Book private transport in advance</li>
                <li>Check road conditions for mountain areas</li>
                <li>Plan for longer travel times during festivals</li>
                <li>Consider helicopter services for remote locations</li>
              </ul>
            </div>
            <div className="planning-card">
              <h4>📱 Stay Connected</h4>
              <ul>
                <li>Download offline maps for remote areas</li>
                <li>Carry power banks and charging cables</li>
                <li>Share your itinerary with family/friends</li>
                <li>Keep emergency contact numbers handy</li>
                <li>Follow official event social media for updates</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;