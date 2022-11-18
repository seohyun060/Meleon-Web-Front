import { RecommendCardTypes } from '@typedef/components/Video/video.recommend.types';
import React from 'react';
import { images } from 'src/assets/images';

type Props = {
  path: string;
  list: RecommendCardTypes[];
  onItemClicked: (item: string) => void;
};

const IllustratorRecommendSection = ({ path, list, onItemClicked }: Props) => {
  return (
    <section className='recommend-section'>
      <a className='title'>
        <span className='span'>{`멜레온 추천 ${
          path === 'picture' ? '사진' : path === '3d' ? '3D 이미지' : '일러스트'
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
              <div className='count'>{`Image 10`}</div>
              <img className='hover' src={images.play_hover} alt='play-image' />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default IllustratorRecommendSection;
