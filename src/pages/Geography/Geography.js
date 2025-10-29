import React, { useState } from 'react';
import './Geography.css';

const Geography = () => {
  const [activeTab, setActiveTab] = useState('uttarakhand');

  const geographyData = {
    uttarakhand: {
      title: "Uttarakhand - Dev Bhoomi",
      overview: "Known as 'Dev Bhoomi' (Land of Gods), Uttarakhand covers 53,483 km² in the Central Himalayas with elevations ranging from 200m to 7,816m (Nanda Devi).",
      physicalFeatures: {
        mountains: [
          { name: "Nanda Devi", elevation: "7,816m", significance: "Second highest peak in India, UNESCO World Heritage Site" },
          { name: "Kamet", elevation: "7,756m", significance: "Third highest peak in India" },
          { name: "Trishul", elevation: "7,120m", significance: "Three-peaked mountain, sacred to Hindu mythology" },
          { name: "Chaukhamba", elevation: "7,138m", significance: "Four-pillared peak in Gangotri range" }
        ],
        rivers: [
          { name: "Ganges", source: "Gangotri Glacier", significance: "Most sacred river in Hinduism" },
          { name: "Yamuna", source: "Yamunotri", significance: "Major tributary of Ganges, sacred river" },
          { name: "Alaknanda", source: "Satopanth Glacier", significance: "Main tributary forming Ganges" },
          { name: "Bhagirathi", source: "Gaumukh", significance: "Primary headstream of Ganges" }
        ],
        glaciers: ["Gangotri (30.2 km)", "Pindari (3.2 km)", "Milam (16 km)", "Kafni (8 km)"],
        nationalParks: ["Jim Corbett", "Valley of Flowers", "Nanda Devi", "Rajaji", "Govind Pashu Vihar"]
      },
      climate: {
        zones: [
          { zone: "Tropical (200-1000m)", temp: "15-35°C", rainfall: "1000-2000mm", months: "Jun-Sep monsoon" },
          { zone: "Temperate (1000-2000m)", temp: "10-25°C", rainfall: "800-1500mm", months: "Pleasant summers, cold winters" },
          { zone: "Alpine (2000-3500m)", temp: "5-15°C", rainfall: "600-1200mm", months: "Snow in winter" },
          { zone: "Glacial (3500m+)", temp: "-10 to 5°C", rainfall: "300-800mm", months: "Permanent snow cover" }
        ]
      },
      biodiversity: {
        flora: ["Deodar", "Oak", "Rhododendron", "Birch", "Alpine meadows", "Medicinal herbs (>1500 species)"],
        fauna: ["Snow Leopard", "Asiatic Black Bear", "Musk Deer", "Blue Sheep", "Himalayan Tahr", "300+ bird species"]
      }
    },
    himachal: {
      title: "Himachal Pradesh - Land of Snow",
      overview: "Himachal Pradesh spans 55,673 km² across the Western Himalayas, with elevations from 350m to 7,026m, featuring diverse landscapes from subtropical to alpine zones.",
      physicalFeatures: {
        mountains: [
          { name: "Reo Purgyil", elevation: "6,816m", significance: "Highest peak in Himachal Pradesh" },
          { name: "Leo Pargil", elevation: "6,791m", significance: "Second highest peak in Spiti range" },
          { name: "Kinnaur Kailash", elevation: "6,050m", significance: "Sacred peak, pilgrimage site" },
          { name: "Hanuman Tibba", elevation: "5,639m", significance: "Popular trekking destination in Manali" }
        ],
        rivers: [
          { name: "Sutlej", source: "Lake Rakshastal (Tibet)", significance: "Longest river in HP, major hydroelectric source" },
          { name: "Beas", source: "Beas Kund", significance: "Flows through Kullu valley, ancient Vipasha" },
          { name: "Ravi", source: "Bara Bhangal", significance: "Forms Chamba valley" },
          { name: "Chenab", source: "Baralacha Pass", significance: "Flows through Lahaul region" }
        ],
        glaciers: ["Bara Shigri (28 km)", "Parbati (15 km)", "Milang (9 km)", "Sonapani (7 km)"],
        nationalParks: ["Great Himalayan", "Pin Valley", "Khirganga", "Simbalbara", "Inderkilla"]
      },
      climate: {
        zones: [
          { zone: "Subtropical (350-1500m)", temp: "20-40°C", rainfall: "400-1500mm", months: "Hot summers, mild winters" },
          { zone: "Temperate (1500-2500m)", temp: "15-30°C", rainfall: "800-2000mm", months: "Pleasant climate year-round" },
          { zone: "Sub-Alpine (2500-4000m)", temp: "5-20°C", rainfall: "500-1500mm", months: "Cool summers, snowy winters" },
          { zone: "Alpine (4000m+)", temp: "-15 to 10°C", rainfall: "200-800mm", months: "Extreme cold, permanent snow" }
        ]
      },
      biodiversity: {
        flora: ["Chir Pine", "Deodar", "Spruce", "Fir", "Juniper", "Blue poppy", "1200+ medicinal plants"],
        fauna: ["Snow Leopard", "Himalayan Brown Bear", "Ibex", "Marco Polo Sheep", "Red Fox", "440+ bird species"]
      }
    },
    nepal: {
      title: "Nepal - Roof of the World",
      overview: "Nepal covers 147,516 km² featuring the world's most dramatic elevation change from 60m (Terai) to 8,848m (Mount Everest), spanning five climatic zones.",
      physicalFeatures: {
        mountains: [
          { name: "Mount Everest", elevation: "8,848m", significance: "World's highest peak, Sagarmatha in Nepali" },
          { name: "Kanchenjunga", elevation: "8,586m", significance: "Third highest peak globally" },
          { name: "Lhotse", elevation: "8,516m", significance: "Fourth highest peak, connected to Everest" },
          { name: "Makalu", elevation: "8,485m", significance: "Fifth highest peak, pyramid-shaped" },
          { name: "Cho Oyu", elevation: "8,188m", significance: "Sixth highest peak globally" },
          { name: "Dhaulagiri", elevation: "8,167m", significance: "Seventh highest peak, 'White Mountain'" },
          { name: "Manaslu", elevation: "8,163m", significance: "Eighth highest peak, 'Mountain of Spirit'" },
          { name: "Annapurna", elevation: "8,091m", significance: "Tenth highest peak, dangerous to climb" }
        ],
        rivers: [
          { name: "Koshi", source: "Tibet plateau", significance: "Largest river system, 'Sorrow of Bihar'" },
          { name: "Gandaki", source: "Mustang/Tibet", significance: "Cuts deepest gorge (Kali Gandaki)" },
          { name: "Karnali", source: "Mount Kailash region", significance: "Longest river entirely in Nepal" }
        ],
        glaciers: ["Khumbu (12 km)", "Rongbuk (22 km)", "Ngozumpa (36 km - longest in Himalayas)", "Langtang (18 km)"],
        nationalParks: ["Sagarmatha", "Chitwan", "Langtang", "Bardia", "Rara", "Shey Phoksundo", "Banke", "Parsa"]
      },
      climate: {
        zones: [
          { zone: "Tropical (60-1000m)", temp: "25-40°C", rainfall: "1500-2500mm", months: "Hot, humid monsoons" },
          { zone: "Subtropical (1000-2000m)", temp: "15-30°C", rainfall: "1200-2200mm", months: "Moderate temperatures" },
          { zone: "Temperate (2000-3000m)", temp: "10-25°C", rainfall: "800-1800mm", months: "Cool summers, cold winters" },
          { zone: "Sub-Alpine (3000-4000m)", temp: "5-15°C", rainfall: "600-1200mm", months: "Snow in winter" },
          { zone: "Alpine (4000m+)", temp: "-20 to 10°C", rainfall: "200-600mm", months: "Permanent snow/ice" }
        ]
      },
      biodiversity: {
        flora: ["Sal forests", "Rhododendron (national flower)", "Pine", "Oak", "Medicinal herbs (>2000 species)", "Orchids (>300 species)"],
        fauna: ["Royal Bengal Tiger", "One-horned Rhinoceros", "Snow Leopard", "Red Panda", "Gharial", "850+ bird species"]
      }
    }
  };

  return (
    <div className="geography-page">
      <div className="container">
        <header className="page-header">
          <h1>🌍 Diverse Geography</h1>
          <p className="subtitle">Explore the magnificent landscapes, from tropical plains to the world's highest peaks, across the three Pahadi regions.</p>
        </header>
        
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'uttarakhand' ? 'active' : ''}`}
            onClick={() => setActiveTab('uttarakhand')}
          >
            🔱 Uttarakhand
          </button>
          <button 
            className={`tab ${activeTab === 'himachal' ? 'active' : ''}`}
            onClick={() => setActiveTab('himachal')}
          >
            🏔️ Himachal Pradesh  
          </button>
          <button 
            className={`tab ${activeTab === 'nepal' ? 'active' : ''}`}
            onClick={() => setActiveTab('nepal')}
          >
            🇳🇵 Nepal
          </button>
        </div>

        <div className="tab-content active">
          <div className="region-overview">
            <h2>{geographyData[activeTab].title}</h2>
            <p className="overview-text">{geographyData[activeTab].overview}</p>
          </div>

          <div className="geography-sections">
            {/* Mountains Section */}
            <div className="geography-section">
              <h3>🏔️ Major Peaks</h3>
              <div className="mountains-grid">
                {geographyData[activeTab].physicalFeatures.mountains.map((mountain, index) => (
                  <div key={index} className="mountain-card">
                    <h4>{mountain.name}</h4>
                    <div className="elevation">{mountain.elevation}</div>
                    <p>{mountain.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Rivers Section */}
            <div className="geography-section">
              <h3>🌊 River Systems</h3>
              <div className="rivers-grid">
                {geographyData[activeTab].physicalFeatures.rivers.map((river, index) => (
                  <div key={index} className="river-card">
                    <h4>{river.name}</h4>
                    <div className="source">Source: {river.source}</div>
                    <p>{river.significance}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Climate Zones Section */}
            <div className="geography-section">
              <h3>🌡️ Climate Zones</h3>
              <div className="climate-zones">
                {geographyData[activeTab].climate.zones.map((zone, index) => (
                  <div key={index} className="climate-card">
                    <h4>{zone.zone}</h4>
                    <div className="climate-details">
                      <div className="climate-stat">
                        <span className="label">🌡️ Temperature:</span>
                        <span className="value">{zone.temp}</span>
                      </div>
                      <div className="climate-stat">
                        <span className="label">🌧️ Rainfall:</span>
                        <span className="value">{zone.rainfall}</span>
                      </div>
                      <div className="climate-stat">
                        <span className="label">📅 Season:</span>
                        <span className="value">{zone.months}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Glaciers Section */}
            <div className="geography-section">
              <h3>🧊 Glaciers</h3>
              <div className="glaciers-list">
                {geographyData[activeTab].physicalFeatures.glaciers.map((glacier, index) => (
                  <span key={index} className="glacier-tag">{glacier}</span>
                ))}
              </div>
            </div>

            {/* National Parks Section */}
            <div className="geography-section">
              <h3>🦌 Protected Areas</h3>
              <div className="parks-list">
                {geographyData[activeTab].physicalFeatures.nationalParks.map((park, index) => (
                  <span key={index} className="park-tag">{park}</span>
                ))}
              </div>
            </div>

            {/* Biodiversity Section */}
            <div className="geography-section">
              <h3>🌿 Biodiversity</h3>
              <div className="biodiversity-grid">
                <div className="flora-section">
                  <h4>🌱 Flora</h4>
                  <div className="species-list">
                    {geographyData[activeTab].biodiversity.flora.map((species, index) => (
                      <span key={index} className="species-tag flora">{species}</span>
                    ))}
                  </div>
                </div>
                <div className="fauna-section">
                  <h4>🦌 Fauna</h4>
                  <div className="species-list">
                    {geographyData[activeTab].biodiversity.fauna.map((species, index) => (
                      <span key={index} className="species-tag fauna">{species}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Geography;