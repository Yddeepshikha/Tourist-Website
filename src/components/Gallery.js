import React from "react";
import "./Gallery.css";

import img1 from "../assets/gallery-01.jpg";
import img2 from "../assets/gallery-02.jpg";
import img3 from "../assets/gallery-03.jpg";
import img4 from "../assets/gallery-04.jpg";
import img5 from "../assets/gallery-05.jpg";
import img6 from "../assets/gallery-06.jpg";
import img7 from "../assets/gallery-07.jpg";

function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7];

  return (
    <section className="gallery">
      <div className="gallery-title">
        <div className="gallery-badge">Gallery</div>

        <h2>Visit Our Customers Tour Gallery</h2>
      </div>

      <div className="gallery-grid">
        {images.map((img, index) => (
          <div key={index} className="gallery-item">
            <img src={img} alt="travel" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
