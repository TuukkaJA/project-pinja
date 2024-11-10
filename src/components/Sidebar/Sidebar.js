import React, { useState } from 'react';
import './Sidebar.css';
import toggleIcon from '../../toggle-icon.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {

const  [activeItem, setActiveItem] = useState("Consultants");

const handleItemClick = (item) => {
  setActiveItem(item);
};


  return (
    <div className={`sidebar open`}>
      <button onClick={toggleSidebar}>
        {isOpen ? '' : 'Open Sidebar'}
        <img src={toggleIcon} alt="Toggle Icon" />
      </button>
      {isOpen && (
        <ul>
          <li
          onClick={() => handleItemClick("Profile")}
          className={activeItem === "Profile" ? "active" : ""}>
          Profile</li>
          <li 
            onClick={() => handleItemClick("Consultants")}
            className={activeItem === "Consultants" ? "active" : ""}>
          Consultants</li>
          <li>Team</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;