import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar open`}>
      <button onClick={toggleSidebar}>
        {isOpen ? 'Close Sidebar' : 'Open Sidebar'}
      </button>
      {isOpen && (
        <ul>
          <li>Profile</li>
          <li>Konsultit</li>
          <li>Team</li>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
