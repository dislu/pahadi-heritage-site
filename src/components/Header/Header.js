import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';
import LanguageToggle from '../LanguageToggle/LanguageToggle';
import { useTranslation } from '../../hooks/useTranslation';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-link">
            <Logo size="medium" />
          </Link>
          
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <Link to="/" className="nav-link">{t('nav.home')}</Link>
            <Link to="/hotels" className="nav-link">{t('nav.hotels')}</Link>
            <Link to="/history" className="nav-link">{t('nav.history')}</Link>
            <Link to="/geography" className="nav-link">{t('nav.geography')}</Link>
            <Link to="/events" className="nav-link">{t('nav.events')}</Link>
            <Link to="/tourist-places" className="nav-link">{t('nav.touristPlaces')}</Link>
            <Link to="/radio" className="nav-link">{t('nav.radio')}</Link>
            <Link to="/shaadi" className="nav-link">{t('nav.shaadi')}</Link>
            <Link to="/festivals" className="nav-link">{t('nav.festivals')}</Link>
            <Link to="/about" className="nav-link">{t('nav.about')}</Link>
          </nav>
          
          <div className="header-controls">
            <LanguageToggle />
          </div>
          
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;