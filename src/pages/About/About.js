import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const About = () => {
  const { t } = useTranslation();
  return (
    <div style={{ marginTop: '70px', padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>{t('about.title')}</h1>
        <div style={{ padding: '2rem', background: 'white', borderRadius: '15px' }}>
          <h2>🏔️ {t('about.mission')}</h2>
          <p>{t('about.missionText')}</p>
          
          <h3>🌟 {t('about.whatWeDo')}</h3>
          <ul>
            {t('about.services').map((service, index) => (
              <li key={index}>� {service}</li>
            ))}
          </ul>
          
          <h3>🎯 Our Vision</h3>
          <p>To create a comprehensive platform that celebrates the diversity of Pahadi cultures while supporting sustainable tourism and community connections in the mountain regions of India and Nepal.</p>
          
          <h3>🤝 Join Our Mission</h3>
          <p>Whether you're a traveler seeking authentic mountain experiences, a community member wanting to share your heritage, or someone looking to connect with Pahadi culture, we welcome you to be part of our growing community.</p>
        </div>
      </div>
    </div>
  );
};

export default About;