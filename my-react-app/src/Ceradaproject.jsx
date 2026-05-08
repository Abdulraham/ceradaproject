// import React, { useEffect, useState } from "react";
// import "./App.css";


// function Ceradaproject({ setPage }) {

//   const [time, setTime] = useState(new Date());
//   // ADD THIS

//   const [showSidebar, setShowSidebar] = useState(false);
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTime(new Date());
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="app">

//       {/* TOP BAR */}
//       <marquee className="topbar">
//         HYBRID EVENT - Participate in Bangkok, Thailand or Virtually from your Home or Office
//       </marquee>

//       {/* NAVBAR */}
//       {/* <nav className="navbar">

//         <div className="logo">
//           ICAEBMS
//         </div>

//         <ul className="menu">
//           <li>Home</li>
//           <li>About</li>
//           <li>Conference</li>
//           <li>Tracks</li>
//           <li>Contact</li>
//         </ul>

//         <div className="location">
//           27-28 Aug 2026
//         </div>

//       </nav> */}
//       <nav className="navbar">

//         {/* LEFT ICON BUTTON */}

//         <div
//           className="menuButton"
//           onClick={() => setShowSidebar(true)}
//         >

//           <div className="menuDots">
//             <span></span>
//             <span></span>
//             <span></span>
//           </div>

//         </div>

//         {/* LOGO */}

//         <div className="logo">

//           <div className="logoShape">
//             ICA
//           </div>

//           <div className="logoText">

//             <h2>ICAEBMS</h2>

//             <span>
//               International Conference 2026
//             </span>

//           </div>

//         </div>

//         {/* MENU */}

//         <ul className="menu">

//           <li>
//             <a href="#home">Home</a>
//           </li>

//           {/* <li>
//       <a href="#about">About</a>
//     </li> */}
//           <li className="navItem">

//             <a href="#about" className="navLink">
//               About
//             </a>

//           </li>

//           <li>
//             <a href="#conference">Conference</a>
//           </li>

//           <li>
//             <a href="#tracks">Tracks</a>
//           </li>

//           {/* <li>
//             <a href="#contact">Contact</a>
//           </li> */}
//           {/* <li onClick={() => setPage("contact")}>
//             Contact
//           </li> */}

//         </ul>

//         {/* DATE */}

//         <div className="eventDate">
//           Aug 27-28 • 2026
//         </div>

//       </nav>


//       {/* SIDEBAR */}

//       <div className={`sidebar ${showSidebar ? "showSidebar" : ""}`}>

//         {/* TOP */}

//         <div className="sidebarTop">

//           <div>

//             <h2>ICAEBMS-2026</h2>

//             <span>
//               Global Research Conference
//             </span>

//           </div>

//           <button
//             onClick={() => setShowSidebar(false)}
//           >
//             ✕
//           </button>

//         </div>

//         {/* ABOUT */}

//         <div className="aboutCard">

//           <h3>About Conference</h3>

//           <p>
//             ICAEBMS-2026 brings together researchers,
//             academicians, professionals, innovators,
//             and students from around the world to
//             exchange ideas, research findings, and
//             future technologies for sustainable growth.
//           </p>

//         </div>

//         {/* LOGIN */}

//         <div className="loginBox">

//           <h3>Member Login</h3>

//           <input
//             type="email"
//             placeholder="Email Address"
//           />

//           <input
//             type="password"
//             placeholder="Password"
//           />

//           <button>
//             Login Now
//           </button>

//         </div>

//       </div>

//       {showSidebar && (

//         <div
//           className="overlay"
//           onClick={() => setShowSidebar(false)}
//         ></div>

//       )}

//       {/* HERO SECTION */}
//       <section className="hero">

//         <div className="overlay">

//           <h1>
//             International Conference on Applied Science, Engineering,
//             Education, Business, Management and Social Science & Humanities
//           </h1>

//           <h2>
//             Theme: “Interdisciplinary Innovations for a Sustainable Future”
//           </h2>

//           {/* DIGITAL INFO BAR */}
//           <div className="infoBar">

//             <div className="infoCard">
//               <h3>Current Time</h3>
//               <p>{time.toLocaleTimeString()}</p>
//             </div>

//             <div className="infoCard">
//               <h3>Current Date</h3>
//               <p>{time.toLocaleDateString()}</p>
//             </div>

