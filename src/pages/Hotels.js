import React from 'react';
import './Attractions.css'; // Reusing the same grid layout styles

function Hotels() {
  const destinationsData = [
    { title: 'Santorini Resort', location: 'Santorini, Greece', img: 'https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?auto=format&fit=crop&w=400&q=80', description: 'Stay in a beautiful white-washed suite overlooking the Aegean sea.' },
    { title: 'Swiss Alps Lodge', location: 'Zermatt, Switzerland', img: 'https://images.unsplash.com/photo-1548625361-ec85311e921d?auto=format&fit=crop&w=400&q=80', description: 'Cozy up in a luxury cabin surrounded by snow-capped mountains and trails.' },
    { title: 'Kyoto Ryokan', location: 'Kyoto, Japan', img: 'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=400&q=80', description: 'Experience traditional Japanese hospitality and serene zen gardens.' },
    { title: 'Maldives Overwater Villa', location: 'Male, Maldives', img: 'https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=400&q=80', description: 'Wake up to crystal clear waters right beneath your glass bottom floor.' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="hero-badge">Top Destinations</div>
        <h2>Hotels & Destinations</h2>
        <p>Find the perfect place to stay for your next unforgettable adventure.</p>
      </div>

      <div className="card-grid">
        {destinationsData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="location-text">📍 {item.location}</p>
              <p className="desc-text">{item.description}</p>
              <button className="card-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
