import React from 'react';
import './Logo.css';

const Logo = ({ size = 'medium' }) => {
  return (
    <div className={`pahadi-logo ${size}`}>
      <div className="logo-mountains">
        <div className="mountain mountain-1"></div>
        <div className="mountain mountain-2"></div>
        <div className="mountain mountain-3"></div>
      </div>
      <div className="logo-text">
        <span className="logo-hindi">पहाड़ी</span>
        <span className="logo-subtitle">विरासत</span>
      </div>
    </div>
  );
};

export default Logo;