//             <div className="infoCard">
//               <h3>Location</h3>
//               <p>Bangkok, Thailand</p>
//             </div>

//             <div className="infoCard">
//               <h3>Conference</h3>
//               <p>Hybrid Event</p>
//             </div>

//           </div>

//         </div>

//       </section>

//       {/* WELCOME */}
//       {/* <section className="content">

//         <h2>Welcome to ICAEBMS-2026</h2>

//         <p>
//           We warmly welcome researchers, academicians, professionals and students
//           to participate in ICAEBMS-2026.
//         </p>

//         <p>
//           ICAEBMS-2026 warmly welcomes researchers, academicians, industry professionals, innovators, and students from across the globe to participate in this prestigious international conference. The conference serves as a vibrant platform for sharing innovative research, exchanging valuable knowledge, and fostering meaningful collaborations among experts from diverse disciplines. ICAEBMS-2026 aims to inspire intellectual discussions, encourage interdisciplinary advancements, and promote sustainable solutions for the challenges of the modern world. Through keynote sessions, technical presentations, and networking opportunities, participants will engage with emerging trends and transformative ideas that shape the future of Engineering, Business Management, and Social Sciences.

//         </p>

//       </section> */}
//       <section className="welcomeSection">
//         <div className="welcomeOverlay"></div>

//         <div className="welcomeContainer">

//           <div className="welcomeBadge">
//             🌍 International Conference 2026
//           </div>

//           <h2>
//             Welcome to <span>ICAEBMS-2026</span>
//           </h2>

//           <div className="welcomeLine"></div>

//           <p className="shortText">
//             We warmly welcome researchers, academicians, professionals, and students
//             from across the globe to participate in ICAEBMS-2026.
//           </p>

//           <p className="mainText">
//             ICAEBMS-2026 serves as a prestigious international platform for sharing
//             innovative research, exchanging knowledge, and fostering meaningful
//             collaborations among academicians, scientists, industry experts, and
//             young researchers. The conference encourages interdisciplinary
//             discussions, promotes emerging technologies, and inspires sustainable
//             solutions for the challenges of the modern world. Through keynote
//             sessions, technical presentations, workshops, and networking
//             opportunities, participants will gain valuable insights into the future
//             of Engineering, Business Management, and Social Sciences.
//           </p>

//           {/* <div className="welcomeButtons">
//       <button className="primaryBtn">Register Now</button>
//       <button className="secondaryBtn">Submit Paper</button>
//     </div> */}

//         </div>
//       </section>

//       {/* CONFERENCE THEME */}
//       <section className="section">

//         <h2>Conference Theme</h2>

//         <div className="themeGrid">

//           <div className="themeCard">
//             <img
//               src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
//               alt=""
//             />
//             <h3>Interdisciplinary Collaboration</h3>
//           </div>

//           <div className="themeCard">
//             <img
//               src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
//               alt=""
//             />
//             <h3>Sustainable Innovation</h3>
//           </div>

//           <div className="themeCard">
//             <img
//               src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
//               alt=""
//             />
//             <h3>Future Research Solutions</h3>
//           </div>

//         </div>

//       </section>

//       {/* HIGHLIGHTS */}
//       {/* <section className="section light">

//         <h2>Key Highlights</h2>

//         <div className="highlightButtons">

//           <button>Global Participation</button>
//           <button>Research Publications</button>
//           <button>Expert Keynotes</button>
//           <button>Interactive Workshops</button>
//           <button>Networking</button>
//           <button>Recognition Awards</button>
//           <button>Student Engagement</button>
//           <button>Innovation Showcase</button>

//         </div>

//       </section> */}
//       <section className="highlightsSection">
//         <div className="container">

//           <div className="sectionHeader">
//             <span className="tag">ICAEBMS-2026</span>
//             <h2>
//               Key <strong>Conference Highlights</strong>
//             </h2>
//             <p>
//               Explore world-class sessions, research opportunities, networking,
//               innovation showcases, and collaborative experiences designed to inspire
//               researchers, academicians, professionals, and students.
//             </p>
//           </div>

//           <div className="highlightsGrid">

