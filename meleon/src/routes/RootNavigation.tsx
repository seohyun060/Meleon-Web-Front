import FooterContainer from '@components/common/Footer/containers/FooterContainer';
import GNBContainer from '@components/common/GNB/containers/GNBContainer';
import HomeContainer from '@components/Home/containers/HomeContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import MusicContainer from '@components/Music/containers/MusicContainer';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const RootNavigation = () => {
  return (
    <BrowserRouter>
      <GNBContainer />
      <Routes>
        <Route path='/' element={<SplashContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/music' element={<MusicContainer />} />
      </Routes>
      <FooterContainer />
    </BrowserRouter>
  );
};

export default RootNavigation;
