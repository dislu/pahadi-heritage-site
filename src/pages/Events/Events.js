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
              ))
            ) : (
              <div className="no-events">
                <p>{t('events.noEvents') || 'No events found for the selected criteria.'}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ event, isUpcoming = false }) => {
  const { t } = useTranslation();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventTypeIcon = (type) => {
    switch (type) {
      case 'FESTIVAL': return '🎉';
      case 'CULTURAL': return '🎭';
      case 'RELIGIOUS': return '🙏';
      case 'SPORTS': return '⚽';
      default: return '📅';
    }
  };

  return (
    <div className={`event-card ${isUpcoming ? 'upcoming-card' : ''}`}>
      <div className="event-date">
        <div className="date-icon">{getEventTypeIcon(event.eventType)}</div>
        <div className="date-info">
          <div className="date-day">{new Date(event.startDate).getDate()}</div>
          <div className="date-month">{new Date(event.startDate).toLocaleString('default', { month: 'short' })}</div>
        </div>
      </div>

      <div className="event-content">
        <div className="event-header">
          <h3>{event.name}</h3>
          <div className="event-type">{event.eventType?.replace('_', ' ')}</div>
        </div>

        <div className="event-details">
          <div className="detail-row">
            <strong>📅 {t('events.date') || 'Date'}:</strong> {formatDate(event.startDate)}
            {event.endDate && event.endDate !== event.startDate && 
              ` - ${formatDate(event.endDate)}`}
          </div>
          <div className="detail-row">
            <strong>📍 {t('events.location') || 'Location'}:</strong> {event.location}
          </div>
          <div className="detail-row">
            <strong>🌍 {t('events.region') || 'Region'}:</strong> {event.region?.replace('_', ' ')}
          </div>
          {event.ticketPrice && (
            <div className="detail-row">
              <strong>🎟️ {t('events.price') || 'Price'}:</strong> ₹{event.ticketPrice}
            </div>
          )}
          {event.organizer && (
            <div className="detail-row">
              <strong>🏢 {t('events.organizer') || 'Organizer'}:</strong> {event.organizer}
            </div>
          )}
        </div>

        {event.description && (
          <div className="event-description">
            <p>{event.description}</p>
          </div>
        )}

        <div className="event-actions">
          <button className="view-details-btn">
            {t('events.viewDetails') || 'View Details'}
          </button>
          <button className="register-btn">
            {t('events.register') || 'Register'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;