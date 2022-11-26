import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Splash from '../Splash';

const SplashContainer = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const value = JSON.parse(
      sessionStorage.getItem('@issplashskip') || 'false',
    );
    let timeout: NodeJS.Timeout;

    if (value) {
      navigate('/main');
    } else {
      timeout = setTimeout(() => navigate('/main'), 3000);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <Splash />;
};

export default SplashContainer;