//             <div className="highlightCard">
//               <h3><strong>🌍 Global Participation</strong></h3>
//               <p>Connect with delegates, scholars, and experts from around the world.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>📚 Research Publications</strong></h3>
//               <p>Present and publish impactful research in reputed conference proceedings.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>🎤 Expert Keynote Sessions</strong></h3>
//               <p>Gain insights from internationally recognized speakers and industry leaders.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>🛠 Interactive Workshops</strong></h3>
//               <p>Participate in practical sessions and hands-on technical workshops.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>🤝 Professional Networking</strong></h3>
//               <p>Build valuable academic and industry collaborations for future growth.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>🏆 Recognition & Awards</strong></h3>
//               <p>Outstanding papers and presentations will receive special recognition.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>🎓 Student Engagement</strong></h3>
//               <p>Encouraging young researchers through mentorship and academic exposure.</p>
//             </div>

//             <div className="highlightCard">
//               <h3><strong>💡 Innovation Showcase</strong></h3>
//               <p>Discover emerging technologies, innovative ideas, and future trends.</p>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* SESSION TRACKS */}
//       <section className="section">

//         <h2>Session Tracks / Call For Papers</h2>

//         <div className="trackGrid">

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
//               alt=""
//             />
//             <h3>Applied Science</h3>
//           </div>

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1518770660439-4636190af475"
//               alt=""
//             />
//             <h3>Engineering & Technology</h3>
//           </div>

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
//               alt=""
//             />
//             <h3>Education</h3>
//           </div>

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1552664730-d307ca884978"
//               alt=""
//             />
//             <h3>Business & Management</h3>
//           </div>

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
//               alt=""
//             />
//             <h3>Social Science</h3>
//           </div>

//           <div className="trackCard">
//             <img
//               src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
//               alt=""
//             />
//             <h3>Finance & Marketing</h3>
//           </div>

//         </div>

//       </section>

//       {/* DEADLINES */}
//       {/* <section className="section light">

//         <h2>Submission Deadlines</h2>

//         <div className="deadlineGrid">

//           <div className="deadlineCard">
//             <h3>31</h3>
//             <span>DEC 2025</span>
//             <p>Early Bird</p>
//           </div>

//           <div className="deadlineCard">
//             <h3>31</h3>
//             <span>JAN 2026</span>
//             <p>Abstract</p>
//           </div>

//           <div className="deadlineCard">
//             <h3>28</h3>
//             <span>FEB 2026</span>
//             <p>Full Paper</p>
//           </div>

//           <div className="deadlineCard">
//             <h3>31</h3>
//             <span>MAR 2026</span>
//             <p>Registration</p>
//           </div>

//         </div>

//         <div className="deadlineButtons">

//           <button className="submitBtn">
//             Submit Paper
//           </button>

//           <button className="registerBtn">
//             Register Now
//           </button>

//         </div>

//       </section> */}
//       <section className="deadlineSection">

//         <div className="deadlineContainer">

//           <div className="deadlineHeader">

//             <span className="deadlineTag">
//               📅 Important Dates
//             </span>

//             <h2>
//               Submission <span>Deadlines</span>
//             </h2>

//             <p>
//               Stay updated with the important conference milestones including
//               paper submission, abstract deadlines, registration dates, and
//               early bird opportunities for ICAEBMS-2026.
//             </p>

//           </div>

//           <div className="deadlineGrid">

//             <div className="deadlineCard">
//               <div className="cardGlow"></div>

//               <div className="dateCircle">
//                 <h3>31</h3>
//                 <span>DEC</span>
//               </div>

//               <h4>Early Bird Registration</h4>

//               <p>
//                 Register early and secure discounted conference participation fees.
//               </p>

//               <div className="year">2025</div>
//             </div>

//             <div className="deadlineCard">
//               <div className="cardGlow"></div>

//               <div className="dateCircle">
//                 <h3>31</h3>
//                 <span>JAN</span>
//               </div>

//               <h4>Abstract Submission</h4>

//               <p>
//                 Submit your research abstract for preliminary review and evaluation.
//               </p>

//               <div className="year">2026</div>
//             </div>

//             <div className="deadlineCard">
//               <div className="cardGlow"></div>

//               <div className="dateCircle">
//                 <h3>28</h3>
//                 <span>FEB</span>
//               </div>

//               <h4>Full Paper Submission</h4>

//               <p>
//                 Upload complete research papers following conference guidelines.
//               </p>

