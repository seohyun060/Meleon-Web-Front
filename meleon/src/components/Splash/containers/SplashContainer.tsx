import React, { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Splash from '../Splash';

const SplashContainer = () => {
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const value = JSON.parse(
      sessionStorage.getItem('@issplashskip') || 'false',
    );

    if (value) {
      navigate('/main');
    } else {
      setTimeout(() => navigate('/main'), 3000);
    }

    return () => {};
  }, []);
  return <Splash />;
};

export default SplashContainer;
