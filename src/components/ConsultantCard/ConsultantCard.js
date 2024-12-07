import React, { useState }from 'react';
import jsPDF from 'jspdf';
import './ConsultantCard.css';
import downLoadIcon from './download-icon.png';
import plusIcon from './plus-icon.png';

const ConsultantCard = ({ consultant, onAddToTeam }) => {
  const[formData, setFormData] = useState(consultant);

  const handleButtonClick = (e) => {
    e.stopPropagation();
    onAddToTeam();
  };
 const handleDownloadPDF = (e) => {
    const doc = new jsPDF();

    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text(`${formData.name} ${formData.surname}'s CV`, 105, 20, { align: "center" });
    doc.setLineWidth(0.5);
    doc.line(10, 25, 200, 25);

    doc.setTextColor(219, 1, 86);
    doc.setFontSize(16);
    doc.text("Personal Information", 10, 40);

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(12);
    doc.text(`Name: ${formData.name} ${formData.surname}`, 10, 50);
    doc.text(`Education: ${formData.education}`, 10, 60);
    doc.text(`Study Program: ${formData.studyProgram}`, 10, 70);
    doc.text(`Graduating Year: ${formData.graduatingYear}`, 10, 80);
    doc.text(`Certificates: ${formData.certificates}`, 10, 90);
    doc.text(`Projects: ${formData.projects}`, 10, 100);
    doc.text(`Technology Experience: ${formData.technologies}`, 10, 110);
    doc.text(`Work Experience: ${formData.workExperience}`, 10, 120);

    doc.setFontSize(10);
    doc.text("Generated with jsPDF", 105, 290, { align: "center" });

    doc.save(`${formData.name}_${formData.surname}_CV.pdf`);

    e.stopPropagation();
  };

  return (
    <div className="consultant-card">
      <img className="pp" src={consultant.pp} alt="" />
      <div>
        <h3 className="name">{consultant.name} {consultant.surname}</h3>
        <div>
          <p className="position">{consultant.position}</p> 
          <p className="experience">{consultant.experienceyears}</p>
        </div>
        <a
          className="download-CV"
          onClick={handleDownloadPDF}
          title="Download CV in pdf"
        >
          <img src={downLoadIcon} alt="Download" title="Download CV in pdf" onClick={handleDownloadPDF}/> Download CV
        </a>
      </div>
      <button
        className="add-to-team"
        onClick={handleButtonClick}
        title="Add to team"
      >
        <img src={plusIcon} alt="Add to team" title="Add to team" />
      </button>
    </div>
  );
};

export default ConsultantCard;