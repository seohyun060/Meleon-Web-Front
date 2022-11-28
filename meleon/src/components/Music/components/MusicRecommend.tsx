import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { images } from 'src/assets/images';

type MusicRecommendType = {
  tag: string;
  content: string;
};

const musicRecommendList: MusicRecommendType[] = [
  {
    tag: '#신나는',
    content: '주말에 신나는 음원 모음',
  },
  {
    tag: '#분위기 있는',
    content: '파티분위기의 음원 모음',
  },
  {
    tag: '#VLOG',
    content: 'Vlog 영상에 쓰기 좋은 음원 모음',
  },
  {
    tag: '#분위기 있는',
    content: '감성적인 무드의 음원 모음',
  },
  {
    tag: '#파티',
    content: '파티분위기의 음원 모음',
  },
  {
    tag: '#웨딩',
    content: '결혼식 음원 모음',
  },
  {
    tag: '#자연',
    content: '숲속 한가운데 음원 모음',
  },
];

const MusicRecommend = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);

  const onItemClicked = useCallback(
    (item: string) => {
      navigate(`/${path}/recommend?q=${item}`);
    },
    [path],
  );

  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <section className='recommend-section'>
      <a className='title'>
        <span className='span'>{'멜레온 추천 음원'}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <ul className='cards-container'>
        {musicRecommendList.map((item, idx) => {
          return (
            <li
              className='card'
              key={idx}
              onClick={() => onItemClicked(item.content)}>
              <span className='tag'>{item.tag}</span>
              <span className='description'>{item.content}</span>
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
