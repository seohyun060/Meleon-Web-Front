import React, { useCallback, useEffect, useState } from 'react';
import { images } from 'src/assets/images';
import '../styles/musicplay.styles.css';
import moment from 'moment';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
  src: HTMLAudioElement;
};
type Props = {
  music: MusicInfo;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  play: string;
  nowTime: string;
  playTime: string;
  progress: number;
  popUp: string;
  onDownloadBtnClicked: () => void;
};

const MusicPlay = ({
  music,
  toggle,
  setToggle,
  play,
  nowTime,
  playTime,
  progress,
  popUp,
  onDownloadBtnClicked,
}: Props) => {
  const [downloadToggle, setDownloadToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);

  return (
    <div className='musicplay'>
      {toggle ? (
        <img
          className='musicplay-button'
          src={images.play}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      ) : (
        <img
          className='musicplay-button'
          src={images.unplay}
          onClick={() => {
            setToggle((prev) => !prev);
          }}
        />
      )}
      <img src={music.image} className='musicplay-image' />
      <span className='musicplay-title'>{music.title}</span>
      <span className='musicplay-artist'>{music.artist}</span>
      <div className='musicplay-tag'>
        <span>#따뜻한 #위로 #긍정 #따뜻한 #위로 #긍정 #잘리는 #부분 #유후</span>
      </div>

      <div className={`progress-container${play}`}>
        <progress id='progress' value={`${progress}`} max='100'></progress>
        <div
          className='point'
          style={{
            position: 'absolute',
            left: `calc(${progress}% - 8px`,
          }}></div>
      </div>
      <div className='musicplay-time'>
        <span className='now-time'>{nowTime}</span>
        <span className='play-time'>/ {playTime}</span>
      </div>
      <div className='musicplay-icon'>
        <>
          <button>
            <img
              src={
                downloadToggle ? images.download_black : images.download_gray
              }
              onClick={() => {
                setDownloadToggle((prev) => !prev);
              }}
            />
          </button>
          {downloadToggle && (
            <div className='download-popup'>
              <div className='popup-box' onClick={onDownloadBtnClicked}>
                <span>다운로드</span>
              </div>
              <div className='popup-box'>
                <a
                  target={'_blank'}
                  href={'/assets/audio/music1.mp3'}
                  download={'/assets/audio/music1.mp3'}
                  className='down-btn'>
                  {music.buy ? '샘플 다운로드' : '구매하기'}
                </a>
              </div>
            </div>
          )}
        </>
        <button
          onClick={() => {
            setLikeToggle((prev) => !prev);
          }}>
          <img src={likeToggle ? images.heart_black : images.heart_gray} />
        </button>
        <button
          onClick={() => {
            setCartToggle((prev) => !prev);
          }}>
          <img
            className='cart'
            src={cartToggle ? images.cart_black_22 : images.cart_gray}
          />
        </button>
      </div>
    </div>
  );
};

export default MusicPlay;
