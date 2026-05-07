// Conference.jsx

import React from "react";
import "./Conference.css";

function Conference() {

  return (

    <section className="conferencePage" id="conference">

      {/* HEADER */}

      <div className="conferenceHeader">

        <span className="conferenceTag">
          ICAEBMS-2026 CONFERENCE
        </span>

        <h1>
          International Conference On
          <span> Engineering, Business Management & Social Sciences</span>
        </h1>

        <p>
          ICAEBMS-2026 provides a prestigious global platform
          for researchers, academicians, professionals,
          innovators, and students to exchange ideas,
          showcase research findings, and explore future
          technologies shaping the modern world.
        </p>

      </div>

      {/* CARDS */}

      <div className="conferenceGrid">

        {/* CARD 1 */}

        <div className="conferenceCard">

          <div className="conferenceIcon">
            🌍
          </div>

          <h2>Global Participation</h2>

          <p>
            Connect with delegates, researchers,
            and professionals from leading universities
            and industries worldwide.
          </p>

        </div>

        {/* CARD 2 */}

        <div className="conferenceCard">

          <div className="conferenceIcon">
            🎤
          </div>

          <h2>Expert Keynote Sessions</h2>

          <p>
            Gain insights from internationally recognized
            keynote speakers and academic leaders.
          </p>

        </div>

        {/* CARD 3 */}

        <div className="conferenceCard">

          <div className="conferenceIcon">
            📚
          </div>

          <h2>Research Publications</h2>

          <p>
            Present innovative research papers and
            publish in reputed conference proceedings.
          </p>

        </div>

        {/* CARD 4 */}

        <div className="conferenceCard">

          <div className="conferenceIcon">
            🚀
          </div>

          <h2>Innovation & Technology</h2>

          <p>
            Explore cutting-edge technologies,
            future innovations, and interdisciplinary advancements.
          </p>

        </div>

      </div>

      {/* BOTTOM SECTION */}

      <div className="conferenceBottom">

        <div className="conferenceImage">

          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
            alt="Conference"
          />

        </div>

        <div className="conferenceInfo">

          <h2>
            Why Attend ICAEBMS-2026?
          </h2>

          <ul>

            <li>
              ✔ International Networking Opportunities
            </li>

            <li>
              ✔ Workshops & Technical Sessions
            </li>

            <li>
              ✔ Research Presentation & Publication
            </li>

            <li>
              ✔ Industry Collaboration
            </li>

            <li>
              ✔ Awards & Recognition
            </li>

          </ul>

          <button>
            Register Now
          </button>

        </div>

      </div>

    </section>

  );
}

export default Conference;