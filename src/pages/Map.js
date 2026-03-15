import React from 'react';

function MapPage() {
  return (
    <div style={{ padding: '60px 80px', backgroundColor: '#fcfcfc', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
         <div className="hero-badge" style={{ backgroundColor: '#ffb347', padding: '8px 18px', borderRadius: '20px', display: 'inline-block', marginBottom: '20px', fontWeight: '600' }}>Explore</div>
         <h2 style={{ fontSize: '36px', color: '#333', marginBottom: '15px' }}>Interactive Global Map</h2>
         <p style={{ color: '#666', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>Find hidden gems and track your travel routes using our comprehensive map tool.</p>
      </div>

      <div style={{ 
        width: '100%', 
        height: '450px', 
        backgroundColor: '#e0e0e0', 
        borderRadius: '20px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        border: '3px solid #ff8c00',
        position: 'relative'
      }}>
        <div style={{ 
            backgroundColor: 'rgba(255, 255, 255, 0.9)', 
            padding: '20px 40px', 
            borderRadius: '30px', 
            boxShadow: '0 10px 25px rgba(0,0,0,0.1)' 
        }}>
            <h3 style={{ color: '#ff8c00', margin: 0, fontSize: '24px' }}>Map Feature Coming Soon 🗺️</h3>
        </div>
      </div>
    </div>
  );
}

export default MapPage;
