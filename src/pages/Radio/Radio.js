import React from 'react';

const Radio = () => {
  return (
    <div style={{ marginTop: '70px', padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Pahadi Radio</h1>
        <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px' }}>
          <h2>🎵 Listen to Traditional Folk Music</h2>
          <p>Experience the soulful melodies and cultural heritage of Pahadi regions through our online radio station.</p>
          <button className="btn" style={{ margin: '1rem' }}>🎧 Listen Live</button>
          <button className="btn btn-secondary" style={{ margin: '1rem' }}>📻 Browse Shows</button>
        </div>
      </div>
    </div>
  );
};

export default Radio;