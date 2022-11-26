import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { images } from 'src/assets/images';

const MusicRecommend = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);

  const onItemClicked = useCallback(
    (item: string) => {
      navigate(
        `/${path}/recommend?q=${'괜찮아, 잘될거야\n위로와 음원의 음원'}`,
      );
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
        {new Array(8).fill(0).map((item, idx) => {
          return (
            <li
              className='card'
              key={idx}
              onClick={() => onItemClicked(item.title)}>
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
