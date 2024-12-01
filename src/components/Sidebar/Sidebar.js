import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Sidebar.css';
import toggleIcon from '../../toggle-icon_pink.png';

const Sidebar = ({ isOpen, toggleSidebar, activeItem, setActiveItem, team = [], setTeam }) => {

const loggedInUser = localStorage.getItem('loggedInUser');
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('isLoggedIn');
  window.location.reload();
};

const handleItemClick = (item) => {
  setActiveItem(item);
  if (item === "Consultants") navigate('/consultants') ;
  if (item === "Profile") navigate('/profile');
  if (item === "Login") navigate('/Login');
};

const handleConsultantClick = (consultant, index) => {
  const updatedTeam = team.filter((_, i) => i !== index);
  setTeam(updatedTeam);
};

return (
  <div className={`sidebar open`}>
      <button onClick={toggleSidebar} title="Toggle sidebar">
        {isOpen ? '' : 'Open Sidebar'}
        <img src={toggleIcon} alt="Toggle Icon" />
      </button>
      {loggedInUser && ( 
        <div className="logged-in-user">
          Logged in as: <strong>{loggedInUser}</strong>
        </div>
      )}
      {isOpen && (
        <ul>
          <li
          onClick={() => handleItemClick("Profile")}
          className={activeItem === "Profile" ? "active" : ""}>
          Profile
          </li>
          <li 
            onClick={() => handleItemClick("Consultants")}
            className={activeItem === "Consultants" ? "active" : ""}>
          Consultants
          </li>
        </ul>
      )}
      <div className="logout">
        {loggedInUser ? (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
        ) : (
          <button
          className="login-button"
          onClick={() => navigate('/Login')}
        >
          Login
        </button>
      )}
      </div>
         <div className="team">
          <h1>Team</h1>
          <ul className="team-list">
          {team.length > 0 ? (
            team.map((consultant, index) => (
              <li 
              key={index} 
              className="team-member"
              onClick={() => handleConsultantClick(consultant, index)}
              title="Remove team member"
              >
              {consultant.name} {consultant.surname} / {consultant.position} 
              </li>
            ))
          ) : (
            <p>No team members added.</p>
          )}
        </ul>
        </div>
    </div>
  );
};

export default Sidebar;