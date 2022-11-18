import { RecommendCardTypes } from '@typedef/components/Video/video.recommend.types';
import React from 'react';
import { images } from 'src/assets/images';

type Props = {
  path: string;
  list: RecommendCardTypes[];
  onItemClicked: (item: string) => void;
};

const VideoRecommendSection = ({ path, list, onItemClicked }: Props) => {
  return (
    <section className='recommend-section'>
      <a className='title'>
        <span className='span'>{`멜레온 추천 영상${
          path === 'template' ? '템플릿' : ''
        }`}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <ul className='cards-container'>
        {list.map((item, idx) => {
          return (
            <li
              className='card'
              key={idx}
              onClick={() => onItemClicked(item.title)}>
              <span className='tag'>{item.tag}</span>
              <span className='description'>{item.title}</span>
              <div className='count'>{`Video 10`}</div>
              <img className='hover' src={images.play_hover} alt='play-image' />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default VideoRecommendSection;
