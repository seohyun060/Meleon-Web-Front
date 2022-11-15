import React from 'react';
import { images } from 'src/assets/images';

const VideoNew = () => {
  return (
    <section className='new-section'>
      <a className='title' href=''>
        <span className='span'>{'신규 영상'}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <div>
        <div></div>
      </div>
    </section>
  );
};

export default VideoNew;
