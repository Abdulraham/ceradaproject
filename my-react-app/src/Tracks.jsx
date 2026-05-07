// Tracks.jsx

import React from "react";
import "./Tracks.css";

function Tracks() {

  return (

    <section className="tracksPage" id="tracks">

      {/* HEADER */}

      <div className="tracksHeader">

        <span className="tracksTag">
          ICAEBMS-2026 TRACKS
        </span>

        <h1>
          Conference <span>Research Tracks</span>
        </h1>

        <p>
          ICAEBMS-2026 invites researchers, academicians,
          innovators, and professionals to submit original
          research papers across multidisciplinary tracks
          focused on innovation, sustainability, technology,
          and future advancements.
        </p>

      </div>

      {/* TRACK GRID */}

      <div className="tracksGrid">

        {/* TRACK 1 */}

        <div className="trackBox">

          <div className="trackNumber">
            01
          </div>

          <h2>
            Engineering & Technology
          </h2>

          <p>
            Artificial Intelligence, Machine Learning,
            IoT, Robotics, Civil, Mechanical,
            Electrical and Emerging Technologies.
          </p>

        </div>

        {/* TRACK 2 */}

        <div className="trackBox">

          <div className="trackNumber">
            02
          </div>

          <h2>
            Business Management
          </h2>

          <p>
            Marketing, Human Resource Management,
            Finance, Entrepreneurship,
            Innovation Management and Leadership.
          </p>

        </div>

        {/* TRACK 3 */}

        <div className="trackBox">

          <div className="trackNumber">
            03
          </div>

          <h2>
            Social Sciences
          </h2>

          <p>
            Education, Psychology, Sociology,
            Public Administration, Communication
            and Sustainable Social Development.
          </p>

        </div>

        {/* TRACK 4 */}

        <div className="trackBox">

          <div className="trackNumber">
            04
          </div>

          <h2>
            Data Science & Analytics
          </h2>

          <p>
            Big Data, Data Visualization,
            Predictive Analytics, Cloud Computing,
            Cyber Security and Digital Systems.
          </p>

        </div>

        {/* TRACK 5 */}

        <div className="trackBox">

          <div className="trackNumber">
            05
          </div>

          <h2>
            Sustainable Development
          </h2>

          <p>
            Green Energy, Smart Cities,
            Environmental Engineering,
            Climate Change and Sustainability Solutions.
          </p>

        </div>

        {/* TRACK 6 */}

        <div className="trackBox">

          <div className="trackNumber">
            06
          </div>

          <h2>
            Innovation & Future Research
          </h2>

          <p>
            Future Technologies, Interdisciplinary
            Innovations, Smart Systems and
            Emerging Global Research Trends.
          </p>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="tracksBottom">

        <h2>
          Submit Your Research Paper
        </h2>

        <p>
          Present your innovative research and
          gain international visibility through
          ICAEBMS-2026 conference proceedings,
          keynote sessions, and academic collaborations.
        </p>

        <button>
          Submit Abstract
        </button>

      </div>

    </section>

  );
}

export default Tracks;