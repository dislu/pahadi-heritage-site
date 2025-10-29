import React from 'react';

const Shaadi = () => {
  return (
    <div style={{ marginTop: '70px', padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}>Pahadi Shaadi</h1>
        <div style={{ textAlign: 'center', padding: '2rem', background: 'white', borderRadius: '15px' }}>
          <h2>💝 Find Your Perfect Pahadi Life Partner</h2>
          <p>Connect with genuine profiles from Uttarakhand, Himachal Pradesh, and Nepal communities.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '2rem' }}>
            <div>
              <h4>👰 Looking for Bride</h4>
              <p>Browse verified profiles</p>
            </div>
            <div>
              <h4>🤵 Looking for Groom</h4>
              <p>Find your perfect match</p>
            </div>
            <div>
              <h4>✅ 50,000+ Profiles</h4>
              <p>Verified community members</p>
            </div>
            <div>
              <h4>💑 2,500+ Success Stories</h4>
              <p>Happy marriages</p>
            </div>
          </div>
          <button className="btn" style={{ margin: '1rem' }}>Register Free</button>
          <button className="btn btn-secondary" style={{ margin: '1rem' }}>Browse Profiles</button>
        </div>
      </div>
    </div>
  );
};

export default Shaadi;