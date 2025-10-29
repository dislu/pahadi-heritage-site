import React, { useState } from 'react';
import './Festivals.css';

const Festivals = () => {
  const [selectedMonth, setSelectedMonth] = useState('all');
  const [activeRegion, setActiveRegion] = useState('all');

  const festivalsData = {
    uttarakhand: [
      {
        name: "Harela",
        month: "July",
        date: "16th July",
        duration: "3 days",
        significance: "Harvest festival celebrating nature and agriculture",
        traditions: ["Sowing 7 types of seeds", "Green processions", "Folk songs and dances", "Blessing ceremonies"],
        locations: ["Kumaon", "Garhwal"],
        icon: "🌾"
      },
      {
        name: "Ganga Dussehra", 
        month: "June",
        date: "June (Jyeshtha Shukla Dashami)",
        duration: "10 days",
        significance: "Celebrates descent of Ganges to earth",
        traditions: ["River bathing", "Aarti ceremonies", "Sacred offerings", "Pilgrimage to Haridwar"],
        locations: ["Haridwar", "Rishikesh", "Devprayag"],
        icon: "🌊"
      },
      {
        name: "Nanda Devi Raj Jat",
        month: "September",
        date: "Every 12 years in September",
        duration: "22 days",
        significance: "Grand pilgrimage to honor Goddess Nanda Devi",
        traditions: ["220 km trek", "Traditional music", "Community feasts", "Ancient rituals"],
        locations: ["Roopkund", "Homkund", "Nanda Devi peaks"],
        icon: "⛰️"
      },
      {
        name: "Phool Dei",
        month: "March",
        date: "March (Chaitra month)",
        duration: "1 month",
        significance: "Spring festival welcoming new harvest season", 
        traditions: ["Children's door-to-door visits", "Flower offerings", "Folk songs", "Blessings for prosperity"],
        locations: ["Kumaon hills", "Village communities"],
        icon: "🌸"
      },
      {
        name: "Ghee Sankranti",
        month: "August",
        date: "August 15th",
        duration: "1 day",
        significance: "Celebrates abundance of dairy products",
        traditions: ["Ghee offerings", "Traditional sweets", "Community feasts", "Folk performances"],
        locations: ["Rural Uttarakhand", "Garhwal region"],
        icon: "🥛"
      },
      {
        name: "Makar Sankranti",
        month: "January",
        date: "January 14th",
        duration: "3 days",
        significance: "Sun's transition into Capricorn zodiac",
        traditions: ["Kite flying", "Til-gud sweets", "Holy baths", "Charity and donations"],
        locations: ["Haridwar", "Throughout Uttarakhand"],
        icon: "🪁"
      }
    ],
    himachal: [
      {
        name: "Kullu Dussehra",
        month: "October",
        date: "October (after Vijaya Dashami)",
        duration: "7 days",
        significance: "Unique celebration starting when Dussehra ends elsewhere",
        traditions: ["Deity processions", "Traditional music", "Folk dances", "International performances"],
        locations: ["Kullu valley", "Dhalpur maidan"],
        icon: "🎭"
      },
      {
        name: "Winter Carnival",
        month: "January",
        date: "January 2-6",
        duration: "5 days",
        significance: "Celebrates winter sports and snow activities",
        traditions: ["Skiing competitions", "Ice skating", "Snow sculptures", "Cultural programs"],
        locations: ["Manali", "Shimla", "Snow-covered regions"],
        icon: "⛷️"
      },
      {
        name: "Losar (Spiti)",
        month: "February",
        date: "February/March (Tibetan New Year)",
        duration: "15 days",
        significance: "Tibetan Buddhist New Year celebrations",
        traditions: ["Monastery prayers", "Butter tea", "Traditional dances", "Family reunions"],
        locations: ["Spiti Valley", "Kinnaur", "Buddhist monasteries"],
        icon: "🏔️"
      },
      {
        name: "Minjar Fair",
        month: "August",
        date: "August (Shravan month)",
        duration: "7 days",
        significance: "Celebrates maize harvest and silk thread tradition",
        traditions: ["Minjar (silk thread) offerings", "Folk music", "Traditional crafts", "River ceremonies"],
        locations: ["Chamba", "Ravi river banks"],
        icon: "🌽"
      },
      {
        name: "Apple Festival",
        month: "May",
        date: "May-June",
        duration: "3 days",
        significance: "Celebrates apple blossom and harvest culture",
        traditions: ["Apple competitions", "Traditional dances", "Local cuisine", "Cultural exhibitions"],
        locations: ["Shimla", "Kinnaur", "Apple orchards"],
        icon: "🍎"
      },
      {
        name: "Phulaich Festival",
        month: "September",
        date: "September (Harvest time)",
        duration: "2 days", 
        significance: "Kinnaur's flower and harvest festival",
        traditions: ["Flower decorations", "Traditional attire", "Community feasts", "Folk performances"],
        locations: ["Kinnaur district", "Mountain villages"],
        icon: "🌺"
      }
    ],
    nepal: [
      {
        name: "Dashain",
        month: "October",
        date: "September/October (15 days)",
        duration: "15 days",
        significance: "Nepal's biggest festival celebrating good over evil",
        traditions: ["Flying kites", "Family gatherings", "Tika ceremonies", "Animal sacrifices"],
        locations: ["Nationwide", "Kathmandu Durbar Square"],
        icon: "🪁"
      },
      {
        name: "Tihar (Deepawali)",
        month: "November",
        date: "October/November (5 days)",
        duration: "5 days", 
        significance: "Festival of lights honoring different animals and relationships",
        traditions: ["Lighting oil lamps", "Worshipping animals", "Deusi-bhailo songs", "Gai Tihar (cow worship)"],
        locations: ["Nationwide", "Urban and rural areas"],
        icon: "🪔"
      },
      {
        name: "Losar (Sherpa New Year)",
        month: "February",
        date: "February/March",
        duration: "3 days",
        significance: "Sherpa community's New Year celebration",
        traditions: ["Monastery visits", "Traditional dances", "Family feasts", "Prayer flag ceremonies"],
        locations: ["Solukhumbu", "Everest region", "Sherpa communities"],
        icon: "🏔️"
      },
      {
        name: "Buddha Jayanti",
        month: "May",
        date: "May (Vesak Purnima)",
        duration: "1 day",
        significance: "Celebrates birth, enlightenment, and death of Buddha",
        traditions: ["Monastery prayers", "Meditation sessions", "Charitable activities", "Peace rallies"],
        locations: ["Lumbini", "Buddhist monasteries", "Kathmandu"],
        icon: "🧘"
      },
      {
        name: "Teej",
        month: "August",
        date: "August/September",
        duration: "3 days",
        significance: "Women's festival for marital happiness and prosperity",
        traditions: ["Fasting", "Red sarees", "Traditional songs", "Swinging on jhulas"],
        locations: ["Kathmandu", "Pashupatinath Temple", "Rural areas"],
        icon: "👗"
      },
      {
        name: "Mani Rimdu",
        month: "November",
        date: "November (at Tengboche)",
        duration: "3 days",
        significance: "Sacred Buddhist festival in Everest region",
        traditions: ["Masked dances", "Monastery ceremonies", "Spiritual teachings", "Community blessings"],
        locations: ["Tengboche Monastery", "Everest region", "Sherpa villages"],
        icon: "🎭"
      }
    ]
  };

  const months = ["all", "January", "February", "March", "April", "May", "June", 
                  "July", "August", "September", "October", "November", "December"];

  const regions = [
    { key: "all", name: "All Regions", icon: "🏔️" },
    { key: "uttarakhand", name: "Uttarakhand", icon: "🔱" },
    { key: "himachal", name: "Himachal Pradesh", icon: "🏔️" },
    { key: "nepal", name: "Nepal", icon: "🇳🇵" }
  ];

  const getFilteredFestivals = () => {
    let allFestivals = [];
    
    if (activeRegion === 'all') {
      Object.keys(festivalsData).forEach(region => {
        festivalsData[region].forEach(festival => {
          allFestivals.push({ ...festival, region });
        });
      });
    } else {
      festivalsData[activeRegion].forEach(festival => {
        allFestivals.push({ ...festival, region: activeRegion });
      });
    }

    if (selectedMonth !== 'all') {
      allFestivals = allFestivals.filter(festival => festival.month === selectedMonth);
    }

    return allFestivals;
  };

  return (
    <div className="festivals-page">
      <div className="container">
        <header className="page-header">
          <h1>� Pahadi Festivals Calendar</h1>
          <p className="subtitle">Experience the vibrant celebrations, ancient traditions, and spiritual festivities across the Himalayan regions throughout the year.</p>
        </header>

        <div className="filters-section">
          <div className="region-filters">
            <h3>🏔️ Select Region:</h3>
            <div className="filter-buttons">
              {regions.map(region => (
                <button 
                  key={region.key}
                  className={`filter-btn ${activeRegion === region.key ? 'active' : ''}`}
                  onClick={() => setActiveRegion(region.key)}
                >
                  {region.icon} {region.name}
                </button>
              ))}
            </div>
          </div>

          <div className="month-filters">
            <h3>📅 Filter by Month:</h3>
            <div className="month-grid">
              {months.map(month => (
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
        </div>

        <div className="festivals-grid">
          {getFilteredFestivals().map((festival, index) => (
            <div key={index} className="festival-card">
              <div className="festival-header">
                <div className="festival-icon">{festival.icon}</div>
                <div className="festival-title">
                  <h3>{festival.name}</h3>
                  <div className="region-badge">{festival.region}</div>
                </div>
              </div>

              <div className="festival-details">
                <div className="date-info">
                  <div className="detail-item">
                    <strong>📅 Date:</strong> {festival.date}
                  </div>
                  <div className="detail-item">
                    <strong>⏱️ Duration:</strong> {festival.duration}
                  </div>
                  <div className="detail-item">
                    <strong>📍 Locations:</strong> {festival.locations.join(', ')}
                  </div>
                </div>

                <div className="significance">
                  <h4>✨ Significance</h4>
                  <p>{festival.significance}</p>
                </div>

                <div className="traditions">
                  <h4>🎭 Traditions & Practices</h4>
                  <ul>
                    {festival.traditions.map((tradition, i) => (
                      <li key={i}>{tradition}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {getFilteredFestivals().length === 0 && (
          <div className="no-festivals">
            <h3>🔍 No festivals found</h3>
            <p>Try selecting a different month or region to see more festivals.</p>
          </div>
        )}

        <div className="festival-footer">
          <div className="cultural-note">
            <h3>🌟 Cultural Heritage</h3>
            <p>These festivals represent thousands of years of cultural evolution, blending ancient traditions with modern celebrations. Each festival tells a unique story of the Pahadi people's deep connection with nature, spirituality, and community life.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Festivals;