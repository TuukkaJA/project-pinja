import React, { useState, useEffect } from 'react';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Consultants from './pages/Consultants';
import Profile from './pages/Profile';
import Login from './components/Login/Login';

function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const[loggedInUser, setLoggedInUser] = useState('');

  useEffect(() => {
    const logInfo = localStorage.getItem('isLoggedIn');
    if (logInfo === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
    setLoggedInUser(email);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login onLogin={loginHandler}/>} />
          <Route index element={<Consultants isLoggedIn={isLoggedIn} />} />
          <Route path="/consultants" element={<Consultants isLoggedIn={isLoggedIn}/>} />
          <Route path="/profile" element={<Profile isLoggedIn={isLoggedIn}/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;