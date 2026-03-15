import React from "react";
import "./BlogSection.css";

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="blog-header">
        <div className="badge">Featured Blogs</div>

        <button className="blog-btn">View All Blogs</button>
      </div>
    </section>
  );
}

export default BlogSection;
