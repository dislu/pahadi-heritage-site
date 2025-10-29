import React, { useState } from 'react';
import './TouristPlaces.css';

const TouristPlaces = () => {
  const [activeTab, setActiveTab] = useState('uttarakhand');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Image mapping for each tourist destination
  const placeImages = {
    "Rishikesh": "/images/tourist-places/rishikesh-yoga-capital.jpg",
    "Valley of Flowers": "/images/tourist-places/valley-of-flowers.jpg",
    "Kedarnath": "/images/tourist-places/kedarnath-temple.jpg",
    "Jim Corbett National Park": "/images/tourist-places/jim-corbett-wildlife.jpg",
    "Nainital": "/images/tourist-places/nainital-lake.jpg",
    "Auli": "/images/tourist-places/auli-skiing.jpg",
    "Manali": "/images/tourist-places/manali-adventure-sports.jpg",
    "Shimla": "/images/tourist-places/shimla-colonial-architecture.jpg",
    "Dharamshala": "/images/tourist-places/dharamshala-mcleod-ganj.jpg",
    "Spiti Valley": "/images/tourist-places/spiti-valley-landscape.jpg",
    "Kullu": "/images/tourist-places/kullu-valley-nature.jpg",
    "Kasauli": "/images/tourist-places/kasauli-hill-station.jpg",
    "Kathmandu": "/images/tourist-places/kathmandu-durbar-square.jpg",
    "Pokhara": "/images/tourist-places/pokhara-phewa-lake.jpg",
    "Everest Base Camp": "/images/tourist-places/everest-base-camp.jpg",
    "Chitwan National Park": "/images/tourist-places/chitwan-national-park.jpg",
    "Lumbini": "/images/tourist-places/lumbini-birthplace-buddha.jpg",
    "Annapurna Circuit": "/images/tourist-places/annapurna-circuit-trek.jpg"
  };

  const touristPlacesData = {
    uttarakhand: {
      title: "Uttarakhand - Dev Bhoomi Destinations",
      places: [
        {
          name: "Rishikesh",
          category: "spiritual",
          rating: 4.8,
          altitude: "372m",
          bestTime: "Oct-Mar, Jun-Jul",
          activities: ["River Rafting", "Bungee Jumping", "Yoga Retreats", "Temple Visits", "Ganga Aarti"],
          description: "World capital of Yoga and gateway to the Himalayas, famous for spiritual experiences and adventure sports.",
          highlights: ["Laxman Jhula", "Ram Jhula", "Triveni Ghat", "Beatles Ashram", "Parmarth Niketan"],
          accommodation: ["Luxury resorts", "Ashrams", "Budget hotels", "Riverside camps"],
          transport: "24km from Dehradun Airport, Well connected by train and road",
          icon: "🕉️"
        },
        {
          name: "Valley of Flowers",
          category: "nature",
          rating: 4.9,
          altitude: "3658m",
          bestTime: "Jul-Sep",
          activities: ["Trekking", "Photography", "Botanical Tours", "Nature Walks", "Camping"],
          description: "UNESCO World Heritage site famous for endemic alpine flowers and rare wildlife.",
          highlights: ["600+ flower varieties", "Blue Poppy", "Brahma Kamal", "Snow leopard habitat", "Pushpawati River"],
          accommodation: ["Govindghat guesthouses", "Ghangaria lodges", "Camping sites"],
          transport: "Trek from Govindghat (14km), Accessible via Haridwar-Joshimath route",
          icon: "🌺"
        },
        {
          name: "Kedarnath",
          category: "spiritual",
          rating: 4.9,
          altitude: "3583m",
          bestTime: "May-Jun, Sep-Oct",
          activities: ["Pilgrimage", "Trekking", "Meditation", "Photography", "Helicopter Services"],
          description: "Sacred Jyotirlinga temple dedicated to Lord Shiva, one of Char Dham pilgrimage sites.",
          highlights: ["Ancient Shiva temple", "Mandakini river", "Gandhi Sarovar", "Vasuki Tal", "Chorabari glacier"],
          accommodation: ["Dharamshalas", "Guesthouses", "Tent accommodations"],
          transport: "14km trek from Gaurikund, Helicopter services available",
          icon: "🏛️"
        },
        {
          name: "Jim Corbett National Park",
          category: "wildlife",
          rating: 4.6,
          altitude: "400-1210m",
          bestTime: "Nov-Jun",
          activities: ["Tiger Safari", "Elephant Safari", "Bird Watching", "Nature Photography", "Jungle Walks"],
          description: "India's oldest national park, famous for Bengal tigers and diverse wildlife.",
          highlights: ["600+ bird species", "Bengal tigers", "Asian elephants", "Ramganga reservoir", "Corbett waterfall"],
          accommodation: ["Forest lodges", "Luxury resorts", "Wildlife camps", "Budget hotels"],
          transport: "300km from Delhi, Well connected by road and rail to Ramnagar",
          icon: "🐅"
        },
        {
          name: "Nainital",
          category: "hill-station",
          rating: 4.5,
          altitude: "2084m",
          bestTime: "Mar-Jun, Sep-Nov",
          activities: ["Boating", "Cable Car", "Trekking", "Shopping", "Lake Tours"],
          description: "Popular hill station built around Naini Lake, known as 'Lake District of India'.",
          highlights: ["Naini Lake", "Naina Devi Temple", "Snow View Point", "Tiffin Top", "Eco Cave Gardens"],
          accommodation: ["Lake view hotels", "Hill station resorts", "Heritage properties", "Budget stays"],
          transport: "65km from Kathgodam railway station, 285km from Delhi",
          icon: "🏞️"
        },
        {
          name: "Auli",
          category: "adventure",
          rating: 4.7,
          altitude: "2519m",
          bestTime: "Nov-Mar (skiing), Apr-Jun (sightseeing)",
          activities: ["Skiing", "Cable Car", "Trekking", "Camping", "Snow Activities"],
          description: "Premier skiing destination offering panoramic views of Himalayan peaks.",
          highlights: ["Asia's longest cable car", "Nanda Devi views", "Artificial lake", "Ski slopes", "Gurso Bugyal"],
          accommodation: ["Ski resorts", "GMVN hotels", "Camps", "Guesthouses"],
          transport: "16km from Joshimath, Accessible via Rishikesh-Joshimath route",
          icon: "⛷️"
        }
      ]
    },
    himachal: {
      title: "Himachal Pradesh - Mountain Paradise",
      places: [
        {
          name: "Manali",
          category: "hill-station",
          rating: 4.6,
          altitude: "2050m",
          bestTime: "Mar-Jun, Oct-Feb",
          activities: ["Adventure Sports", "Trekking", "River Rafting", "Paragliding", "Temple Visits"],
          description: "Popular hill station in Kullu Valley, gateway to Rohtang Pass and Ladakh.",
          highlights: ["Rohtang Pass", "Solang Valley", "Hadimba Temple", "Old Manali", "Manu Temple"],
          accommodation: ["Luxury resorts", "Riverside hotels", "Budget guesthouses", "Camping sites"],
          transport: "50km from Kullu, 570km from Delhi, Connected by road",
          icon: "🏔️"
        },
        {
          name: "Shimla",
          category: "hill-station",
          rating: 4.4,
          altitude: "2205m",
          bestTime: "Mar-Jun, Sep-Nov",
          activities: ["Heritage Tours", "Shopping", "Nature Walks", "Toy Train", "Ice Skating"],
          description: "Former British summer capital, famous for colonial architecture and pleasant climate.",
          highlights: ["Mall Road", "Christ Church", "Viceregal Lodge", "Jakhu Temple", "Kufri"],
          accommodation: ["Heritage hotels", "Mall Road properties", "Hill station resorts", "Budget hotels"],
          transport: "Kalka-Shimla toy train, 350km from Delhi by road",
          icon: "🚂"
        },
        {
          name: "Spiti Valley",
          category: "adventure",
          rating: 4.9,
          altitude: "3800m",
          bestTime: "May-Oct",
          activities: ["Monastery Tours", "High Altitude Trekking", "Photography", "Cultural Tours", "Stargazing"],
          description: "Cold desert mountain valley, known as 'Little Tibet' with ancient monasteries.",
          highlights: ["Key Monastery", "Tabo Monastery", "Pin Valley", "Chandratal Lake", "Kibber village"],
          accommodation: ["Monastery guesthouses", "Homestays", "Camps", "Basic lodges"],
          transport: "Accessible via Manali-Kaza route (May-Oct) or Shimla-Kaza route (year-round)",
          icon: "🏔️"
        },
        {
          name: "Dharamshala & McLeod Ganj",
          category: "spiritual",
          rating: 4.7,
          altitude: "1457m",
          bestTime: "Mar-Jun, Sep-Dec",
          activities: ["Meditation", "Monastery Visits", "Trekking", "Cultural Tours", "Tibetan Culture"],
          description: "Home to Dalai Lama and Tibetan government-in-exile, known for Tibetan Buddhism.",
          highlights: ["Dalai Lama Temple", "Bhagsu Waterfall", "Triund Trek", "Tibet Museum", "Norbulingka Institute"],
          accommodation: ["Tibetan guesthouses", "Boutique hotels", "Meditation centers", "Budget stays"],
          transport: "18km from Kangra, 250km from Chandigarh",
          icon: "☸️"
        },
        {
          name: "Kasol & Tosh",
          category: "adventure",
          rating: 4.5,
          altitude: "1640m",
          bestTime: "Mar-Jun, Sep-Nov",
          activities: ["Trekking", "Camping", "River Activities", "Café Culture", "Nature Photography"],
          description: "Backpacker paradise in Parvati Valley, known for Israeli cuisine and mountain culture.",
          highlights: ["Parvati River", "Kheerganga Trek", "Malana village", "Tosh village", "Chalal trek"],
          accommodation: ["Riverside camps", "Hostels", "Guesthouses", "Camping sites"],
          transport: "36km from Bhuntar, Accessible via Kullu-Manikaran route",
          icon: "🏕️"
        },
        {
          name: "Kinnaur Valley",
          category: "nature",
          rating: 4.8,
          altitude: "2320m",
          bestTime: "Apr-Oct",
          activities: ["Apple Orchards Tour", "Monastery Visits", "River Rafting", "Trekking", "Cultural Tours"],
          description: "Tribal district known for apple orchards, ancient monasteries and Indo-Tibetan culture.",
          highlights: ["Kinnaur Kailash", "Kalpa village", "Sangla Valley", "Chitkul village", "Nako Lake"],
          accommodation: ["Apple orchard stays", "Homestays", "Government guesthouses", "Camps"],
          transport: "230km from Shimla via Hindustan-Tibet Highway",
          icon: "🍎"
        }
      ]
    },
    nepal: {
      title: "Nepal - Himalayan Wonders",
      places: [
        {
          name: "Everest Base Camp",
          category: "adventure",
          rating: 4.9,
          altitude: "5364m",
          bestTime: "Mar-May, Sep-Nov",
          activities: ["Trekking", "Mountaineering", "Photography", "Sherpa Culture", "Monastery Visits"],
          description: "World's most famous trekking destination, offering close views of Mount Everest.",
          highlights: ["Mount Everest views", "Tengboche Monastery", "Sherpa culture", "Kala Patthar", "Sagarmatha National Park"],
          accommodation: ["Tea houses", "Mountain lodges", "Camping", "Luxury lodges"],
          transport: "Flight to Lukla, 14-day trek from Lukla",
          icon: "🏔️"
        },
        {
          name: "Kathmandu Valley",
          category: "cultural",
          rating: 4.5,
          altitude: "1400m",
          bestTime: "Oct-Apr",
          activities: ["Heritage Tours", "Temple Visits", "Cultural Shows", "Shopping", "Food Tours"],
          description: "UNESCO World Heritage valley with ancient palaces, temples and rich cultural heritage.",
          highlights: ["Durbar Squares", "Pashupatinath Temple", "Boudhanath Stupa", "Swayambhunath", "Patan Museum"],
          accommodation: ["Heritage hotels", "Boutique properties", "Budget guesthouses", "Luxury resorts"],
          transport: "International airport, Well connected by road to other regions",
          icon: "🏛️"
        },
        {
          name: "Pokhara",
          category: "nature",
          rating: 4.7,
          altitude: "827m",
          bestTime: "Oct-Apr",
          activities: ["Boating", "Paragliding", "Trekking", "Cave Exploration", "Mountain Views"],
          description: "Lake city offering stunning mountain views and adventure activities, gateway to Annapurna region.",
          highlights: ["Phewa Lake", "Annapurna range views", "Davis Falls", "Gupteshwor Cave", "World Peace Pagoda"],
          accommodation: ["Lake view resorts", "Boutique hotels", "Backpacker hostels", "Luxury properties"],
          transport: "200km from Kathmandu, Domestic airport, Tourist bus services",
          icon: "🌊"
        },
        {
          name: "Annapurna Circuit",
          category: "adventure",
          rating: 4.8,
          altitude: "5416m (Thorong La Pass)",
          bestTime: "Mar-May, Sep-Nov",
          activities: ["Long Distance Trekking", "High Altitude Crossing", "Cultural Immersion", "Photography", "Sunrise Views"],
          description: "Classic long-distance trek through diverse landscapes and cultural regions.",
          highlights: ["Thorong La Pass", "Muktinath Temple", "Manang valley", "Marsyangdi river", "Diverse ecosystems"],
          accommodation: ["Tea houses", "Mountain lodges", "Camping options", "Local homestays"],
          transport: "Start from Besisahar or Nayapul, 15-20 day circuit trek",
          icon: "🥾"
        },
        {
          name: "Chitwan National Park",
          category: "wildlife",
          rating: 4.6,
          altitude: "150m",
          bestTime: "Oct-Mar",
          activities: ["Jungle Safari", "Elephant Rides", "Bird Watching", "Canoe Rides", "Cultural Tours"],
          description: "UNESCO World Heritage site, home to one-horned rhinoceros and Royal Bengal tigers.",
          highlights: ["One-horned rhinoceros", "Royal Bengal tiger", "540+ bird species", "Tharu culture", "Rapti river"],
          accommodation: ["Jungle lodges", "Eco resorts", "Budget guesthouses", "Luxury safari camps"],
          transport: "150km from Kathmandu, Bharatpur airport, Road connectivity",
          icon: "🦏"
        },
        {
          name: "Langtang Valley",
          category: "nature",
          rating: 4.7,
          altitude: "4984m (Tserko Ri)",
          bestTime: "Mar-May, Sep-Nov",
          activities: ["Trekking", "Yak Cheese Tasting", "Tamang Culture", "Glacier Views", "Photography"],
          description: "Beautiful valley close to Kathmandu, known for Tamang culture and mountain views.",
          highlights: ["Langtang Lirung views", "Kyanjin Gompa", "Tamang heritage", "Yak cheese factory", "Tserko Ri summit"],
          accommodation: ["Tea houses", "Mountain lodges", "Camping", "Local guesthouses"],
          transport: "122km from Kathmandu to Syabrubesi, 7-10 day trek",
          icon: "🏔️"
        }
      ]
    }
  };

  const categories = [
    { key: "all", name: "All Places", icon: "🗺️" },
    { key: "spiritual", name: "Spiritual", icon: "🕉️" },
    { key: "adventure", name: "Adventure", icon: "🏔️" },
    { key: "nature", name: "Nature", icon: "🌿" },
    { key: "hill-station", name: "Hill Stations", icon: "🏞️" },
    { key: "wildlife", name: "Wildlife", icon: "🦌" },
    { key: "cultural", name: "Cultural", icon: "🏛️" }
  ];

  const getFilteredPlaces = () => {
    const places = touristPlacesData[activeTab].places;
    if (selectedCategory === 'all') return places;
    return places.filter(place => place.category === selectedCategory);
  };

  return (
    <div className="tourist-places-page">
      <div className="container">
        <header className="page-header">
          <h1>🏔️ Tourist Places & Travel Guide</h1>
          <p className="subtitle">Discover breathtaking destinations, hidden gems, and must-visit places across the Himalayan regions with detailed travel information and activity guides.</p>
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

        <div className="category-filters">
          <h3>🎯 Filter by Category:</h3>
          <div className="filter-buttons">
            {categories.map(category => (
              <button 
                key={category.key}
                className={`category-btn ${selectedCategory === category.key ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.key)}
              >
                {category.icon} {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="tab-content active">
          <div className="region-title">
            <h2>{touristPlacesData[activeTab].title}</h2>
            <p className="places-count">
              {getFilteredPlaces().length} {selectedCategory === 'all' ? 'amazing' : selectedCategory} destinations
            </p>
          </div>

          <div className="places-grid">
              {getFilteredPlaces().map((place, index) => (
                <div key={index} className="place-card">
                  {placeImages[place.name] ? (
                    <img 
                      src={placeImages[place.name]} 
                      alt={`Scenic view of ${place.name} - ${place.description.substring(0, 50)}...`}
                      className="place-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="place-image-placeholder" 
                    style={{display: placeImages[place.name] ? 'none' : 'flex'}}
                  >
                    📍 High-quality image of {place.name} will be added here to showcase this beautiful destination
                  </div>
                  <div className="place-header">
                  <div className="place-icon">{place.icon}</div>
                  <div className="place-title">
                    <h3>{place.name}</h3>
                    <div className="place-meta">
                      <span className="rating">⭐ {place.rating}</span>
                      <span className="altitude">🏔️ {place.altitude}</span>
                    </div>
                  </div>
                </div>

                <div className="place-content">
                  <p className="description">{place.description}</p>

                  <div className="place-info">
                    <div className="info-item">
                      <strong>📅 Best Time:</strong> {place.bestTime}
                    </div>
                    <div className="info-item">
                      <strong>🚗 Transport:</strong> {place.transport}
                    </div>
                  </div>

                  <div className="activities-section">
                    <h4>� Top Activities</h4>
                    <div className="activities-tags">
                      {place.activities.map((activity, i) => (
                        <span key={i} className="activity-tag">{activity}</span>
                      ))}
                    </div>
                  </div>

                  <div className="highlights-section">
                    <h4>✨ Must-See Highlights</h4>
                    <ul className="highlights-list">
                      {place.highlights.slice(0, 3).map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="accommodation-section">
                    <h4>🏨 Accommodation</h4>
                    <div className="accommodation-tags">
                      {place.accommodation.map((type, i) => (
                        <span key={i} className="accommodation-tag">{type}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {getFilteredPlaces().length === 0 && (
            <div className="no-places">
              <h3>🔍 No places found</h3>
              <p>Try selecting a different category to see more destinations.</p>
            </div>
          )}
        </div>

        <div className="travel-tips">
          <h3>🎒 Travel Tips & Planning Guide</h3>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>🗓️ Best Time to Visit</h4>
              <p>Plan your trip according to weather patterns: Summer (Mar-Jun) for pleasant weather, Monsoon (Jul-Sep) for flowers, Winter (Oct-Feb) for snow activities.</p>
            </div>
            <div className="tip-card">
              <h4>🎒 Packing Essentials</h4>
              <p>Carry warm clothes, rain gear, sturdy shoes, sunscreen, first aid kit, and proper identification. High altitude areas require additional preparation.</p>
            </div>
            <div className="tip-card">
              <h4>🏥 Health & Safety</h4>
              <p>Acclimatize properly for high altitudes, stay hydrated, inform someone about your plans, carry emergency contacts, and respect local customs.</p>
            </div>
            <div className="tip-card">
              <h4>💰 Budget Planning</h4>
              <p>Costs vary by season and destination. Budget for accommodation, transport, food, permits, guides, and emergency funds. Book in advance during peak seasons.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristPlaces;