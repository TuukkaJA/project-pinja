import React from 'react';
import './ConsultantCard.css';
import downLoadIcon from './download-icon.png';
import plusIcon from './plus-icon.png';

const ConsultantCard = ({ consultant, onAddToTeam }) => {

  const handleButtonClick = (e) => {
    e.stopPropagation();
    onAddToTeam();
  };

  const handleDownloadClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className="consultant-card">
      <img className="pp" src={consultant.pp} alt="" />
      <div>
        <h3 className="name">{consultant.name} {consultant.surname}</h3>
        <div>
          <p className="position">{consultant.position}</p> 
          <p className="experience">{consultant.experienceyears}</p>
        </div>
        <a
          className="download-CV"
          href={consultant.cvLink}
          download
          onClick={handleDownloadClick}
          title="Download CV in pdf"
        >
          <img src={downLoadIcon} alt="Download" title="Download CV in pdf"/> Download CV
        </a>
      </div>
      <button
        className="add-to-team"
        onClick={handleButtonClick}
        title="Add to team"
      >
        <img src={plusIcon} alt="Add to team" title="Add to team" />
      </button>
    </div>
  );
};

export default ConsultantCard;