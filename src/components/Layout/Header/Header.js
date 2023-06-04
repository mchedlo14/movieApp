import React, { useEffect } from 'react';
import './Header.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../assets/icons/film-reel.svg';
import SwitchIcon from '../../../assets/images/switch.png';
import GoogleIcon from '../../../assets/images/google.png';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, provider } from '../../../firebase';
import useAuthStore from './authStore';

const Header = () => {
  const isAuth = useAuthStore((state) => state.isAuth);
  const setIsAuth = useAuthStore((state) => state.setIsAuth);

  useEffect(() => {
    setIsAuth(localStorage.getItem('isAuth') === 'true');
  }, [setIsAuth]);

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem('isAuth', true);
      setIsAuth(true);
    });
  };

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.removeItem('isAuth');
      setIsAuth(false);
      navigate('/')
    });
  };

  const navigate = useNavigate();

  return (
    <header>
      <div className='title-container'>
        <img src={logo} alt='logo' onClick={() => navigate('/')} />
      </div>

      <nav>
        <ul>
          <li onClick={() => navigate('/')}>Home</li>
          <li onClick={() => navigate('/upcoming')}>Up Coming</li>
          <li onClick={() => navigate('/trending')}>Trending</li>
          <li onClick={() => navigate('/popular')}>Popular</li>
        </ul>
      </nav>

      <div>
        {!isAuth ? (
          <img
            src={GoogleIcon}
            className='auth-img'
            onClick={signInWithGoogle}
            alt='Google'
          />
        ) : (
          <div className='switch--wrapper'>
            <p className='account-text' onClick={() => navigate('/account')}>
              My Account
            </p>
            <img
              src={SwitchIcon}
              className='auth-img'
              onClick={signUserOut}
              alt='Google'
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
