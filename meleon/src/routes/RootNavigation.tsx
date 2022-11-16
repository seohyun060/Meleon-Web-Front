import FooterContainer from '@components/common/Footer/containers/FooterContainer';
import GNBContainer from '@components/common/GNB/containers/GNBContainer';
import HomeContainer from '@components/Home/containers/HomeContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import MusicContainer from '@components/Music/containers/MusicContainer';
import MypageContainer from '@components/MyPage/containers/MypageContainer';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import VideoContainer from '@components/Video/containers/VideoContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

type Props = {
  popup: JSX.Element | null;
  translateY: number;
  onBackdropClicked: () => void;
};

const RootNavigation = ({ popup, translateY, onBackdropClicked }: Props) => {
  return (
    <BrowserRouter>
      <GNBContainer />
      <Routes>
        <Route path='/' element={<SplashContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/music' element={<MusicContainer />} />
        <Route path='/video' element={<VideoContainer />} />
        <Route path='/mypage' element={<MypageContainer />} />
      </Routes>
      <FooterContainer />
      {popup && (
        <div className='popup-container'>
          <div className='backdrop' onClick={onBackdropClicked}></div>
          <div
            className='popup'
            style={{ transform: `translateY(${translateY}vh)` }}>
            {popup}
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default RootNavigation;
