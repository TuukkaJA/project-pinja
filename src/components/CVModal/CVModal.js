import React from 'react';
import './CVModal.css';

const CVModal = ({ consultant, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="cv-modal" onClick={(e) => e.stopPropagation()}>
        <h2>{consultant.name} {consultant.surname}'s CV</h2>
        <iframe src={consultant.cvLink} title="Consultant CV" className="cv-frame" />
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CVModal;
