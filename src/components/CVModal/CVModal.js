import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './CVModal.css';

const CVModal = ({ consultant, onClose, onUpdate, isLoggedIn }) => {

  const [isEditing, setIsEditing] = useState(false);
  const[formData, setFormData] = useState(consultant);
  const[originalFormData, setOriginalFormData] = useState(consultant);
  const[message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setOriginalFormData(consultant);
  }, [consultant]);

  const handleEditToggle = () => {
    if (isLoggedIn) {
    setIsEditing((prev) => !prev);
    setFormData({ ...originalFormData});
    }
    else {
      setMessage("Log in to edit information");
      setTimeout(() => {
        setMessage("");
      }, 3000);
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
    onUpdate(formData);
  };


  const handleCancel = () => {
    setIsEditing(false);
    setFormData({ ...originalFormData });
  };

  const handleDownloadPDF = () => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(`${formData.name} ${formData.surname}'s CV`, 105, 20, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    doc.setTextColor(219, 1, 86);
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

    doc.save(`${formData.name}_${formData.surname}_CV.pdf`);
  };
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{isEditing ? "Edit Information" : "Information"}</h2>
        <div className="field">
        <label>Name:</label>
          {isEditing && isLoggedIn ? (
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            />
          ) : (
            <p>{formData.name} {formData.surname} </p>
          )}
        </div>
        <div className="field">
          <label>Education:</label>
          {isEditing && isLoggedIn ? (
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
          <label>Study program:</label>
          {isEditing && isLoggedIn ? (
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
          <label>GraduatingYear:</label>
          {isEditing && isLoggedIn? (
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
          <label> Certificates:</label>
          {isEditing && isLoggedIn? (
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
          {isEditing && isLoggedIn ? (
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
          {isEditing && isLoggedIn ? (
            <input
              type="text"
              name="technologies"
              value={formData.technologies}
              onChange={handleChange}
            />
          ) : (
            <p>{formData.technologies}</p>
          )}
        </div>
        <div className="field">
          <label>Work Experience:</label>
          {isEditing && isLoggedIn ? (
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
        {isEditing && isLoggedIn ? (
          <button onClick={handleSave} className="save-button">
            Save
          </button>
        ) : (
          <button onClick={handleEditToggle} className="edit-button">
            Edit
          </button>
        )}
        {message && <p className="login-message">{message} <button onClick={() => navigate('/Login')}>
          Login
        </button></p>}
        {isEditing && isLoggedIn && (
          <button onClick={handleCancel} className="cancel-button">
            Cancel
          </button>
        )}
          <button onClick={handleDownloadPDF} className="download-button">
          Download PDF
          </button>
        </div>
        {/*<h2>{formData.name} {formData.surname}'s CV</h2>
        <iframe src={consultant.cvLink} title="Consultant CV" className="cv-frame" />*/}
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CVModal;
