import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import toggleIcon from '../toggle-icon.png';
import '../App.css';

function Profile() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
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
        <h1>CV</h1>
          <p>Full Name: John Doe</p>
          <p>Age: 25</p>
          <p>Occupation: Web Developer</p>
          <p>Location: Lagos, Nigeria</p>
          <p>Skills: HTML, CSS, JavaScript, React</p>
          <p>Experience: 3 years</p>
          <p>Education: B.Sc Computer Science</p>
          <p>Language: English</p>
          <p>Phone: 08012345678</p>
          <p>Email:
            <a href="mailto: "> JohnDoe@gmail.com</a>
          </p>
        </div>
      </div>
    );
  }
  
  export default Profile;