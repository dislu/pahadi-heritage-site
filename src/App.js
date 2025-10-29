import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Hotels from './pages/Hotels/Hotels';
import History from './pages/History/History';
import Geography from './pages/Geography/Geography';
import Events from './pages/Events/Events';
import TouristPlaces from './pages/TouristPlaces/TouristPlaces';
import Radio from './pages/Radio/Radio';
import Shaadi from './pages/Shaadi/Shaadi';
import Festivals from './pages/Festivals/Festivals';
import About from './pages/About/About';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/history" element={<History />} />
            <Route path="/geography" element={<Geography />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tourist-places" element={<TouristPlaces />} />
            <Route path="/radio" element={<Radio />} />
            <Route path="/shaadi" element={<Shaadi />} />
            <Route path="/festivals" element={<Festivals />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;