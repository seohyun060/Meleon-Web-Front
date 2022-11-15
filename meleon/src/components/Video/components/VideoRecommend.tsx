import React from 'react';
import { images } from 'src/assets/images';

const VideoRecommend = () => {
  return (
    <section className='recommend-section'>
      <a className='title'>
        <span className='span'>{'멜레온 추천 영상'}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <ul className='cards-container'>
        {new Array(8).fill(0).map((item, idx) => {
          return (
            <li className='card' key={idx}>
              <span className='tag'>{'#자연 #광활한 대지'}</span>
              <span className='description'>
                {'아름다운 자연 전경의\n생동감 넘치는 비디오 모음'}
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

export default VideoRecommend;