//               <div className="year">2026</div>
//             </div>

//             <div className="deadlineCard">
//               <div className="cardGlow"></div>

//               <div className="dateCircle">
//                 <h3>31</h3>
//                 <span>MAR</span>
//               </div>

//               <h4>Final Registration</h4>

//               <p>
//                 Complete participant registration before the final deadline.
//               </p>

//               <div className="year">2026</div>
//             </div>

//           </div>

//           <div className="deadlineButtons">

//             <button className="submitBtn">
//               📄 Submit Paper
//             </button>

//             <button className="registerBtn">
//               🚀 Register Now
//             </button>

//           </div>

//         </div>

//       </section>

//       {/* WHY JOIN */}
//       {/* <section className="section">

//         <h2>Why Join ICAEBMS?</h2>

//         <div className="joinGrid">

//           <div className="joinCard">
//             🎓
//             <h3>Learn From Experts</h3>
//           </div>

//           <div className="joinCard">
//             🌍
//             <h3>Global Visibility</h3>
//           </div>

//           <div className="joinCard">
//             📚
//             <h3>Get Published</h3>
//           </div>

//           <div className="joinCard">
//             🤝
//             <h3>Expand Network</h3>
//           </div>

//           <div className="joinCard">
//             🏆
//             <h3>Recognition Awards</h3>
//           </div>

//           <div className="joinCard">
//             🚀
//             <h3>Career Growth</h3>
//           </div>

//         </div>

//       </section> */}
//       <section className="whyJoinSection">

//         <div className="whyJoinContainer">

//           <div className="whyJoinHeader">

//             <span className="joinTag">
//               ✨ Why Choose ICAEBMS-2026
//             </span>

//             <h2>
//               Why <span>Join ICAEBMS?</span>
//             </h2>

//             <p>
//               Experience a globally recognized conference designed to inspire
//               innovation, strengthen academic excellence, and create meaningful
//               professional connections for future success.
//             </p>

//           </div>

//           <div className="joinTimeline">

//             {/* ITEM 1 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 01
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">🎓</span>

//                 <h3>Learn From Industry Experts</h3>

//                 <p>
//                   Attend keynote sessions and technical talks delivered by renowned
//                   academicians, researchers, and industry professionals from around
//                   the world.
//                 </p>

//                 <ul>
//                   <li>International keynote speakers</li>
//                   <li>Advanced technical sessions</li>
//                   <li>Practical knowledge sharing</li>
//                 </ul>
//               </div>

//             </div>

//             {/* ITEM 2 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 02
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">🌍</span>

//                 <h3>Global Research Visibility</h3>

//                 <p>
//                   Showcase your innovative ideas and gain international recognition
//                   through presentations and collaborative opportunities.
//                 </p>

//                 <ul>
//                   <li>Worldwide participant exposure</li>
//                   <li>International collaborations</li>
//                   <li>Academic reputation building</li>
//                 </ul>
//               </div>

//             </div>

//             {/* ITEM 3 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 03
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">📚</span>

//                 <h3>Publication Opportunities</h3>

//                 <p>
//                   Selected papers will be published in conference proceedings and
//                   associated journals with quality review standards.
//                 </p>

//                 <ul>
//                   <li>Peer-reviewed publications</li>
//                   <li>Conference proceedings</li>
//                   <li>Research paper indexing</li>
//                 </ul>
//               </div>

//             </div>

//             {/* ITEM 4 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 04
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">🤝</span>

//                 <h3>Expand Professional Network</h3>

//                 <p>
//                   Connect with scholars, innovators, startups, and professionals to
//                   build future collaborations and career opportunities.
//                 </p>

//                 <ul>
//                   <li>Academic networking</li>
//                   <li>Industry partnerships</li>
//                   <li>Collaborative opportunities</li>
//                 </ul>
//               </div>

//             </div>

//             {/* ITEM 5 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 05
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">🏆</span>

//                 <h3>Recognition & Excellence Awards</h3>

//                 <p>
//                   Outstanding papers and innovative presentations will receive
//                   prestigious awards and appreciation certificates.
//                 </p>

//                 <ul>
//                   <li>Best paper awards</li>
//                   <li>Presentation recognition</li>
//                   <li>Certificates of excellence</li>
//                 </ul>
//               </div>

