import React, { useState } from 'react';
import './Cv.css';

function Cv() {
    return (
      <div>
       <div className="cv-modal-cv">
       <h2>{localStorage.getItem('loggedInUser')}'s profile information</h2>
         <div className="field">
           <label>Education:</label>
           <p>MSc in Computer Science</p>
         </div>
         <div className="field">
            <label>Study program:</label>
            <p>Software Engineering</p>
          </div>
          <div className="field">
           <label>GraduatingYear:</label>
            <p>2020</p>
          </div>
         <div className="field">
            <label>Certificates:</label>
            <p>AWS Certified Solutions Architect, Scrum Master</p>
         </div>
         <div className="field">
            <label>Projects:</label>
            <p>Web App Development, AI Chatbot</p>
          </div>
          <div className="field">
            <label>Technology Experience:</label>
            <p>HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Python, Java</p>
          </div>
          <div className="field">
            <label>Work Experience:</label>
            <p>Software Engineer at XYZ Corp, Intern at ABC Ltd</p>
          </div>
        </div>
        <div className="cv">
          <iframe src='/cv-files/Malli_cv.pdf' title="Consultant CV" className="cv-frame" />
        </div>
      </div>
    );
}

export default Cv;