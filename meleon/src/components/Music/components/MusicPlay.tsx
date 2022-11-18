import React, { useEffect, useState } from 'react';
import { images } from 'src/assets/images';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
};
type Props = {
  music: MusicInfo;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  play: string;
  value: number;
};

const MusicPlay = ({ music, toggle, setToggle, play, value }: Props) => {
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
      <div className='musicplay-title'>{music.title}</div>
      <div className='musicplay-artist'>{music.artist}</div>
      <div className='musicplay-tag'>
        #따뜻한 #위로 #긍정 #따뜻한 #위로 #긍정...
      </div>
      <div className={`progress-container${play}`}>
        <progress id='progress' value={`${value}`} max='100'></progress>
        <div
          className='point'
          style={{ position: 'absolute', left: `${value}%` }}></div>
      </div>
      <span className='now-time'>01:32 </span>
      <span className='play-time'>/ 03:53</span>
    </div>
  );
};

export default MusicPlay;
