import React from "react";
import "./Hero.css";

import img1 from "../assets/hero-img01.jpg";
import img2 from "../assets/hero-img02.jpg";
import video from "../assets/hero-video.mp4";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <div className="hero-badge">Know Before You Go 🌍</div>

        <h1>
          Traveling Opens The Door To Creating
          <span> Memories</span>
        </h1>

        <p>
          Start your journey with us and explore the beauty of the world like
          never before. From stunning landscapes to vibrant cities, discover
          destinations that create unforgettable memories and experiences you'll
          cherish forever.
        </p>
      </div>

      <div className="hero-media">
        <img src={img1} alt="travel1" className="hero-img" />

        <video src={video} className="hero-video" autoPlay loop muted />

        <img src={img2} alt="travel2" className="hero-img" />
      </div>
    </section>
  );
}

export default Hero;
