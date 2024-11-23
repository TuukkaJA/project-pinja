import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
      //alert("You need to be logged in to edit information");
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
        </div>
        <h2>{formData.name} {formData.surname}'s CV</h2>
        <iframe src={consultant.cvLink} title="Consultant CV" className="cv-frame" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CVModal;
