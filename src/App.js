import React, { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import SearchBar from './components/SearchBar/SearchBar';
import ConsultantList from './components/ConsultantList/ConsultantList';
import toggleIcon from './toggle-icon.png';
import './App.css';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [consultants, setConsultants] = useState([
    { id: 1, name: 'John', surname: 'Doe', position: 'Senior Consultant', experienceyears: 'Experience: 19y', cvLink: '/path-to-john-cv.pdf' },
    { id: 2, name: 'Jane', surname: 'Fisher', position: 'Project Manager', experienceyears: 'Experience: 12y', cvLink: '/path-to-jane-cv.pdf' },
    { id: 3, name: 'Peter', surname: 'Baker', position: 'Trainee', experienceyears: 'Experience: 1y', cvLink: '/path-to-peter-cv.pdf' },
    { id: 4, name: 'Mark', surname: 'Rober', position: 'Trainee', experienceyears: 'Experience: 2y', cvLink: '/path-to-mark-cv.pdf' },
    { id: 5, name: 'Amy', surname: 'Laker', position: 'Developer', experienceyears: 'Experience: 5y', cvLink: '/path-to-amy-cv.pdf' },
    { id: 6, name: 'Ulrik', surname: 'Wenster', position: 'Sales', experienceyears: 'Experience: 8y', cvLink: '/path-to-ulrik-cv.pdf' },
    { id: 7, name: 'Tuukka', surname: 'Järviluoma', position: 'Project Manager', experienceyears: 'Experience: 10y', cvLink: '/path-to-tuukka-cv.pdf' },
    { id: 8, name: 'Sara', surname: 'Nash', position: 'Consultant', experienceyears: 'Experience: 7y', cvLink: '/path-to-sara-cv.pdf' },
    { id: 9, name: 'Liam', surname: 'Stone', position: 'Developer', experienceyears: 'Experience: 3y', cvLink: '/path-to-liam-cv.pdf' },
    { id: 10, name: 'Olivia', surname: 'Brooks', position: 'Analyst', experienceyears: 'Experience: 6y', cvLink: '/path-to-olivia-cv.pdf' },
    { id: 11, name: 'Noah', surname: 'Wright', position: 'Data Scientist', experienceyears: 'Experience: 4y', cvLink: '/path-to-noah-cv.pdf' },
    { id: 12, name: 'Ava', surname: 'Clark', position: 'Consultant', experienceyears: 'Experience: 9y', cvLink: '/path-to-ava-cv.pdf' },
    { id: 13, name: 'Mason', surname: 'Evans', position: 'Senior Developer', experienceyears: 'Experience: 15y', cvLink: '/path-to-mason-cv.pdf' },
    { id: 14, name: 'Isabella', surname: 'Harris', position: 'UI Designer', experienceyears: 'Experience: 6y', cvLink: '/path-to-isabella-cv.pdf' },
    { id: 15, name: 'Ethan', surname: 'Nelson', position: 'Trainee', experienceyears: 'Experience: 1y', cvLink: '/path-to-ethan-cv.pdf' },
    { id: 16, name: 'Sophia', surname: 'Carter', position: 'Sales Manager', experienceyears: 'Experience: 14y', cvLink: '/path-to-sophia-cv.pdf' },
    { id: 17, name: 'James', surname: 'Robinson', position: 'Marketing Consultant', experienceyears: 'Experience: 11y', cvLink: '/path-to-james-cv.pdf' },
    { id: 18, name: 'Charlotte', surname: 'Walker', position: 'HR Specialist', experienceyears: 'Experience: 8y', cvLink: '/path-to-charlotte-cv.pdf' },
    { id: 19, name: 'Benjamin', surname: 'Scott', position: 'Junior Developer', experienceyears: 'Experience: 2y', cvLink: '/path-to-benjamin-cv.pdf' },
    { id: 20, name: 'Emily', surname: 'Green', position: 'Project Coordinator', experienceyears: 'Experience: 5y', cvLink: '/path-to-emily-cv.pdf' },
    { id: 21, name: 'William', surname: 'Adams', position: 'Consultant', experienceyears: 'Experience: 13y', cvLink: '/path-to-william-cv.pdf' },
    { id: 22, name: 'Grace', surname: 'Reed', position: 'Business Analyst', experienceyears: 'Experience: 6y', cvLink: '/path-to-grace-cv.pdf' },
    { id: 23, name: 'Henry', surname: 'Morris', position: 'Financial Analyst', experienceyears: 'Experience: 9y', cvLink: '/path-to-henry-cv.pdf' },
    { id: 24, name: 'Mia', surname: 'Hughes', position: 'Sales Executive', experienceyears: 'Experience: 4y', cvLink: '/path-to-mia-cv.pdf' },
    { id: 25, name: 'Jackson', surname: 'Young', position: 'Software Engineer', experienceyears: 'Experience: 7y', cvLink: '/path-to-jackson-cv.pdf' },
    { id: 26, name: 'Ella', surname: 'Patterson', position: 'HR Assistant', experienceyears: 'Experience: 3y', cvLink: '/path-to-ella-cv.pdf' },
    { id: 27, name: 'Sebastian', surname: 'Ramirez', position: 'Data Engineer', experienceyears: 'Experience: 8y', cvLink: '/path-to-sebastian-cv.pdf' },
    { id: 28, name: 'Aiden', surname: 'Kim', position: 'Consultant', experienceyears: 'Experience: 5y', cvLink: '/path-to-aiden-cv.pdf' },
    { id: 29, name: 'Layla', surname: 'Sullivan', position: 'Operations Manager', experienceyears: 'Experience: 10y', cvLink: '/path-to-layla-cv.pdf' },
    { id: 30, name: 'Lucas', surname: 'Martinez', position: 'IT Specialist', experienceyears: 'Experience: 12y', cvLink: '/path-to-lucas-cv.pdf' }
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
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
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

export default App;