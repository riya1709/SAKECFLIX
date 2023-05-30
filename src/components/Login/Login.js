import React, { useEffect } from 'react';
import './Login.styles.scss';
import { NavigationType, useNavigate } from 'react-router-dom';
import { useDispatch, } from 'react-redux';
import { logUserIn, updateLocalStorageUser } from '../../redux/User/UserReducer';
import { signInWithGoogle } from './Firebase';


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // On page load push user to home page if they were loggedIn previously
  useEffect(() => {
    const currentLocalStorageUser = JSON.parse(localStorage.getItem('currentDisneyCloneUser'));

    if (currentLocalStorageUser === null || currentLocalStorageUser === undefined) {
      return;
    }

    if (currentLocalStorageUser.loggedIn === true) {
     navigate('/home');
    }
  }, []);

  return (
    <div className='login-page-container'>
      <div className='login-content-cta'>
        <img src='images/logo.svg' className='login-logo-1 login-logo' /> 
        <div className='sign-up'>
          <button onClick={signInWithGoogle}>Join Now to get Latest Updates!!!</button>
          <button className='guest-login-button' onClick={() => {dispatch(logUserIn()); dispatch(updateLocalStorageUser()); return navigate('/home')}}>login as guest</button>
          <p className='sign-up-description'>
            Stream trailers of any movies or shows at one place!
          </p>
        </div>
       
      </div>
    </div>
  )
}

export default Login;