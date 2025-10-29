import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import { useTranslation } from '../../hooks/useTranslation';
import './Home.css';

const Home = () => {
  const [activeTab, setActiveTab] = useState('uttarakhand');
  const { t } = useTranslation();

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-logo">
              <Logo size="large" />
            </div>
            <h1>{t('home.title')}</h1>
            <p>{t('home.subtitle')}</p>
            <div className="hero-buttons">
              <Link to="/hotels" className="btn">{t('home.bookYourStay')}</Link>
              <Link to="/tourist-places" className="btn btn-secondary">{t('home.explorePlaces')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title">Explore Our Services</h2>
          <div className="grid grid-4">
            <Link to="/hotels" className="quick-link-card">
              <i className="fas fa-hotel"></i>
              <h3>Hotels</h3>
              <p>Find and book accommodations in beautiful mountain regions</p>
            </Link>
            <Link to="/history" className="quick-link-card">
              <i className="fas fa-scroll"></i>
              <h3>History</h3>
              <p>Discover the rich tribal heritage and cultural traditions</p>
            </Link>
            <Link to="/geography" className="quick-link-card">
              <i className="fas fa-mountain"></i>
              <h3>Geography</h3>
              <p>Explore diverse landscapes and geographical features</p>
            </Link>
            <Link to="/events" className="quick-link-card">
              <i className="fas fa-calendar-alt"></i>
              <h3>Events</h3>
              <p>Join upcoming cultural celebrations and festivals</p>
            </Link>
            <Link to="/tourist-places" className="quick-link-card">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Tourist Places</h3>
              <p>Visit breathtaking destinations and hidden gems</p>
            </Link>
            <Link to="/radio" className="quick-link-card">
              <i className="fas fa-radio"></i>
              <h3>Pahadi Radio</h3>
              <p>Listen to traditional folk music and local news</p>
            </Link>
            <Link to="/shaadi" className="quick-link-card">
              <i className="fas fa-heart"></i>
              <h3>Pahadi Shaadi</h3>
              <p>Find your perfect Pahadi life partner</p>
            </Link>
            <Link to="/festivals" className="quick-link-card">
              <i className="fas fa-star"></i>
              <h3>Festivals</h3>
              <p>Celebrate traditional Pahadi festivals and customs</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Regions */}
      <section className="section-padding regions-section">
        <div className="container">
          <h2 className="section-title">Explore Pahadi Regions</h2>
          <div className="tabs">
            <button 
              className={`tab ${activeTab === 'uttarakhand' ? 'active' : ''}`}
              onClick={() => handleTabChange('uttarakhand')}
            >
              Uttarakhand
            </button>
            <button 
              className={`tab ${activeTab === 'himachal' ? 'active' : ''}`}
              onClick={() => handleTabChange('himachal')}
            >
              Himachal Pradesh
            </button>
            <button 
              className={`tab ${activeTab === 'nepal' ? 'active' : ''}`}
              onClick={() => handleTabChange('nepal')}
            >
              Nepal
            </button>
          </div>

          <div className={`tab-content ${activeTab === 'uttarakhand' ? 'active' : ''}`}>
            <div className="region-content uttarakhand-content">
              <h3>Uttarakhand - Land of the Gods</h3>
              <p>Discover the spiritual heartland of India with its sacred rivers, ancient temples, and diverse tribal communities including the Garhwali and Kumaoni people.</p>
              <div className="region-features">
                <span>Sacred Ganges</span>
                <span>Himalayan Peaks</span>
                <span>Yoga Capital</span>
                <span>Ancient Temples</span>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'himachal' ? 'active' : ''}`}>
            <div className="region-content himachal-content">
              <h3>Himachal Pradesh - Land of Snow</h3>
              <p>Experience the beauty of the Himalayan foothills with their apple orchards, Buddhist monasteries, and vibrant communities like the Kinnaura and Gaddi people.</p>
              <div className="region-features">
                <span>Hill Stations</span>
                <span>Apple Orchards</span>
                <span>Buddhist Culture</span>
                <span>Adventure Sports</span>
              </div>
            </div>
          </div>

          <div className={`tab-content ${activeTab === 'nepal' ? 'active' : ''}`}>
            <div className="region-content nepal-content">
              <h3>Nepal - Roof of the World</h3>
              <p>Explore the highest peaks on Earth and meet the legendary mountain communities including the Sherpa, Tamang, and Gurung people who call these heights home.</p>
              <div className="region-features">
                <span>Mount Everest</span>
                <span>Sherpa Culture</span>
                <span>Buddhist Heritage</span>
                <span>Trekking Paradise</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;