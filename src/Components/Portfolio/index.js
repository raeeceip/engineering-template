import React from "react";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio-header">
        <h1>Why Choose Us?</h1>
      </div>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Consultation </h4>
        <p>
          Our Expert consultants are here to provide you with valuable insights and guidance for your engineering projects. We offer strategic advice to help you make informed decisions.
        </p>
      </section>      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Consultation </h4>
        <p>
          Our Expert consultants are here to provide you with valuable insights and guidance for your engineering projects. We offer strategic advice to help you make informed decisions.
        </p>
      </section>      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Consultation </h4>
        <p>
          Our Expert consultants are here to provide you with valuable insights and guidance for your engineering projects. We offer strategic advice to help you make informed decisions.
        </p>
      </section>
    </div>
  );
};

export default Portfolio;
