import React from 'react';
import ConsultantCard from '../ConsultantCard/ConsultantCard';

const ConsultantList = ({ consultants, onConsultantClick }) => (
  <div className="consultant-list">
    {consultants.map((consultant) => (
      <div key={consultant.id} onClick={() => onConsultantClick(consultant)}>
        <ConsultantCard consultant={consultant} />
      </div>
    ))}
  </div>
);

export default ConsultantList;
