import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usersApi } from '../../../api/usersApi';
import Navbar from '../../Navbar/Navbar';
import "./StaffLogin.css";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { login } from '../../../redux/userSlice';

const StaffLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector((state) => state.user);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError('');
    setPasswordError('');

    // validate email and password input
    let isValid = true;
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } 

    if (isValid) {
      try {
        const response = await usersApi.login(email, password);
        dispatch(login(response));
        // navigate("/staff/dashboard");
      } catch (error) {
        if (error && error.status === 401) {
          setPasswordError('Incorrect email or password');
        } else {
          setPasswordError('An error occurred');
        }
      }
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError('');
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError('');
  };

  return (
    <div className='page'>
      <Navbar/>
      <div className='page-content'>

        {userState.user ?
          <>
            <h1>Logged in as: </h1>
            <p>Name: {userState.user.name}</p>
            <p>Email: {userState.user.email}</p>
          </> :
          <>
            <h1>Staff Login</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                {emailError && <span className="error">{emailError}</span>}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                />
                {passwordError && <span className="error">{passwordError}</span>}
              </div>
              <button type="submit">Login</button>
            </form>
          </>
        }
      </div>
    </div>

  );
};

export default StaffLogin;
