import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import toggleIcon from '../toggle-icon_pink.png';
import '../App.css';
import Cv from './Cv/Cv';

function Profile() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Profile');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        setIsLoggedIn(true);
      }
    }, []);
  
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
         <button className="toggle-sidebar" onClick={toggleSidebar} title="Toggle sidebar">
          <img src={toggleIcon} alt="Toggle Icon" title="Toggle sidebar" />
         </button>
         {isLoggedIn ? (
        <div className="content">
       <Cv/>
        </div>
      ) : (
        <div className="content">
        <h1>Profile</h1>
        <p>Log in to view your profile</p>
        <div className="button-box">
        <button
          className="login-button"
          onClick={() => navigate('/Login')}
          >
          Login
        </button>
        </div>
      </div>
    )}
      </div>
    );
  }
  
  export default Profile;