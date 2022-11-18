import React from 'react';
import { images } from 'src/assets/images';
import MusicNewContainer from './containers/MusicNewContainer';
import MusicRecommendContainer from './containers/MusicRecommendContainer';
import MusicSearchContainer from './containers/MusicSearchContainer';
import './styles/music.styles.css';

const Music = () => {
  return (
    <div className='music-root page-root'>
      <MusicSearchContainer />
      <main className='main-section'>
        <MusicRecommendContainer />
        <MusicNewContainer />
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default Music;
