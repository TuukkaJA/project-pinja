import React, { useState, useEffect} from 'react';
import './Cv.css';

function Cv({ onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    education: "MSc in Computer Science",
    studyProgram: "Software Engineering",
    graduatingYear: "2020",
    certificates: "AWS Certified Solutions Architect, Scrum Master",
    projects: "Web App Development, AI Chatbot",
    technologyExperience: "HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, Python, Java",
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

  return (
    <div>
      <div className="cv-modal-cv">
        <h2>{localStorage.getItem('loggedInUser')}'s Profile Information</h2>
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
        </div>
      </div>
      <div className="cv">
        <iframe
          src="/cv-files/Malli_cv.pdf"
          title="Consultant CV"
          className="cv-frame"
        />
      </div>
    </div>
  );
}

export default Cv;
