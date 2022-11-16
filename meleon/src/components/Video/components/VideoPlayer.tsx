import React from 'react';
import { images } from 'src/assets/images';

type Props = {
  onClosePlayerClicked: () => void;
  downTriggerRef: React.RefObject<HTMLDivElement>;
  downNodeRef: React.RefObject<HTMLDivElement>;
  isDownShown: boolean;
};

const VideoPlayer = ({
  onClosePlayerClicked,
  downTriggerRef,
  downNodeRef,
  isDownShown,
}: Props) => {
  return (
    <div className={`player-container`}>
      <video
        src={images.video.video1}
        controls
        autoPlay
        controlsList='nodownload'
        className='player'></video>
      <div className='description'>
        <div className='title-container'>
          <span className='title'>{'노을지는 바다'}</span>
          <span className='artist'>{'아티스트명'}</span>
        </div>
        <div className='detail-container'>
          <div className='item'>
            <div className='label'>{'프레임 레이트'}</div>
            <div className='value'>{'25.98'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'코덱'}</div>
            <div className='value'>{'ProRes 422 HQ'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'비트 레이트'}</div>
            <div className='value'>{'676 Mbps'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'영상 재생시간'}</div>
            <div className='value'>{'00:00:98'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'포맷'}</div>
            <div className='value'>{'MOV'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'파일 크기'}</div>
            <div className='value'>{'642.12MB'}</div>
          </div>
        </div>
        <div className='resolution-container'>
          <div className='title'>{'해상도'}</div>
          <div className='item'>
            <div className='label'>{'HD 1280 * 720'}</div>
            <div className='value'>{'50 coin'}</div>
          </div>
          <div className='item'>
            <div className='label'>{'FHD 1920 * 1080'}</div>
            <div className='value'>{'100 coin'}</div>
          </div>
        </div>
        <div className='bottom-container'>
          <div className='tag-container'>
            <div className='title'>{'관련 카테고리'}</div>
            <div className='item-list'>
              <div className='item'>{'#자연'}</div>
              <div className='item'>{'#바다'}</div>
              <div className='item'>{'#노을바다'}</div>
              <div className='item'>{'#파도'}</div>
            </div>
          </div>
          <div className='option-container'>
            <div ref={downTriggerRef}>
              <img src={images.download_gray} alt='download-button' />
            </div>
            <button>
              <img src={images.heart_gray} alt='like-button' />
            </button>
            <button>
              <img src={images.cart_gray} alt='add-cart-button' />
            </button>
            {isDownShown && (
              <div ref={downNodeRef} className='download-dropdown'>
                <div className='down-btn'>{'다운로드'}</div>
                <a
                  target={'_blank'}
                  href={images.video.video1}
                  download={images.video.video1}
                  className='down-btn'>
                  {'샘플 다운로드'}
                </a>
              </div>
            )}
          </div>
        </div>
        <button className='close-btn' onClick={onClosePlayerClicked}>
          <img src={images.close} alt='close-button' />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
