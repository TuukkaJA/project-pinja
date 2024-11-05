import React from 'react';

const ConsultantCard = ({ consultant }) => {
  return (
    <div className="consultant-card">
      <h3>{consultant.name}</h3>
      <p>{consultant.position}</p>
      <a href={consultant.cvLink} download>
        Download CV
      </a>
    </div>
  );
};

export default ConsultantCard;
