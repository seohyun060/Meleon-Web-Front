import SearchBarContainer from '@components/common/SearchBar/containers/SearchBarContainer';
import React from 'react';
import { images } from 'src/assets/images';
import VideoRecommendContainer from './containers/VideoRecommendContainer';
import VideoSearchContainer from './containers/VideoSearchContainer';
import './styles/video.styles.css';

type Props = {};

const Video = ({}: Props) => {
  return (
    <div className='video-root'>
      <VideoSearchContainer />
      <main className='main-section'>
        <VideoRecommendContainer />
        <section className='new-section'>
          <a href=''>
            <span>{'신규 영상'}</span>
            <img src={images.right_arrow_18_black} alt='right-arrow-button' />
          </a>
          <div>
            <div></div>
          </div>
        </section>
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default Video;
