import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import toggleIcon from '../../toggle-icon_pink.png';
import '../../App.css'
import './Login.css'

const Login = ({onLogin}) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Login');
    const navigate = useNavigate();

    useEffect(() => {
      const storedUser = localStorage.getItem('loggedInUser');
      if (storedUser) {
        setIsLoggedIn(true);
      }
    }, []);
  
    const toggleSidebar = () => 
      setSidebarOpen((prevState) => !prevState);
  
    const emailChangeHandler = (event) => {
      setEnteredEmail(event.target.value);
  
      setFormIsValid(
        event.target.value.includes('@') && enteredPassword.trim().length > 6
      );
    };
  
    const passwordChangeHandler = (event) => {
      setEnteredPassword(event.target.value);
  
      setFormIsValid(
        event.target.value.trim().length > 6 && enteredEmail.includes('@')
      );
    };
  
    const validateEmailHandler = () => {
      setEmailIsValid(enteredEmail.includes('@'));
    };
  
    const validatePasswordHandler = () => {
      setPasswordIsValid(enteredPassword.trim().length > 6);
    };
  
    const submitHandler = (event) => {
      event.preventDefault();
      localStorage.setItem('loggedInUser', enteredEmail);
      setIsLoggedIn(true);
      onLogin(enteredEmail, enteredPassword);
      navigate('/login');
    };

    return (
      <div>
        <button className="toggle-sidebar" onClick={toggleSidebar}>
          <img src={toggleIcon} alt="Toggle Icon" />
        </button>
        <div className="login">
            {isSidebarOpen && (
            <Sidebar 
            isOpen={isSidebarOpen} 
            toggleSidebar={toggleSidebar} 
            activeItem={activeItem}
            setActiveItem={setActiveItem}
            loggedInUser={enteredEmail}
            />)}
          {isLoggedIn ? (
          <div className="welcome-message">
            <h2>Welcome Back!</h2>
            <p>You are logged in as <strong>{localStorage.getItem('loggedInUser')}</strong>.</p>
          </div>
        ) : (   
          <form onSubmit={submitHandler}>
            <div
              className={`control ${
        emailIsValid === false ? 'invalid' : ''
              }`}
            >
              <label htmlFor="email">E-Mail</label>
              <input
                type="email"
                id="email"
                value={enteredEmail}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
              />
            </div>
            <div
        className={`control ${
                passwordIsValid === false ? 'invalid' : ''
              }`}
            >
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={enteredPassword}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
              />
            </div>
            <div className='actions'>
                <button type="submit"  disabled={!formIsValid}>Login</button>
            </div>
          </form>
        )}
        </div>
      </div>
      );
    };
    
    export default Login;