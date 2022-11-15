import SearchBarContainer from '@components/common/SearchBar/containers/SearchBarContainer';
import React from 'react';
import { images } from 'src/assets/images';
import VideoNewContainer from './containers/VideoNewContainer';
import VideoRecommendContainer from './containers/VideoRecommendContainer';
import VideoSearchContainer from './containers/VideoSearchContainer';
import './styles/video.styles.css';

type Props = {};

const Video = ({}: Props) => {
  return (
    <div className='video-root page-root'>
      <VideoSearchContainer />
      <main className='main-section'>
        <VideoRecommendContainer />
        <VideoNewContainer />
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default Video;