//             </div>

//             {/* ITEM 6 */}
//             <div className="joinItem">

//               <div className="joinNumber">
//                 06
//               </div>

//               <div className="joinContent">
//                 <span className="joinIcon">🚀</span>

//                 <h3>Career & Innovation Growth</h3>

//                 <p>
//                   Enhance your academic and professional journey by exploring
//                   emerging technologies and future-oriented innovations.
//                 </p>

//                 <ul>
//                   <li>Career advancement</li>
//                   <li>Innovation exposure</li>
//                   <li>Future technology insights</li>
//                 </ul>
//               </div>

//             </div>

//           </div>

//         </div>

//       </section>

//       {/* CONTACT SECTION
//       <section className="contactSection">

//         <h2>Contact Us</h2>

//         <div className="contactGrid">

//           <div className="contactCard">
//             <h3>📍 Address</h3>
//             <p>Bangkok, Thailand</p>
//           </div>

//           <div className="contactCard">
//             <h3>📧 Email</h3>
//             <p>info@icaebms.com</p>
//           </div>

//           <div className="contactCard">
//             <h3>📞 Phone</h3>
//             <p>+91 9876543210</p>
//           </div>

//         </div>

//         <form className="contactForm">

//           <input type="text" placeholder="Your Name" />

//           <input type="email" placeholder="Your Email" />

//           <textarea placeholder="Your Message"></textarea>

//           <button>
//             Send Message
//           </button>

//         </form>

//       </section>


//       <footer className="footer">

//         <h2>ICAEBMS-2026</h2>

//         <p>
//           Proceedings will be submitted to Web of Science and
//           Scopus for evaluation and indexing.
//         </p>

//       </footer> */}
//       <section className="contactSection" id="contact">

//         <div className="contactContainer">

//           <div className="contactHeader">

//             <span className="contactTag">
//               📞 Get In Touch
//             </span>

//             <h2>
//               Contact <span>ICAEBMS-2026</span>
//             </h2>

//             <p>
//               We are here to assist you with conference registration, paper
//               submissions, accommodation details, and general inquiries.
//               Feel free to reach out to our organizing committee anytime.
//             </p>

//           </div>

//           <div className="contactGrid">

//             {/* ADDRESS */}

//             <div className="contactCard">

//               <div className="contactIcon">📍</div>

//               <h3>Conference Venue</h3>

//               <p>
//                 International Convention Center<br />
//                 Bangkok, Thailand
//               </p>

//               <span>
//                 Easy access to airport, hotels & transport facilities.
//               </span>

//             </div>

//             {/* EMAIL */}

//             <div className="contactCard">

//               <div className="contactIcon">📧</div>

//               <h3>Email Support</h3>

//               <p>
//                 info@icaebms.com<br />
//                 submissions@icaebms.com
//               </p>

//               <span>
//                 Response Time: Within 24 Hours
//               </span>

//             </div>

//             {/* PHONE */}

//             <div className="contactCard">

//               <div className="contactIcon">📞</div>

//               <h3>Call Us</h3>

//               <p>
//                 +91 9876543210<br />
//                 +66 123456789
//               </p>

//               <span>
//                 Mon - Sat : 9:00 AM to 6:00 PM
//               </span>

//             </div>

//             {/* SOCIAL */}

//             <div className="contactCard">

//               <div className="contactIcon">🌐</div>

//               <h3>Follow Us</h3>

//               <p>
//                 Facebook • LinkedIn<br />
//                 Instagram • YouTube
//               </p>

//               <span>
//                 Stay updated with conference announcements.
//               </span>

//             </div>

//           </div>

//           {/* CONTACT FORM */}

//           <div className="formWrapper">

//             <h3>Send Us a Message</h3>

//             <form className="contactForm">

//               <div className="inputRow">

//                 <input
//                   type="text"
//                   placeholder="Your Full Name"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Your Email Address"
//                 />

//               </div>

//               <input
//                 type="text"
//                 placeholder="Subject"
//               />

//               <textarea
//                 placeholder="Write Your Message Here..."
//               ></textarea>

//               <button type="submit">
//                 🚀 Send Message
//               </button>

//             </form>

//           </div>

//         </div>

//       </section>

//       {/* FOOTER */}

//       <footer className="footer">

//         <div className="footerContainer">

