// Home.jsx

import React from "react";
import "./Home.css";

function Home() {

  return (

    <section className="homePage" id="home">

      {/* LEFT CONTENT */}

      <div className="homeContent">

        <span className="homeTag">
          ICAEBMS-2026 INTERNATIONAL CONFERENCE
        </span>

        <h1>
          Welcome To <span>ICAEBMS-2026</span>
        </h1>

        <p>
          Join researchers, academicians, innovators, professionals,
          and students from across the globe at ICAEBMS-2026.
          Explore groundbreaking ideas, emerging technologies,
          and future research innovations through keynote sessions,
          workshops, publications, and networking opportunities.
        </p>

        <div className="homeButtons">

          <button className="primaryHomeBtn">
            Explore Conference
          </button>

          <button className="secondaryHomeBtn">
            Submit Paper
          </button>

        </div>

        {/* INFO BOXES */}

        <div className="homeStats">

          <div className="statCard">
            <h2>50+</h2>
            <span>Keynote Speakers</span>
          </div>

          <div className="statCard">
            <h2>1000+</h2>
            <span>Participants</span>
          </div>

          <div className="statCard">
            <h2>25+</h2>
            <span>Countries</span>
          </div>

        </div>

      </div>

      {/* RIGHT IMAGE */}

      <div className="homeImage">

        <img
          src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
          alt="Conference"
        />

      </div>

    </section>

  );
}

export default Home;