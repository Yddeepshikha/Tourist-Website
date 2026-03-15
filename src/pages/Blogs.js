import React from 'react';
import BlogSection from '../components/BlogSection';

function Blogs() {
  return (
    <div style={{ paddingTop: '50px', backgroundColor: '#fdfdfd', minHeight: '70vh' }}>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
         <div className="hero-badge" style={{ backgroundColor: '#ffb347', padding: '8px 18px', borderRadius: '20px', display: 'inline-block', marginBottom: '10px', fontWeight: '600' }}>Inspiration</div>
         <h2 style={{ fontSize: '36px', color: '#333', margin: '0 0 10px 0' }}>Latest Travel Stories</h2>
         <p style={{ color: '#666', fontSize: '18px' }}>Read about our latest adventures and travel tips.</p>
      </div>
      <BlogSection />
    </div>
  );
}

export default Blogs;
