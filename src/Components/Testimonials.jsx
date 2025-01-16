import React from 'react';
import './Testimonials.css';
import Man from "./Images/man.png"
import Woman from "./Images/woman.jpg"
import Axon from "./Images/axon.png"
import Jetstar from "./Images/jetstar.png"
import Expedia from "./Images/expideia.png"
import Qantas from "./Images/qantas.png"
import Alitalia from "./Images/alitalia.png"

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h2 className="section-title">What People Say About Us.</h2>
      <div className="testimonial-cards">
        <div className="testimonial-card">
          <div className="user-info">
            <img
              src={Man}
              alt="user"
              className="user-image"
            />
            <div>
              <p className="user-name">Mike Taylor</p>
              <p className="user-location">Lahore, Pakistan</p>
            </div>
          </div>
          <p className="testimonial-text">
            “On the Windows talking painted pasture yet its express parties use.
            Sure last upon he same as knew next. Of believed or diverted no.”
          </p>
        </div>
        <div className="testimonial-card">
          <div className="user-info">
            <img
              src={Woman}
              alt="user"
              className="user-image"
            />
            <div>
              <p className="user-name">Ana Huang</p>
              <p className="user-location">CEO of Red Button</p>
            </div>
          </div>
          <p className="testimonial-text">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum.”
          </p>
        </div>
      </div>
      <div className="brands-logos">
        <img
          src={Axon}
          alt="brand-logo"
          className="brand-logo"
        />
        <img
          src={Jetstar}
          alt="brand-logo"
          className="brand-logo"
        />
        <img
          src={Expedia}
          alt="brand-logo"
          className="brand-logo"
        />
        <img
          src={Qantas}
          alt="brand-logo"
          className="brand-logo"
        />
        <img
          src={Alitalia}
          alt="brand-logo"
          className="brand-logo"
        />
      </div>
    </div>
  );
};

export default Testimonials;
