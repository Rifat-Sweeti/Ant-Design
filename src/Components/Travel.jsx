import React from 'react'
import "./Travel.css"
import Greece from "../Components/Images/Greece.jpg"

const Travel = () => {
  return (
<div className="easy-steps-section">
  <div className="text-section">
    <h2 className="section-title">Easy and Fast</h2>
    <h3 className="main-title">Book Your Next Trip <br /> In 3 Easy Steps</h3>
    <div className="steps-list">
      <div className="step-item">
        <div className="icon yellow"></div>
        <div className="step-text">
          <h4>Choose Destination</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
      <div className="step-item">
        <div className="icon red"></div>
        <div className="step-text">
          <h4>Make Payment</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
      <div className="step-item">
        <div className="icon blue"></div>
        <div className="step-text">
          <h4>Reach Airport on Selected Date</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
        </div>
      </div>
    </div>
  </div>
  <div className="image-section">
    <div className="trip-card">
      <img src={Greece} alt="Trip to Greece" className="trip-image" />
      <div className="trip-info">
        <p>Trip To Greece</p>
        <span>14-29 June | By Robin J.</span>
      </div>
      <div className="trip-status">
        <p>Ongoing</p>
        <div className="progress-bar">
          <div className="progress" style={{ width: "40%" }}></div>
        </div>
      </div>
      <p className="attendees">24 people going</p>
    </div>
  </div>
</div>
  )
}

export default Travel