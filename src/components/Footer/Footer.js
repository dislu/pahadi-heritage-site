import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Pahadi Heritage</h3>
            <p>Discover the rich culture, history, and natural beauty of the Pahadi regions - Uttarakhand, Himachal Pradesh, and Nepal.</p>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fab fa-youtube"></i></a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/hotels">Hotels</Link></li>
              <li><Link to="/tourist-places">Tourist Places</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/festivals">Festivals</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Culture & Heritage</h4>
            <ul>
              <li><Link to="/history">History</Link></li>
              <li><Link to="/geography">Geography</Link></li>
              <li><Link to="/radio">Pahadi Radio</Link></li>
              <li><Link to="/about">About Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><Link to="/shaadi">Pahadi Shaadi</Link></li>
              <li><Link to="/hotels">Book Hotels</Link></li>
              <li><Link to="/events">Event Booking</Link></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Pahadi Heritage. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#sitemap">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;