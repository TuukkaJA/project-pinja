import React, { useState } from 'react';
import ConsultantList from '../components/ConsultantList/ConsultantList';
import SearchBar from '../components/SearchBar/SearchBar';
import Sidebar from '../components/Sidebar/Sidebar';
import toggleIcon from '../toggle-icon.png';
import '../App.css';

function Profile() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Profile');
    const [searchTerm, setSearchTerm] = useState('');
    const [consultants, setConsultants] = useState([
      { id: 1, name: 'John', surname: 'Doe', position: 'Senior Consultant', experienceyears: 'Experience: 19y', cvLink: '/path-to-john-cv.pdf' },
    ]);
  
    const toggleSidebar = () => 
      setSidebarOpen((prevState) => !prevState);
  
  
    const filteredConsultants = consultants.filter((consultant) =>
      consultant.position.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      consultant.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      consultant.surname.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  
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
          <h1>Consultants</h1>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ConsultantList consultants={filteredConsultants} />
        </div>
      </div>
    );
  }
  
  export default Profile;