import React from 'react';
import './Attractions.css';

function Attractions() {
  const attractionsData = [
    { title: 'Eiffel Tower', location: 'Paris, France', img: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=400&q=80', description: 'Experience the romantic atmosphere and stunning views from the iconic iron lady.' },
    { title: 'Grand Canyon', location: 'Arizona, USA', img: 'https://images.unsplash.com/photo-1474044159687-1ee9f3a51722?auto=format&fit=crop&w=400&q=80', description: 'Marvel at the immense scale and vibrant colors of this natural wonder.' },
    { title: 'Great Wall of China', location: 'Beijing, China', img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=400&q=80', description: 'Walk along the historic fortifications that stretch across the breathtaking landscape.' },
    { title: 'Colosseum', location: 'Rome, Italy', img: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=400&q=80', description: 'Step back in time and explore the mighty amphitheater of the Roman Empire.' }
  ];

  return (
    <div className="page-container">
      <div className="page-header">
        <div className="hero-badge">Must See Places</div>
        <h2>Discover Popular Attractions</h2>
        <p>Explore some of the most famous and breathtaking landmarks around the globe.</p>
      </div>

      <div className="card-grid">
        {attractionsData.map((item, index) => (
          <div key={index} className="card">
            <img src={item.img} alt={item.title} className="card-image" />
            <div className="card-content">
              <h3>{item.title}</h3>
              <p className="location-text">📍 {item.location}</p>
              <p className="desc-text">{item.description}</p>
              <button className="card-btn">Explore</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attractions;
