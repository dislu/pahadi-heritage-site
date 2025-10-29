import React, { useState } from 'react';
import { useDataFetch, useApiState } from '../../hooks/useApi';
import { hotelService } from '../../services/hotelService';
import { useTranslation } from '../../hooks/useTranslation';
import './Hotels.css';

const Hotels = () => {
  const { t } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState('ALL');
  const [searchFilters, setSearchFilters] = useState({
    name: '',
    minPrice: '',
    maxPrice: '',
    city: ''
  });

  // Fetch all hotels
  const { data: allHotels, loading: hotelsLoading, error: hotelsError, refetch } = useDataFetch(
    () => hotelService.getAllHotels(),
    []
  );

  // Fetch featured hotels
  const { data: featuredHotels, loading: featuredLoading } = useDataFetch(
    () => hotelService.getFeaturedHotels(),
    []
  );

  const { executeAsync, loading: searchLoading } = useApiState();

  // Filter hotels by region
  const filteredHotels = selectedRegion === 'ALL' 
    ? allHotels 
    : allHotels?.filter(hotel => hotel.region === selectedRegion);

  // Handle search
  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const results = await executeAsync(() => hotelService.searchHotels({
        ...searchFilters,
        region: selectedRegion !== 'ALL' ? selectedRegion : undefined
      }));
      // Update the data with search results
      // Note: In a real app, you'd want to manage this state properly
      console.log('Search results:', results);
    } catch (error) {
      console.error('Search failed:', error);
    }
  };

  const handleFilterChange = (field, value) => {
    setSearchFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  if (hotelsLoading) {
    return (
      <div className="hotels-loading">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>{t('common.loading') || 'Loading...'}</p>
        </div>
      </div>
    );
  }

  if (hotelsError) {
    return (
      <div className="hotels-error">
        <div className="error-message">
          <h3>❌ {t('common.error') || 'Error'}</h3>
          <p>{hotelsError}</p>
          <button onClick={refetch} className="retry-button">
            {t('common.retry') || 'Retry'}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="hotels-page">
      <div className="hotels-header">
        <h1>{t('hotels.title') || '🏨 Hotel Booking'}</h1>
        <p>{t('hotels.subtitle') || 'Discover amazing hotels in the beautiful Pahadi regions'}</p>
      </div>

      {/* Search and Filters */}
      <div className="hotels-search">
        <form onSubmit={handleSearch} className="search-form">
          <div className="search-filters">
            <input
              type="text"
              placeholder={t('hotels.searchPlaceholder') || 'Search hotels...'}
              value={searchFilters.name}
              onChange={(e) => handleFilterChange('name', e.target.value)}
              className="search-input"
            />
            
            <select
              value={selectedRegion}
              onChange={(e) => setSelectedRegion(e.target.value)}
              className="region-select"
            >
              <option value="ALL">{t('hotels.allRegions') || 'All Regions'}</option>
              <option value="UTTARAKHAND">{t('regions.uttarakhand') || 'Uttarakhand'}</option>
              <option value="HIMACHAL_PRADESH">{t('regions.himachal') || 'Himachal Pradesh'}</option>
              <option value="NEPAL">{t('regions.nepal') || 'Nepal'}</option>
            </select>

            <input
              type="text"
              placeholder={t('hotels.cityPlaceholder') || 'City'}
              value={searchFilters.city}
              onChange={(e) => handleFilterChange('city', e.target.value)}
              className="city-input"
            />

            <div className="price-filters">
              <input
                type="number"
                placeholder={t('hotels.minPrice') || 'Min Price'}
                value={searchFilters.minPrice}
                onChange={(e) => handleFilterChange('minPrice', e.target.value)}
                className="price-input"
              />
              <input
                type="number"
                placeholder={t('hotels.maxPrice') || 'Max Price'}
                value={searchFilters.maxPrice}
                onChange={(e) => handleFilterChange('maxPrice', e.target.value)}
                className="price-input"
              />
            </div>

            <button type="submit" disabled={searchLoading} className="search-button">
              {searchLoading ? '...' : (t('hotels.search') || 'Search')}
            </button>
          </div>
        </form>
      </div>

      {/* Featured Hotels */}
      {featuredHotels && featuredHotels.length > 0 && (
        <div className="featured-section">
          <h2>{t('hotels.featured') || '⭐ Featured Hotels'}</h2>
          <div className="hotels-grid">
            {featuredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      )}

      {/* All Hotels */}
      <div className="hotels-section">
        <h2>
          {selectedRegion === 'ALL' 
            ? (t('hotels.allHotels') || '🏨 All Hotels') 
            : `🏨 ${t(`regions.${selectedRegion.toLowerCase()}`) || selectedRegion} Hotels`
          }
        </h2>
        
        {filteredHotels && filteredHotels.length > 0 ? (
          <div className="hotels-grid">
            {filteredHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        ) : (
          <div className="no-hotels">
            <p>{t('hotels.noResults') || 'No hotels found for the selected criteria.'}</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Hotel Card Component
const HotelCard = ({ hotel }) => {
  const { t } = useTranslation();

  return (
    <div className="hotel-card">
      <div className="hotel-image">
        {hotel.imageUrl ? (
          <img src={hotel.imageUrl} alt={hotel.name} />
        ) : (
          <div className="placeholder-image">
            🏨
          </div>
        )}
        {hotel.isFeatured && (
          <div className="featured-badge">⭐ Featured</div>
        )}
      </div>
      
      <div className="hotel-info">
        <h3 className="hotel-name">{hotel.name}</h3>
        <p className="hotel-location">📍 {hotel.city}, {hotel.region?.replace('_', ' ')}</p>
        
        {hotel.description && (
          <p className="hotel-description">{hotel.description}</p>
        )}
        
        <div className="hotel-details">
          <div className="hotel-rating">
            ⭐ {hotel.rating || 'N/A'}/5
          </div>
          <div className="hotel-price">
            ₹{hotel.pricePerNight}/night
          </div>
        </div>
        
        {hotel.amenities && hotel.amenities.length > 0 && (
          <div className="hotel-amenities">
            {hotel.amenities.slice(0, 3).map((amenity, index) => (
              <span key={index} className="amenity-tag">
                {amenity}
              </span>
            ))}
            {hotel.amenities.length > 3 && (
              <span className="more-amenities">+{hotel.amenities.length - 3} more</span>
            )}
          </div>
        )}
        
        <div className="hotel-actions">
          <button className="view-details-btn">
            {t('hotels.viewDetails') || 'View Details'}
          </button>
          <button className="book-now-btn">
            {t('hotels.bookNow') || 'Book Now'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hotels;