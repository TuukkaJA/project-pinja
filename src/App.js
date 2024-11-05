import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import ConsultantList from './components/ConsultantList/ConsultantList';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [consultants, setConsultants] = useState([
    { id: 1, name: 'John Doe', position: 'Senior Consultant', cvLink: '/path-to-john-cv.pdf' },
    { id: 2, name: 'Jane Smith', position: 'Project Manager', cvLink: '/path-to-jane-cv.pdf' },
    { id: 3, name: 'Peter Baker', position: 'Trainee', cvLink: '/path-to-jane-cv.pdf' },
  ]);

  const toggleSidebar = () => 
    setSidebarOpen((prevState) => !prevState);


  const filteredConsultants = consultants.filter((consultant) =>
    consultant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <div className="content">
        <button onClick={toggleSidebar}>
          {isSidebarOpen ? 'Close Sidebar' : 'Open Sidebar'}
        </button>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <ConsultantList consultants={filteredConsultants} />
      </div>
    </div>
  );
}

export default App;
