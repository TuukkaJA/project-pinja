import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import './Sidebar.css';
import toggleIcon from '../../toggle-icon_pink.png';

const Sidebar = ({ isOpen, toggleSidebar, activeItem, setActiveItem, team = [], setTeam }) => {

const loggedInUser = localStorage.getItem('loggedInUser');
const navigate = useNavigate();

const handleLogout = () => {
  localStorage.removeItem('loggedInUser');
  localStorage.removeItem('isLoggedIn');
  window.location.reload();
};

const handleItemClick = (item) => {
  setActiveItem(item);
  if (item === "Consultants") navigate('/consultants') ;
  if (item === "Profile") navigate('/profile');
  if (item === "Login") navigate('/Login');
};

const handleConsultantClick = (consultant, index) => {
  const updatedTeam = team.filter((_, i) => i !== index);
  setTeam(updatedTeam);
};

const handleDownloadAllPDF = () => {
  if (team.length === 0) {
    alert('No team members to export!');
    return;
  }

  const doc = new jsPDF();
  let y = 30;
  const pageHeight = doc.internal.pageSize.height;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(18);
  doc.text('Team Members Information', 105, 20, { align: "center" });
  doc.setLineWidth(0.5);
  doc.line(10, 25, 200, 25);

  team.forEach((consultant, index) => {
    if (y + 50 > pageHeight) {
      doc.addPage();
      y = 10;
    }

    doc.setTextColor(219, 1, 86);
    doc.setFontSize(14);
    y += 10;
    doc.text(`${index + 1}. ${consultant.name} ${consultant.surname}`, 10, y);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.text(`Position: ${consultant.position}`, 10, y + 10);
    doc.text(`Education: ${consultant.education || "N/A"}`, 10, y + 20);
    doc.text(`Study Program: ${consultant.studyProgram || "N/A"}`, 10, y + 30);
    doc.text(`Graduating Year: ${consultant.graduatingYear || "N/A"}`, 10, y + 40);
    doc.text(`Certificates: ${consultant.certificates || "N/A"}`, 90, y + 10);
    doc.text(`Projects: ${consultant.projects || "N/A"}`, 90, y + 20);
    doc.text(`Tech Experience: ${consultant.technologies || "N/A"}`, 90, y + 30);
    doc.text(`Work Experience: ${consultant.workExperience || "N/A"}`, 90, y + 40);

    doc.setLineWidth(0.2);
    doc.line(10, y + 50, 200, y + 50);

    y += 50;
  });

  doc.setFontSize(10);
  doc.text("Generated with jsPDF", 105, pageHeight - 10, { align: "center" });

  doc.save('Team_Members_Info.pdf');
};


return (
  <div className={`sidebar open`}>
      <button onClick={toggleSidebar} title="Toggle sidebar">
        {isOpen ? '' : 'Open Sidebar'}
        <img src={toggleIcon} alt="Toggle Icon" />
      </button>
      {loggedInUser && ( 
        <div className="logged-in-user">
          Logged in as: <strong>{loggedInUser}</strong>
        </div>
      )}
      {isOpen && (
        <ul>
          <li
          onClick={() => handleItemClick("Profile")}
          className={activeItem === "Profile" ? "active" : ""}>
          Profile
          </li>
          <li 
            onClick={() => handleItemClick("Consultants")}
            className={activeItem === "Consultants" ? "active" : ""}>
          Consultants
          </li>
        </ul>
      )}
      <div className="logout">
        {loggedInUser ? (
        <button className="logout-button" onClick={handleLogout}>
            Logout
        </button>
        ) : (
          <button
          className="login-button"
          onClick={() => navigate('/Login')}
        >
          Login
        </button>
      )}
      </div>
         <div className="team">
          <h1>Team</h1>
          <ul className="team-list">
          {team.length > 0 ? (
            team.map((consultant, index) => (
              <li 
              key={index} 
              className="team-member"
              onClick={() => handleConsultantClick(consultant, index)}
              title="Remove team member"
              >
              {consultant.name} {consultant.surname} / {consultant.position} 
              </li>
            ))
          ) : (
            <p>No team members added.</p>
          )}
        </ul>
        <button onClick={handleDownloadAllPDF} className="logout-button">
          Create team PDF
        </button>
        </div>
    </div>
  );
};

export default Sidebar;