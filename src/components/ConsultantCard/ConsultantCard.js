import React from 'react';
import './ConsultantCard.css';
import downLoadIcon from './download-icon.png';

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="consultant-card">
      <img className="pp" src={consultant.pp} alt="" />
      <div>
        <h3 className="name">{consultant.name} {consultant.surname}</h3>
        <div>
          <p className="position">{consultant.position}</p> 
          <p className="experience">{consultant.experienceyears}</p>
       </div>
        <a className="download-CV" href={consultant.cvLink} download>
          <img src={downLoadIcon} alt="" /> Download CV
        </a>
        </div>
    </div>
  );
};

export default ConsultantCard;