import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <div className="services" id="services">
      <section className="header">
        <h2>Anything you need, we've got you covered</h2>
        <a href="#contact" className="link">
          <button>Get in Touch</button>
        </a>
      </section>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Design </h4>
        <p>
        From concept to completion, our design teams is equipped to bring your idea to life. We creare detialed plans and blueprints that form the foundations of successful projects.
        </p>
      </section>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Consultation </h4>
        <p>
          Our Expert consultants are here to provide you with valuable insights and guidance for your engineering projects. We offer strategic advice to help you make informed decisions.
        </p>
      </section>
      <section className="app-dev">
        <img
          src={require("../../assets/Vector Smart Object4.png")}
          alt="icon"
        />
        <h4>Technical services</h4>
        <p>
         From maitenance to trobuleshooting, our technical sevices cover a wide range of engineering needs. We keep our systems running smoothly.
        </p>
      </section>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Execution  </h4>
        <p>
        Our skilled team is ready to turn your vision into reality. We handle all aspects of construction and engineering, from initial groundwork to the finishing touches.
        </p>
      </section>
      <section className="graphic-design">
        <img
          src={require("../../assets/Vector Smart Object3.png")}
          alt="icon"
        />
        <h4>Supervision </h4>
        <p>
        We ensure that every aspect of your project is executed with precision and adherence to safety standards. Our dedicated supervisors oversee the work, so you can have peace of mind.
        </p>
      </section>
    </div>
  );
};

export default Services;
