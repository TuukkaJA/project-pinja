import React, { useState } from 'react';

function Cv() {
    return (
      <div>
          <h2>User's CV</h2>
        <iframe src='/cv-files/Malli_cv.pdf' title="Consultant CV" className="cv-frame" />
      </div>
    );
}

export default Cv;