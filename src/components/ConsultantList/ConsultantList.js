import React from 'react';
import ConsultantCard from '../ConsultantCard/ConsultantCard'

const ConsultantList = ({ consultants }) => {
  return (
    <div className="consultant-list">
      {consultants.map((consultant) => (
        <ConsultantCard key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ConsultantList;
