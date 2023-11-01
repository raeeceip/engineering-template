import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-div" id="about">
      <div className="about-image">
        <img
          src={require("../../assets/Ilustration 1.png")}
          alt="illustration"
        />
      </div>
      <div className="about-us">
        <h6 className="about-company">OUR COMPANY</h6>
        <h3 className="about-header">
          Our approach 
        </h3>
        <p className="about-summary">
  At Simaka Engineering Services limied, we believe in a client-centric approach. Our succcess is measured by your satisfaction. we work closely with you to understand your goals, budget and timeline, ensuring that we deliver solutions that exceed your expectations
        </p> 
      </div>
    </div>
  );
};

export default About;
