import React from 'react';
import { images } from 'src/assets/images';
import '../styles/video.buy.popup.styles.css';

const VideoBuyPopup = () => {
  return (
    <div className='video-buy-popup-root'>
      <div className='header-container'>
        <span className='title'>{'구매하기'}</span>
        <button className='close-btn'>
          <img src={images.close} alt='close-btn' />
        </button>
      </div>
      <div className='main-container'>
        <div className='options-container'>
          <button className='option-btn active'>{'HD 1280 * 720'}</button>
          <button className='option-btn '>{'FHD 1920 * 1080'}</button>
          <button className='option-btn disabled'>{'FHD 1920 * 1080'}</button>
        </div>
        <div className='info-container'>
          <div className='item'>
            <div className='label'>{'파일명: '}</div>
            <div className='value'>{'노을지는 바다'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'결제 코인: '}</div>
            <div className='value'>{'1,000 Coin'}</div>
          </div>
        </div>
        <div className='coin-container'>
          <div className='item'>
            <div className='label'>{'내 보유 코인: '}</div>
            <div className='value'>{'2,000 Coin'}</div>
          </div>
        </div>
        <button className='download-btn'>{'다운로드'}</button>
      </div>
    </div>
  );
};

export default VideoBuyPopup;
