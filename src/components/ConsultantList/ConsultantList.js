import React, { useState } from 'react';
import ConsultantCard from '../ConsultantCard/ConsultantCard';

const ConsultantList = ({ consultants, onConsultantClick, team, setTeam }) => {

  const handleAddToTeam = (consultant) => {
    if (!team.some((member) => member.id === consultant.id)) {
      setTeam((prevTeam) => [...prevTeam, consultant]);
    }
  }
  
  return (
  <div className="consultant-list">
    {consultants.map((consultant) => (
      <div key={consultant.id} onClick={() => onConsultantClick(consultant)}>
        <ConsultantCard
         key={consultant.id} 
         consultant={consultant} 
         onAddToTeam={() => handleAddToTeam(consultant)}
         />
      </div>
    ))}
  </div>
);
};

export default ConsultantList;
