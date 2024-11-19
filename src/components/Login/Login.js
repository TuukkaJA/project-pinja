import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import toggleIcon from '../../toggle-icon_pink.png';
import '../../App.css'
import './Login.css'

const Login = (props) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [isSidebarOpen, setSidebarOpen] = useState(true);
    const [activeItem, setActiveItem] = useState('Login');
    const navigate = useNavigate();
  
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
      props.onLogin(enteredEmail, enteredPassword);
      navigate('/consultants');
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
                <button type="submit" onClick={props.onClick} disabled={!formIsValid}>Login</button>
            </div>
          </form>
        </div>
      </div>
      );
    };
    
    export default Login;