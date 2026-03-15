import React from "react";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery";
import BlogSection from "../components/BlogSection";
import Testimonial from "../components/Testimonial";
import Contact from "../components/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <Gallery />
      <BlogSection />
      <Testimonial />
      <Contact />
    </div>
  );
}

export default Home;