//           <h2>ICAEBMS-2026</h2>

//           <p>
//             International Conference on Advances in Engineering,
//             Business Management & Social Sciences 2026
//           </p>

//           <div className="footerLinks">

//             <span>Home</span>
//             <span>About</span>
//             <span>Submission</span>
//             <span>Registration</span>
//             <span>Contact</span>

//           </div>

//           <div className="footerInfo">

//             <p>
//               📚 Proceedings will be submitted for evaluation and
//               indexing in reputed international databases including
//               Scopus and Web of Science.
//             </p>

//             <p>
//               © 2026 ICAEBMS Conference. All Rights Reserved.
//             </p>

//           </div>

//         </div>

//       </footer>

//     </div>
//   );
// }

// export default Ceradaproject;




import React, { useEffect, useState } from "react";
import "./App.css";

function Ceradaproject({ setPage }) {

  const [time, setTime] = useState(new Date());
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="app">

      {/* TOP BAR */}
      <marquee className="topbar">
        HYBRID EVENT - Participate in Bangkok, Thailand or Virtually from your Home or Office
      </marquee>

      {/* NAVBAR */}
      <nav className="navbar">

        {/* LEFT ICON BUTTON */}
        <div
          className="menuButton"
          onClick={() => setShowSidebar(true)}
        >

          <div className="menuDots">
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

        {/* LOGO */}
        <div className="logo">

          <div className="logoShape">
            <img
            src="https://tse4.mm.bing.net/th/id/OIP.6Z-bKedtUvSgzczBR6a5IwHaHa?pid=Api&h=220&P=0"
            alt="ICAEBMS Logo"
            style={{
              width: "60px",
              height: "60px",
              objectFit: "contain"
            }}
          />
          </div>

          <div className="logoText">

            <h2>ICAEBMS</h2>

            <span>
              International Conference 2026
            </span>

          </div>

        </div>

        {/* MENU */}
        <ul className="menu">

          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#conference">Conference</a>
          </li>

          <li>
            <a href="#tracks">Tracks</a>
          </li>

          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>

        {/* DATE */}
        <div className="eventDate">
          Aug 27-28 • 2026
        </div>

      </nav>

      {/* SIDEBAR */}
      <div className={`sidebar ${showSidebar ? "showSidebar" : ""}`}>

        {/* TOP */}
        <div className="sidebarTop">

          <div>

            <h2>ICAEBMS-2026</h2>

            <span>
              Global Research Conference
            </span>

          </div>

          <button
            onClick={() => setShowSidebar(false)}
          >
            ✕
          </button>

        </div>

        {/* ABOUT */}
        <div className="aboutCard">

          <h3>About Conference</h3>

          <p>
            ICAEBMS-2026 brings together researchers,
            academicians, professionals, innovators,
            and students from around the world to
            exchange ideas, research findings, and
            future technologies for sustainable growth.
          </p>

        </div>

        {/* LOGIN */}
        <div className="loginBox">

          <h3>Member Login</h3>

          <input
            type="email"
            placeholder="Email Address"
          />

          <input
            type="password"
            placeholder="Password"
          />

          <button>
            Login Now
          </button>

        </div>

      </div>

      {showSidebar && (

        <div
          className="overlay"
          onClick={() => setShowSidebar(false)}
        ></div>

      )}

      {/* HERO SECTION */}
      <section className="hero" id="home">

        <div className="overlay">

          <h1>
            International Conference on Applied Science, Engineering,
            Education, Business, Management and Social Science & Humanities
          </h1>

          <h2>
            Theme: “Interdisciplinary Innovations for a Sustainable Future”
          </h2>

          {/* DIGITAL INFO BAR */}
          <div className="infoBar">

            <div className="infoCard">
              <h3>Current Time</h3>
              <p>{time.toLocaleTimeString()}</p>
            </div>

            <div className="infoCard">
              <h3>Current Date</h3>
              <p>{time.toLocaleDateString()}</p>
            </div>

            <div className="infoCard">
              <h3>Location</h3>
              <p>Bangkok, Thailand</p>
            </div>

            <div className="infoCard">
              <h3>Conference</h3>
              <p>Hybrid Event</p>
            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="welcomeSection" id="about">

        <div className="welcomeOverlay"></div>

        <div className="welcomeContainer">

          <div className="welcomeBadge">
            🌍 International Conference 2026
          </div>

          <h2>
            Welcome to <span>ICAEBMS-2026</span>
          </h2>

          <div className="welcomeLine"></div>

          <p className="shortText">
            We warmly welcome researchers, academicians, professionals, and students
            from across the globe to participate in ICAEBMS-2026.
          </p>

          <p className="mainText">
            ICAEBMS-2026 serves as a prestigious international platform for sharing
            innovative research, exchanging knowledge, and fostering meaningful
            collaborations among academicians, scientists, industry experts, and
            young researchers.
          </p>

        </div>

      </section>

      {/* CONFERENCE */}
      <section className="section" id="conference">

        <h2>Conference Theme</h2>

        <div className="themeGrid">

          <div className="themeCard">
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa"
              alt=""
            />
            <h3>Interdisciplinary Collaboration</h3>
          </div>

          <div className="themeCard">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt=""
            />
            <h3>Sustainable Innovation</h3>
          </div>

          <div className="themeCard">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
              alt=""
            />
            <h3>Future Research Solutions</h3>
          </div>

        </div>

      </section>

      {/* TRACKS */}
      <section className="section" id="tracks">

        <h2>Session Tracks / Call For Papers</h2>

        <div className="trackGrid">

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1532094349884-543bc11b234d"
              alt=""
            />
            <h3>Applied Science</h3>
          </div>

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475"
              alt=""
            />
            <h3>Engineering & Technology</h3>
          </div>

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt=""
            />
            <h3>Education</h3>
          </div>

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt=""
            />
            <h3>Business & Management</h3>
          </div>

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf"
              alt=""
            />
            <h3>Social Science</h3>
          </div>

          <div className="trackCard">
            <img
              src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
              alt=""
            />
            <h3>Finance & Marketing</h3>
          </div>

        </div>

      </section>

      {/* DEADLINES */}
      <section className="deadlineSection" id="registration">

        <div className="deadlineContainer">

          <div className="deadlineHeader">

            <span className="deadlineTag">
              📅 Important Dates
            </span>

            <h2>
              Submission <span>Deadlines</span>
            </h2>

          </div>

          <div className="deadlineGrid">

            <div className="deadlineCard">

              <div className="dateCircle">
                <h3>31</h3>
                <span>DEC</span>
              </div>

              <h4>Early Bird Registration</h4>

              <div className="year">2025</div>

            </div>

            <div className="deadlineCard">

              <div className="dateCircle">
                <h3>31</h3>
                <span>JAN</span>
              </div>

              <h4>Abstract Submission</h4>

              <div className="year">2026</div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="contactSection" id="contact">

        <div className="contactContainer">

          <div className="contactHeader">

            <span className="contactTag">
              📞 Get In Touch
            </span>

            <h2>
              Contact <span>ICAEBMS-2026</span>
            </h2>

          </div>

          <div className="contactGrid">

            <div className="contactCard">

              <div className="contactIcon">📍</div>

              <h3>Conference Venue</h3>

              <p>
                International Convention Center<br />
                Bangkok, Thailand
              </p>

            </div>

            <div className="contactCard">

              <div className="contactIcon">📧</div>

              <h3>Email Support</h3>

              <p>
                info@icaebms.com
              </p>

            </div>

            <div className="contactCard">

              <div className="contactIcon">📞</div>

              <h3>Call Us</h3>

              <p>
                +91 9876543210
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footerContainer">

          <h2>ICAEBMS-2026</h2>

          <p>
            International Conference on Advances in Engineering,
            Business Management & Social Sciences 2026
          </p>

          {/* FOOTER LINKS */}
          <div className="footerLinks">

            <a href="#home">Home</a>

            <a href="#about">About</a>

            <a href="#conference">Conference</a>

            <a href="#tracks">Tracks</a>

            <a href="#registration">Registration</a>

            <a href="#contact">Contact</a>

          </div>

          <div className="footerInfo">

            <p>
              📚 Proceedings will be submitted for evaluation and
              indexing in reputed international databases including
              Scopus and Web of Science.
            </p>

            <p>
              © 2026 ICAEBMS Conference. All Rights Reserved.
            </p>

          </div>

        </div>

      </footer>

    </div>
  );
}

export default Ceradaproject;