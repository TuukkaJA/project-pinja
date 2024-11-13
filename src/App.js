import React, { useState } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Consultants from './pages/Consultants';
import Profile from './pages/Profile';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [consultants, setConsultants] = useState([
    { id: 1, name: 'John', surname: 'Doe', position: 'Senior Consultant', experienceyears: 'Experience: 19y', cvLink: '/path-to-john-cv.pdf' },
  ]);
  
  return (
   
      <BrowserRouter>
        <Routes>
          <Route index element={<Consultants />} />
          <Route path="/consultants" element={<Consultants />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;