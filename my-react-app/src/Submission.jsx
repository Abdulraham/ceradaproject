import React from "react";
import "./Submission.css";

function Submission({ setPage }) {

  return (
    <section className="submissionPage">

      <div className="submissionHeader">

        <span className="badge">📄 Paper Submission</span>

        <h1>
          Submit Your <span>Research Paper</span>
        </h1>

        <p>
          ICAEBMS-2026 invites researchers, academicians, and professionals
          to submit original research papers for peer review and publication
          in reputed indexed journals.
        </p>

      </div>

      <div className="submissionGrid">

        <div className="submissionCard">
          <h3>📌 Guidelines</h3>
          <ul>
            <li>Original unpublished research only</li>
            <li>Follow IEEE / conference format</li>
            <li>Plagiarism must be below 15%</li>
          </ul>
        </div>

        <div className="submissionCard">
          <h3>📅 Important Dates</h3>
          <ul>
            <li>Abstract: 31 Jan 2026</li>
            <li>Full Paper: 28 Feb 2026</li>
            <li>Final Submission: 31 Mar 2026</li>
          </ul>
        </div>

        <div className="submissionCard">
          <h3>📚 Publication</h3>
          <ul>
            <li>Scopus Indexed Journals</li>
            <li>Web of Science Proceedings</li>
            <li>Peer-reviewed publication</li>
          </ul>
        </div>

      </div>

      <div className="uploadBox">

        <h2>Upload Your Paper</h2>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Paper Title" />

        <input type="file" />

        <button>
          🚀 Submit Paper
        </button>

      </div>

      <button
        className="backBtn"
        onClick={() => setPage("home")}
      >
        ← Back to Home
      </button>

    </section>
  );
}

export default Submission;