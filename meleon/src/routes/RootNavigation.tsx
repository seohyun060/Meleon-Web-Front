import FooterContainer from '@components/common/Footer/containers/FooterContainer';
import GNBContainer from '@components/common/GNB/containers/GNBContainer';
import HomeContainer from '@components/Home/containers/HomeContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import MusicContainer from '@components/Music/containers/MusicContainer';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import VideoContainer from '@components/Video/containers/VideoContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, useLocation } from 'react-router-dom';
const RootNavigation = () => {
  const location = useLocation();

  return (
    <>
      <GNBContainer location={location.pathname} />
      <Routes>
        <Route path='/' element={<SplashContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/music' element={<MusicContainer />} />
        <Route path='/video' element={<VideoContainer />} />
      </Routes>
      <FooterContainer location={location.pathname} />
    </>
  );
};

export default RootNavigation;
