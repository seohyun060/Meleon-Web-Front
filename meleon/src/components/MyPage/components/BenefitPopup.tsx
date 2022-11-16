import React from 'react';
import { images } from 'src/assets/images';
import '../styles/benefit.popup.style.css';

type Props = { onPopupClosed: () => void };

const BenefitPopup = ({ onPopupClosed }: Props) => {
  return (
    <div className='benefit-popup-root'>
      <div className='header'>
        <h2 className='title'>등급기준 및 혜택 안내</h2>
        <button className='close-button' onClick={onPopupClosed}>
          <img src={images.close} alt='ic_close' />
        </button>
      </div>
      <div className='content'>
        <div className='explanation'>
          <div className='item'>
            <div className='title'>
              <div className='circle' />
              등급 1
            </div>
            <div className='row'>
              <span className='label'>기준:</span>
              <span className='text'>다운로드 10회 / 130 Coin</span>
            </div>
            <div className='row'>
              <span className='label'>혜택:</span>
              <span className='text'>매달 보너스코인 10개 지급</span>
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <div className='circle' />
              등급 2
            </div>
            <div className='row'>
              <span className='label'>기준:</span>
              <span className='text'>다운로드 30회 / 400 Coin</span>
            </div>
            <div className='row'>
              <span className='label'>혜택:</span>
              <span className='text'>매달 보너스코인 30개 지급</span>
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <div className='circle' />
              등급 3
            </div>
            <div className='row'>
              <span className='label'>기준:</span>
              <span className='text'>다운로드 70회 / 950 Coin</span>
            </div>
            <div className='row'>
              <span className='label'>혜택:</span>
              <span className='text'>매달 보너스코인 50개 지급</span>
            </div>
          </div>
          <div className='item'>
            <div className='title'>
              <div className='circle' />
              등급 4
            </div>
            <div className='row'>
              <span className='label'>기준:</span>
              <span className='text'>다운로드 120회 / 1500 Coin</span>
            </div>
            <div className='row'>
              <span className='label'>혜택:</span>
              <span className='text'>매달 보너스코인 70개 지급</span>
            </div>
          </div>
        </div>
        <button className='download' onClick={onPopupClosed}>
          닫기
        </button>
      </div>
    </div>
  );
};

export default BenefitPopup;
