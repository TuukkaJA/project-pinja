import React, { useState } from 'react';
import CVModal from '../../components/CVModal/CVModal';

function Cv() {
    return (
      <div>
          <h2>{localStorage.getItem('loggedInUser')}</h2>
        <iframe src='/cv-files/Malli_cv.pdf' title="Consultant CV" className="cv-frame" />
      </div>
    );
}

export default Cv;