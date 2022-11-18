import React from 'react';
import { images } from 'src/assets/images';

type Props = {
  item: string;
  onClosePlayerClicked: () => void;
  downTriggerRef: React.RefObject<HTMLDivElement>;
  downNodeRef: React.RefObject<HTMLDivElement>;
  isDownShown: boolean;
  onDownloadBtnClicked: () => void;
};

const IllustratorPlayer = ({
  item,
  onClosePlayerClicked,
  downTriggerRef,
  downNodeRef,
  isDownShown,
  onDownloadBtnClicked,
}: Props) => {
  return (
    <div className={`player-container`}>
      <img src={item} className='player' />
      <div className='description'>
        <div className='title-container'>
          <span className='title'>{'독특한 패턴'}</span>
          <span className='artist'>{'아티스트명'}</span>
        </div>
        <div className='detail-container'>
          <div className='item'>
            <div className='label'>{'파일 유형'}</div>
            <div className='value'>{'jpg, png, psd, ai '}</div>
          </div>
          <div className='item'>
            <div className='label'>{'파일 크기'}</div>
            <div className='value'>{'642.12 MB'}</div>
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
              <div className='item'>{'#건물'}</div>
              <div className='item'>{'#건축물'}</div>
              <div className='item'>{'#건축패턴'}</div>
              <div className='item'>{'#조형물'}</div>
            </div>
          </div>
          <div className='option-container'>
            <div className='btn' ref={downTriggerRef}>
              <img src={images.download_gray} alt='download-button' />
            </div>
            <div className='btn'>
              <img src={images.heart_gray} alt='like-button' />
            </div>
            <div className='btn'>
              <img src={images.cart_gray} alt='add-cart-button' />
            </div>
            {isDownShown && (
              <div ref={downNodeRef} className='download-dropdown'>
                <div onClick={onDownloadBtnClicked} className='down-btn'>
                  {'다운로드'}
                </div>
                <a
                  target={'_blank'}
                  href={item}
                  download={item}
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

export default IllustratorPlayer;
