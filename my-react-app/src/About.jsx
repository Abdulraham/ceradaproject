// About.jsx

import React from "react";
import "./About.css";

function About() {

  return (

    <section className="aboutPage" id="about">

      {/* LEFT IMAGE */}

      <div className="aboutImage">

        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
          alt="About Conference"
        />

      </div>

      {/* RIGHT CONTENT */}

      <div className="aboutContent">

        <span className="aboutTag">
          ABOUT ICAEBMS-2026
        </span>

        <h1>
          Empowering Innovation &
          <span> Global Research</span>
        </h1>

        <p>
          ICAEBMS-2026 is an international platform designed
          for researchers, academicians, professionals,
          innovators, and students to exchange knowledge,
          showcase research findings, and build strong
          collaborations for future advancements.
        </p>

        <p>
          The conference focuses on Engineering,
          Business Management, and Social Sciences,
          encouraging interdisciplinary innovation,
          sustainable development, and technological growth.
        </p>

        {/* FEATURES */}

        <div className="aboutFeatures">

          <div className="featureCard">
            <h2>25+</h2>
            <span>Countries Participating</span>
          </div>

          <div className="featureCard">
            <h2>100+</h2>
            <span>Research Sessions</span>
          </div>

          <div className="featureCard">
            <h2>50+</h2>
            <span>Global Speakers</span>
          </div>

        </div>

        {/* BUTTONS */}

        <div className="aboutButtons">

          <button className="aboutPrimaryBtn">
            Explore More
          </button>

          <button className="aboutSecondaryBtn">
            Contact Us
          </button>

        </div>

      </div>

    </section>

  );
}

export default About;