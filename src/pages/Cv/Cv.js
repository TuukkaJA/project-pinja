import React, { useState, useEffect} from 'react';
import jsPDF from 'jspdf';
import './Cv.css';

function Cv({ onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    education: "Second year in Business IT",
    studyProgram: "Software Engineering",
    graduatingYear: "2027",
    certificates: "AWS Certified Solutions Architect, Scrum Master",
    projects: "Web App Development, AI Chatbot",
    technologyExperience: "HTML, CSS, JavaScript, React, Node.js, SQL, Python",
    workExperience: "Software Engineer at XYZ Corp, Intern at ABC Ltd",
  });

  const [originalFormData, setOriginalFormData] = useState({ ...formData });

  const handleEditToggle = () => {
    
      setIsEditing((prev) => !prev);
      if (!isEditing) {
        setFormData({ ...originalFormData });
      }
    
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    setOriginalFormData({ ...formData });
    onUpdate && onUpdate(formData);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ ...originalFormData });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(`${localStorage.getItem('loggedInUser')}'s CV`, 105, 20, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    doc.setTextColor(0, 102, 204);
    doc.setFontSize(16);
    doc.text("Personal Information", 10, 40);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name} ${formData.surname}`, 10, 50);
    doc.text(`Education: ${formData.education}`, 10, 60);
    doc.text(`Study Program: ${formData.studyProgram}`, 10, 70);
    doc.text(`Graduating Year: ${formData.graduatingYear}`, 10, 80);
    doc.text(`Certificates: ${formData.certificates}`, 10, 90);
    doc.text(`Projects: ${formData.projects}`, 10, 100);
    doc.text(`Technology Experience: ${formData.technologies}`, 10, 110);
    doc.text(`Work Experience: ${formData.workExperience}`, 10, 120);

    doc.setFontSize(10);
    doc.text("Generated with jsPDF", 105, 290, { align: "center" });

    doc.save(`${localStorage.getItem('loggedInUser')}_CV.pdf`);
  };

  return (
    <div>
      <div className="cv-modal-cv"> 
        <h2>{localStorage.getItem('loggedInUser')}'s Information</h2>
        <div className="field">
          <label>Education:</label>
          {isEditing ? (
            <input
              type="text"
              name="education"
              value={formData.education}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.education}</p>
          )}
        </div>
        <div className="field">
          <label>Study Program:</label>
          {isEditing ? (
            <input
              type="text"
              name="studyProgram"
              value={formData.studyProgram}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.studyProgram}</p>
          )}
        </div>
        <div className="field">
          <label>Graduating Year:</label>
          {isEditing ? (
            <input
              type="number"
              name="graduatingYear"
              value={formData.graduatingYear}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.graduatingYear}</p>
          )}
        </div>
        <div className="field">
          <label>Certificates:</label>
          {isEditing ? (
            <input
              type="text"
              name="certificates"
              value={formData.certificates}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.certificates}</p>
          )}
        </div>
        <div className="field">
          <label>Projects:</label>
          {isEditing ? (
            <input
              type="text"
              name="projects"
              value={formData.projects}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.projects}</p>
          )}
        </div>
        <div className="field">
          <label>Technology Experience:</label>
          {isEditing ? (
            <input
              type="text"
              name="technologyExperience"
              value={formData.technologyExperience}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.technologyExperience}</p>
          )}
        </div>
        <div className="field">
          <label>Work Experience:</label>
          {isEditing ? (
            <input
              type="text"
              name="workExperience"
              value={formData.workExperience}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.workExperience}</p>
          )}
        </div>
        <div className="actions">
          {isEditing ? (
            <>
              <button onClick={handleSave} className="save-button">
                Save
              </button>
              <button onClick={handleCancel} className="cancel-button">
                Cancel
              </button>
            </>
          ) : (
            <button onClick={handleEditToggle} className="edit-button">
              Edit
            </button>
          )}
            <button
              onClick={handleDownloadPDF}
              className="download-button"
              title="Download CV in pdf"
              > Download CV
            </button>
        </div>
      </div>
      {/*<div className="cv">
        <iframe
          src="/cv-files/Malli_cv.pdf"
          title="Consultant CV"
          className="cv-frame"
        />
      </div>*/}
    </div>
  );
}

export default Cv;
