import FooterContainer from '@components/common/Footer/containers/FooterContainer';
import GNBContainer from '@components/common/GNB/containers/GNBContainer';
import HomeContainer from '@components/Home/containers/HomeContainer';
import IllustratorContainer from '@components/Illustrator/containers/IllustratorContainer';
import IllustratorSearchPageContainer from '@components/Illustrator/containers/IllustratorSearchPageContainer';
import LoginContainer from '@components/Login/containers/LoginContainer';
import MusicContainer from '@components/Music/containers/MusicContainer';
import MypageContainer from '@components/MyPage/containers/MypageContainer';
import SplashContainer from '@components/Splash/containers/SplashContainer';
import VideoContainer from '@components/Video/containers/VideoContainer';
import MainContainer from '@components/main/containers/MainContainer';
import VideoRecommendPageContainer from '@components/Video/containers/VideoRecommendPageContainer';
import VideoSearchPageContainer from '@components/Video/containers/VideoSearchPageContainer';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter, useLocation } from 'react-router-dom';
import MusicSearchPageContainer from '@components/Music/containers/MusicSearchPageContainer';
import MusicRecommendPageContainer from '@components/Music/containers/MusicRecommendPageContainer';

type Props = {
  popup: JSX.Element | null;
  translateY: number;
  onBackdropClicked: () => void;
};
const RootNavigation = ({ popup, translateY, onBackdropClicked }: Props) => {
  const location = useLocation();

  return (
    <>
      <GNBContainer location={location.pathname} />
      <Routes>
        <Route path='/' element={<SplashContainer />} />
        <Route path='/main' element={<MainContainer />} />
        <Route path='/login' element={<LoginContainer />} />
        <Route path='/music'>
          <Route path='' element={<MusicContainer />} />
          <Route path='search' element={<MusicSearchPageContainer />} />
          <Route path='recommend' element={<MusicRecommendPageContainer />} />
        </Route>
        <Route path='/mypage' element={<MypageContainer />} />
        <Route path='/video'>
          <Route path='' element={<VideoContainer />} />
          <Route path='search' element={<VideoSearchPageContainer />} />
          <Route path='recommend' element={<VideoRecommendPageContainer />} />
        </Route>
        <Route path='/template'>
          <Route path='' element={<VideoContainer />} />
          <Route path='search' element={<VideoSearchPageContainer />} />
          <Route path='recommend' element={<VideoRecommendPageContainer />} />
        </Route>
        <Route path='/picture'>
          <Route path='' element={<IllustratorContainer />} />
          <Route path='search' element={<IllustratorSearchPageContainer />} />
          <Route
            path='recommend'
            element={<IllustratorSearchPageContainer />}
          />
        </Route>
        <Route path='/illustrator'>
          <Route path='' element={<IllustratorContainer />} />
          <Route path='search' element={<IllustratorSearchPageContainer />} />
          <Route
            path='recommend'
            element={<IllustratorSearchPageContainer />}
          />
        </Route>
        <Route path='/3d'>
          <Route path='' element={<IllustratorContainer />} />
          <Route path='search' element={<IllustratorSearchPageContainer />} />
          <Route
            path='recommend'
            element={<IllustratorSearchPageContainer />}
          />
        </Route>
      </Routes>
      <FooterContainer location={location.pathname} />
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
    </>
  );
};

export default RootNavigation;
