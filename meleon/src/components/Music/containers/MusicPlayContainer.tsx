import React, { useCallback, useEffect, useState } from 'react';
import MusicPlay from '../components/MusicPlay';

type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
  src: HTMLAudioElement;
};
type Props = {
  music: MusicInfo;
};
let timer: any;

const MusicPlayContainer = ({ music }: Props) => {
  const [toggle, setToggle] = useState(false);
  const [playTime, setPlayTime] = useState('00:00');
  const [nowTime, setNowTime] = useState('00:00');
  const [play, setPlay] = useState('-off');
  const [progress, setProgress] = useState(0);
  const [popUp, setPopUp] = useState('');
  const secondToTime = useCallback((time: number) => {
    let minutes = Math.floor(time / 60).toString();
    let seconds = (time - parseInt(minutes) * 60).toString();

    if (parseInt(minutes) < 10) {
      minutes = '0' + minutes;
    }
    if (parseInt(seconds) < 10) {
      seconds = '0' + seconds;
    }
    if (time === 0) {
      minutes = '00';
      seconds = '00';
    }
    return minutes + ':' + seconds;
  }, []);

  useEffect(() => {
    setPlayTime(secondToTime(Math.trunc(music.src.duration)));
    if (toggle) {
      timer = setInterval(() => {
        setNowTime(secondToTime(Math.trunc(music.src.currentTime)));
      }, 500);
      setPlay('-on');
      music.src.play();

      setProgress((music.src.currentTime / music.src.duration) * 100);
    } else {
      clearInterval(timer);
      setPlay('-off');
      music.src.pause();
    }

    if (music.buy) {
      setPopUp('샘플 다운로드');
    } else {
      setPopUp('구매하기');
    }
  }, [toggle, nowTime, playTime]);
  return (
    <MusicPlay
      music={music}
      toggle={toggle}
      setToggle={setToggle}
      play={play}
      nowTime={nowTime}
      playTime={playTime}
      progress={progress}
      popUp={popUp}
    />
  );
};

export default MusicPlayContainer;
