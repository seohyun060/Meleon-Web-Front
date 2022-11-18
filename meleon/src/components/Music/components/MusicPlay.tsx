import React, { useEffect, useState } from 'react';
import { images } from 'src/assets/images';
import '../styles/musicplay.styles.scss';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
};
type Props = {
  music: MusicInfo;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  play: string;
  value: number;
};

const MusicPlay = ({ music, toggle, setToggle, play, value }: Props) => {
  const [downloadToggle, setDownloadToggle] = useState(false);
  const [likeToggle, setLikeToggle] = useState(false);
  const [cartToggle, setCartToggle] = useState(false);
  const [popUp, setPopUp] = useState('');
  useEffect(() => {
    if (music.buy) {
      setPopUp('샘플 다운로드');
    } else {
      setPopUp('구매하기');
    }
  }, [music]);

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
        <progress id='progress' value={`${value}`} max='100'></progress>
        <div
          className='point'
          style={{ position: 'absolute', left: `${value}%` }}></div>
      </div>
      <div className='musicplay-time'>
        <span className='now-time'>01:32</span>
        <span className='play-time'>/ 03:53</span>
      </div>
      <div className='musicplay-icon'>
        {downloadToggle ? (
          <>
            <img
              src={images.download_black}
              onClick={() => {
                setDownloadToggle((prev) => !prev);
              }}
            />
            <div className='download-popup'>
              <div className='popup-box'>
                <span>다운로드</span>
              </div>
              <div className='popup-box'>
                <span>{popUp}</span>
              </div>
            </div>
          </>
        ) : (
          <img
            src={images.download_gray}
            onClick={() => {
              setDownloadToggle((prev) => !prev);
            }}
          />
        )}
        {likeToggle ? (
          <img
            src={images.heart_black}
            onClick={() => {
              setLikeToggle((prev) => !prev);
            }}
          />
        ) : (
          <img
            src={images.heart_gray}
            onClick={() => {
              setLikeToggle((prev) => !prev);
            }}
          />
        )}
        {cartToggle ? (
          <img
            className='cart'
            src={images.cart_black_22}
            onClick={() => {
              setCartToggle((prev) => !prev);
            }}
          />
        ) : (
          <img
            src={images.cart_gray}
            onClick={() => {
              setCartToggle((prev) => !prev);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MusicPlay;
