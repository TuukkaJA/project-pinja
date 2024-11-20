import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import toggleIcon from '../toggle-icon_pink.png';
import '../App.css';
import Cv from './Cv/Cv';

function Profile() {
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Profile');
  
    const toggleSidebar = () => 
      setSidebarOpen((prevState) => !prevState);
  
    return (
      <div className="app">
        {isSidebarOpen && (
            <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            />)}
         <button className="toggle-sidebar" onClick={toggleSidebar}>
          <img src={toggleIcon} alt="Toggle Icon" />
         </button>
        <div className="content">
       <Cv />
        </div>
      </div>
    );
  }
  
  export default Profile;