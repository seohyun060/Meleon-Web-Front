import React from 'react';
import { images } from 'src/assets/images';

const MusicRecommend = () => {
  return (
    <section className='recommend-section'>
      <a className='title'>
        <span className='span'>{'멜레온 추천 음원'}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <ul className='cards-container'>
        {new Array(8).fill(0).map((item, idx) => {
          return (
            <li className='card' key={idx}>
              <span className='tag'>{'#응원 #Cheer up'}</span>
              <span className='description'>
                {'괜찮아, 잘될거야\n위로와 음원의 음원'}
              </span>
              <div className='count'>{`Video 10`}</div>
              <img className='hover' src={images.play_hover} alt='play-image' />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MusicRecommend;
