import React from 'react';
import { images } from 'src/assets/images';
import { VideoDetailType } from '../containers/VideoPlayerContainer';

type Props = {
  videoItem: VideoDetailType;
  onClosePlayerClicked: () => void;
  downTriggerRef: React.RefObject<HTMLDivElement>;
  downNodeRef: React.RefObject<HTMLDivElement>;
  isDownShown: boolean;
  isLiked: boolean;
  onLikeClicked: () => void;
  onDownloadBtnClicked: () => void;
};

const VideoPlayer = ({
  videoItem,
  onClosePlayerClicked,
  downTriggerRef,
  downNodeRef,
  isDownShown,
  isLiked,
  onLikeClicked,
  onDownloadBtnClicked,
}: Props) => {
  return (
    <div className={`player-container`}>
      <video
        src={videoItem.video}
        controls
        autoPlay
        controlsList='nodownload'
        className='player'></video>
      <div className='description'>
        <div className='title-container'>
          <span className='title'>{videoItem.title}</span>
          <span className='artist'>{videoItem.artist}</span>
        </div>
        <div className='detail-container'>
          <div className='item'>
            <div className='label'>{'프레임 레이트'}</div>
            <div className='value'>{videoItem.frame_rate}</div>
          </div>
          <div className='item'>
            <div className='label'>{'코덱'}</div>
            <div className='value'>{videoItem.codec}</div>
          </div>
          <div className='item'>
            <div className='label'>{'비트 레이트'}</div>
            <div className='value'>{videoItem.bit_rate}</div>
          </div>
          <div className='item'>
            <div className='label'>{'영상 재생시간'}</div>
            <div className='value'>{videoItem.playtime}</div>
          </div>
          <div className='item'>
            <div className='label'>{'포맷'}</div>
            <div className='value'>{videoItem.playtime}</div>
          </div>
          <div className='item'>
            <div className='label'>{'파일 크기'}</div>
            <div className='value'>{videoItem.size + 'MB'}</div>
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
              {videoItem.category.map((value, index) => (
                <div className='item' key={index}>
                  {value}
                </div>
              ))}
            </div>
          </div>
          <div className='option-container'>
            <div className='btn' ref={downTriggerRef}>
              <img src={images.download_gray} alt='download-button' />
            </div>
            <div className='btn' onClick={onLikeClicked}>
              <img
                src={isLiked ? images.heart_black : images.heart_gray}
                alt='like-button'
              />
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
                  href={videoItem.video}
                  download={videoItem.video}
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
