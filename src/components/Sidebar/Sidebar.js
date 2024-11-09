import React from 'react';
import './Sidebar.css';
import toggleIcon from '../../toggle-icon.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar open`}>
      <button onClick={toggleSidebar}>
        {isOpen ? '' : 'Open Sidebar'}
        <img src={toggleIcon} alt="Toggle Icon" style={{ width: '30px', height: '30px' }} />
      </button>
      {isOpen && (
        <ul>
          <li>Profile</li>
          <li>Consultants</li>
          <li>Team</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;