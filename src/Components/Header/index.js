import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="header-text" id="header">
        <h1>Simaka engineering services limited.</h1>
        <p>
At Simaka Engineering Services Limited, we are at the forefront of innovation, delivering cutting-edge engineering solutions to meet the evolving needs of our clients. With a rich history spanning [X] years, we have established ourselves as a trusted partner in the engineering industry, providing a wide range of services tailored to various sectors.
        </p>
        <span className="more">
          <a href="#about" className="link">
            <button>More About Us</button>
          </a>
          <a href="#contact" className="link">
            <span>Get in Touch.</span>
          </a>
        </span>
      </div>
      <div className="header-image">
        <img
          src={require("../../assets/Vector Smart Object2.png")}
          alt="illustration"
        />
      </div>
    </header>
  );
};

export default Header;
