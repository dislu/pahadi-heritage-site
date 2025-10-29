import React, { useState } from 'react';
import './History.css';

const History = () => {
  const [activeTab, setActiveTab] = useState('uttarakhand');

  // Image mapping for each tribe (to be replaced with actual images)
  const tribalImages = {
    "Garhwali People": "/images/tribes/garhwali-traditional-dress.jpg",
    "Kumaoni People": "/images/tribes/kumaoni-handicrafts.jpg",
    "Kinnauri People": "/images/tribes/kinnauri-traditional-homes.jpg",
    "Gaddi Shepherds": "/images/tribes/gaddi-shepherds.jpg",
    "Gurung People": "/images/tribes/gurung-traditional-dress.jpg",
    "Tamang People": "/images/tribes/tamang-culture.jpg",
    "Sherpa People": "/images/tribes/sherpa-community.jpg",
    "Thakali People": "/images/tribes/thakali-cuisine.jpg",
    "Rai People": "/images/tribes/rai-traditional-dance.jpg"
  };

  const tribalData = {
    uttarakhand: {
      title: "Garhwali & Kumaoni Heritage",
      mainTribes: [
        {
          name: "Garhwali People",
          origin: "Ancient Indo-Aryan settlers (6th century BCE)",
          population: "~3 million",
          regions: ["Chamoli", "Rudraprayag", "Tehri Garhwal", "Uttarkashi", "Pauri Garhwal"],
          language: "Garhwali (Central Pahari language family)",
          traditions: [
            "Jagar (ritual singing to invoke deities)",
            "Dhol-Damau music traditions", 
            "Seasonal farming practices (Baranaja - 12 grain cultivation)",
            "Traditional architecture with wooden houses"
          ],
          festivals: ["Ganga Dussehra", "Harela", "Ghee Sankranti", "Phool Dei"],
          occupation: ["Terrace farming", "Animal husbandry", "Traditional crafts", "Military service"]
        },
        {
          name: "Kumaoni People", 
          origin: "Descendants of Kuninda dynasty (2nd century BCE)",
          population: "~2.5 million",
          regions: ["Almora", "Bageshwar", "Champawat", "Nainital", "Pithoragarh", "Udham Singh Nagar"],
          language: "Kumaoni (Central Pahari language family)",
          traditions: [
            "Ringaal (bamboo) handicrafts",
            "Aipan art (floor and wall decorations)",
            "Traditional Kumaoni folk music and dance",
            "Terraced agriculture systems"
          ],
          festivals: ["Nanda Devi Raj Jat", "Hilljatra", "Bikhauti", "Ghughutia"],
          occupation: ["Agriculture", "Horticulture", "Handicrafts", "Tourism"]
        }
      ],
      ancientHistory: "The Pahadi tribes of Uttarakhand trace their ancestry to ancient Vedic periods. Archaeological evidence suggests human habitation dating back to the Paleolithic era. The region was mentioned in ancient scriptures as 'Kedarkhand' and 'Manaskhand'.",
      culturalSignificance: "These communities developed unique sustainable practices, including the famous 'Van Panchayat' (forest councils) system for community forest management, which became a model for environmental conservation worldwide."
    },
    himachal: {
      title: "Kinnauri & Gaddi Heritage", 
      mainTribes: [
        {
          name: "Kinnauri People",
          origin: "Tibeto-Burman and Indo-Aryan mixed ancestry",
          population: "~84,000",
          regions: ["Kinnaur district", "Upper Shimla", "Parts of Lahaul-Spiti"],
          language: "Kinnauri, Tibetan, Hindi",
          traditions: [
            "Polyandry and unique family systems",
            "Apple and dry fruit cultivation",
            "Buddhist-Hindu syncretic practices",
            "Traditional Kinnauri caps and clothing"
          ],
          festivals: ["Losar", "Dakhrain", "Sazo", "Phulaich"],
          occupation: ["Apple orchards", "Dry fruit cultivation", "Trade", "Tourism"]
        },
        {
          name: "Gaddi Shepherds",
          origin: "Nomadic pastoralists from Kashmir valley (11th century)",
          population: "~200,000", 
          regions: ["Bharmaur", "Chamba", "Kangra", "Parts of Jammu"],
          language: "Gaddiali (Western Pahari)",
          traditions: [
            "Seasonal migration (transhumance) with sheep and goats",
            "Distinctive white woolen clothing (chola)",
            "Traditional shepherding techniques",
            "Oral storytelling traditions"
          ],
          festivals: ["Minjar", "Sui Mata", "Chamba Rumal", "Bhuri Singh"],
          occupation: ["Pastoralism", "Wool production", "Agriculture", "Small trade"]
        }
      ],
      ancientHistory: "Himachal Pradesh was historically known as 'Trigarta' and 'Audumbara'. The region has been mentioned in Mahabharata and various Puranas. The tribes developed unique adaptation strategies for high-altitude living over millennia.",
      culturalSignificance: "The Gaddi migration routes, called 'Gadddi circuit', represent one of the last remaining traditional nomadic cultures in the Himalayas, maintaining ecological balance through sustainable grazing practices."
    },
    nepal: {
      title: "Himalayan Indigenous Communities",
      mainTribes: [
        {
          name: "Sherpa People",
          origin: "Tibetan migrants (16th century)",
          population: "~150,000",
          regions: ["Solukhumbu", "Dolakha", "Sindhupalchowk", "Sankhuwasabha"],
          language: "Sherpa (Tibeto-Burman family)",
          traditions: [
            "High-altitude mountaineering expertise",
            "Tibetan Buddhist practices",
            "Traditional potato and barley cultivation",
            "Stone and wood architecture"
          ],
          festivals: ["Dumji", "Mani Rimdu", "Losar", "Saga Dawa"],
          occupation: ["Mountain guiding", "Trekking services", "Agriculture", "Trade"]
        },
        {
          name: "Tamang Community",
          origin: "Ancient Tibetan horse traders",
          population: "~1.8 million",
          regions: ["Central hills", "Rasuwa", "Nuwakot", "Sindhupalchowk"],
          language: "Tamang (Tibeto-Burman family)",
          traditions: [
            "Damphu drum music and Tamang Selo dance",
            "Buddhist monastery traditions",
            "Traditional weaving and handicrafts", 
            "Sustainable hill farming"
          ],
          festivals: ["Sonam Lhosar", "Buddha Jayanti", "Ghyalpo Lhosar", "Saga Dawa"],
          occupation: ["Agriculture", "Handicrafts", "Construction", "Transportation"]
        },
        {
          name: "Gurung Warriors",
          origin: "Tibeto-Burman pastoral nomads",
          population: "~800,000",
          regions: ["Lamjung", "Kaski", "Syangja", "Parbat", "Manang"],
          language: "Gurung (Tibeto-Burman family)", 
          traditions: [
            "Renowned military service (Gurkha regiments)",
            "Seasonal grazing and transhumance",
            "Traditional rodhi (community gathering) system",
            "Honey hunting in high cliffs"
          ],
          festivals: ["Tamu Lhosar", "Dashain", "Tihar", "Krishna Asthami"],
          occupation: ["Military service", "Agriculture", "Tourism", "Honey production"]
        }
      ],
      ancientHistory: "Nepal's Pahadi communities represent some of the oldest continuous cultures in the Himalayas. The region served as a crucial trade route between Tibet and India, leading to rich cultural exchanges and unique hybrid traditions.",
      culturalSignificance: "These communities developed sophisticated high-altitude agriculture, including the world's highest farms. Their traditional ecological knowledge has been crucial for Himalayan biodiversity conservation."
    }
  };

  return (
    <div className="history-page">
      <div className="container">
        <header className="page-header">
          <h1>🏔️ Rich Tribal History</h1>
          <p className="subtitle">Discover the ancient cultures and traditions of the indigenous peoples who have called these mountains home for thousands of years.</p>
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
          <div className="region-header">
            <h2>{tribalData[activeTab].title}</h2>
            <p className="ancient-history">{tribalData[activeTab].ancientHistory}</p>
          </div>

          <div className="tribes-grid">
            {tribalData[activeTab].mainTribes.map((tribe, index) => (
              <div key={index} className="tribe-card">
                {tribalImages[tribe.name] ? (
                  <img 
                    src={tribalImages[tribe.name]} 
                    alt={`Traditional ${tribe.name} community and culture`}
                    className="tribe-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                ) : null}
                <div 
                  className="image-placeholder" 
                  style={{display: tribalImages[tribe.name] ? 'none' : 'flex'}}
                >
                  📸 Authentic image of {tribe.name} community will be added here with proper permissions and attribution
                </div>
                <h3>{tribe.name}</h3>
                <div className="tribe-details">
                  <div className="detail-row">
                    <strong>📍 Origin:</strong> {tribe.origin}
                  </div>
                  <div className="detail-row">
                    <strong>👥 Population:</strong> {tribe.population}
                  </div>
                  <div className="detail-row">
                    <strong>🗺️ Regions:</strong> {tribe.regions.join(', ')}
                  </div>
                  <div className="detail-row">
                    <strong>🗣️ Language:</strong> {tribe.language}
                  </div>
                </div>

                <div className="traditions-section">
                  <h4>🎭 Cultural Traditions</h4>
                  <ul>
                    {tribe.traditions.map((tradition, i) => (
                      <li key={i}>{tradition}</li>
                    ))}
                  </ul>
                </div>

                <div className="festivals-section">
                  <h4>🎪 Major Festivals</h4>
                  <div className="festivals-tags">
                    {tribe.festivals.map((festival, i) => (
                      <span key={i} className="festival-tag">{festival}</span>
                    ))}
                  </div>
                </div>

                <div className="occupation-section">
                  <h4>💼 Traditional Occupations</h4>
                  <div className="occupation-tags">
                    {tribe.occupation.map((job, i) => (
                      <span key={i} className="occupation-tag">{job}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="cultural-significance">
            <h3>🌿 Cultural Significance & Modern Impact</h3>
            <p>{tribalData[activeTab].culturalSignificance}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;