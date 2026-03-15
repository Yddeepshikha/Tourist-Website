import React from "react";
import "./Testimonial.css";

import user1 from "../assets/ava-1.jpg";
import user2 from "../assets/ava-2.jpg";
import user3 from "../assets/ava-3.jpg";

function Testimonial() {
  return (
    <section className="testimonial">
      <div className="badge">Testimonial</div>

      <h2>What our Customers Say about us</h2>

      <div className="testimonial-container">
        {/* Card 1 */}
        <div className="testimonial-card">
          <p>
            Booking my Manali trip through Nomad Nest was one of the best
            decisions. Everything from hotel bookings to local sightseeing was
            perfectly organized. I didn't have to worry about anything during
            the trip.
          </p>

          <div className="user">
            <img src={user1} alt="user" />
            <div>
              <h4>Rahul Sharma</h4>
              <span>Customer</span>
            </div>
          </div>
          <div className="stars">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
          </div>
        </div>

        {/* Card 2 */}
        <div className="testimonial-card">
          <p>
            I planned my Goa vacation with Nomad Nest and it was amazing. The
            travel guides suggested some hidden beaches and cafes that made the
            trip even more special. Highly recommended for anyone who loves
            traveling.
          </p>

          <div className="user">
            <img src={user2} alt="user" />
            <div>
              <h4>Priya Mehta</h4>
              <span>Customer</span>
            </div>
          </div>
          <div className="stars">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
          </div>
        </div>

        {/* Card 3 */}
        <div className="testimonial-card">
          <p>
            Our family trip to Rishikesh was smooth and memorable thanks to
            Nomad Nest. The itinerary was well planned and the support team was
            always available whenever we needed help.
          </p>

          <div className="user">
            <img src={user3} alt="user" />
            <div>
              <h4>Arjun Patel</h4>
              <span>Customer</span>
            </div>
          </div>
          <div className="stars">
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-fill"></i>
            <i className="ri-star-line"></i>
            <i className="ri-star-line"></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
