import React, { useState } from 'react';
import ConsultantList from '../components/ConsultantList/ConsultantList';
import SearchBar from '../components/SearchBar/SearchBar';
import Sidebar from '../components/Sidebar/Sidebar';
import CVModal from '../components/CVModal/CVModal';
import toggleIcon from '../toggle-icon_pink.png';

function Consultants({ isLoggedIn }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Consultants');
    const [team, setTeam] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedConsultant, setSelectedConsultant] = useState(null);
    const [consultants, setConsultants] = useState([
        { id: 1, name: 'John', surname: 'Doe', position: 'Senior Consultant', experienceyears: '19 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 2, name: 'Jane', surname: 'Fisher', position: 'Project Manager', experienceyears: '12 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 3, name: 'Peter', surname: 'Baker', position: 'Trainee', experienceyears: '1 year of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_man2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 4, name: 'Mark', surname: 'Rober', position: 'Trainee', experienceyears: '2 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 5, name: 'Amy', surname: 'Laker', position: 'Developer', experienceyears: '5 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 6, name: 'Ulrik', surname: 'Wenster', position: 'Sales', experienceyears: '8 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_man2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 7, name: 'Thomas', surname: 'Järvinen', position: 'Project Manager', experienceyears: '10 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 8, name: 'Sara', surname: 'Nash', position: 'Consultant', experienceyears: '7 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 9, name: 'Liam', surname: 'Stone', position: 'Developer', experienceyears: '3 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 10, name: 'Olivia', surname: 'Brooks', position: 'Analyst', experienceyears: '6 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 11, name: 'Noah', surname: 'Wright', position: 'Data Scientist', experienceyears: '4 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 12, name: 'Ava', surname: 'Clark', position: 'Consultant', experienceyears: '9 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 13, name: 'Mason', surname: 'Evans', position: 'Senior Developer', experienceyears: '15 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 14, name: 'Isabella', surname: 'Harris', position: 'UI Designer', experienceyears: '6 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 15, name: 'Ethan', surname: 'Nelson', position: 'Trainee', experienceyears: '1 year of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 16, name: 'Sophia', surname: 'Carter', position: 'Sales Manager', experienceyears: '14 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2002, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 17, name: 'James', surname: 'Robinson', position: 'Marketing Consultant', experienceyears: '11 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 18, name: 'Charlotte', surname: 'Walker', position: 'HR Specialist', experienceyears: '8 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 19, name: 'Benjamin', surname: 'Scott', position: 'Junior Developer', experienceyears: '2 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_man2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 20, name: 'Emily', surname: 'Green', position: 'Project Coordinator', experienceyears: '5 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 21, name: 'William', surname: 'Adams', position: 'Consultant', experienceyears: '13 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 22, name: 'Grace', surname: 'Reed', position: 'Business Analyst', experienceyears: '6 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 23, name: 'Henry', surname: 'Morris', position: 'Financial Analyst', experienceyears: '9 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 24, name: 'Mia', surname: 'Hughes', position: 'Sales Executive', experienceyears: '4 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 25, name: 'Jackson', surname: 'Young', position: 'Software Engineer', experienceyears: '7 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 26, name: 'Ella', surname: 'Patterson', position: 'HR Assistant', experienceyears: '3 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 27, name: 'Sebastian', surname: 'Ramirez', position: 'Data Engineer', experienceyears: '8 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_man2.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 28, name: 'Aiden', surname: 'Kim', position: 'Consultant', experienceyears: '5 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 29, name: 'Layla', surname: 'Sullivan', position: 'Operations Manager', experienceyears: '10 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp_woman.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' },
        { id: 30, name: 'Lucas', surname: 'Martinez', position: 'IT Specialist', experienceyears: '12 years of experience', cvLink: '/cv-files/Malli_cv.pdf', pp: '/ProfilePictures/pp.png', education: 'MSc in Computer Science', studyProgram: 'Software Engineering', graduatingYear: 2020, certificates: 'AWS Certified Solutions Architect, Scrum Master', projects: 'Web App Development, AI Chatbot', technologies: 'React, Node.js, Python', workExperience: 'Software Engineer at XYZ Corp, Intern at ABC Ltd' }
    ]);

    const handleUpdateConsultant = (updatedConsultant) => {
      setConsultants((prevConsultants) =>
          prevConsultants.map((consultant) =>
              consultant.id === updatedConsultant.id ? updatedConsultant : consultant
          )
      );
  };
  
    const toggleSidebar = () => 
      setSidebarOpen((prevState) => !prevState);

    const openModal = (consultant) => setSelectedConsultant(consultant);
    const closeModal = () => setSelectedConsultant(null);
  
    const filteredConsultants = consultants.filter((consultant) =>
      consultant.position.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      consultant.name.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      consultant.surname.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      consultant.experienceyears.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  
    return (
      <div className="app">
        {isSidebarOpen && (
            <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar}
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            team={team}
            setTeam={setTeam}
             />)}
         <button className="toggle-sidebar" onClick={toggleSidebar}>
          <img src={toggleIcon} alt="Toggle Icon" />
         </button>
        <div className={`content ${selectedConsultant ? 'blurred' : ''}`}>
          <h1>Consultants</h1>
          <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <ConsultantList consultants={filteredConsultants} onConsultantClick={openModal} setTeam={setTeam} team={team} />
        </div>
        {selectedConsultant && (
          <CVModal consultant={selectedConsultant} onClose={closeModal} onUpdate={handleUpdateConsultant} isLoggedIn={isLoggedIn}/>
        )}
      </div>
    );
  }
  
  export default Consultants;