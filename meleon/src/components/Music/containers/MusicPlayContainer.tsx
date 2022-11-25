import BuyPopupContainer from '@components/common/BuyPopup/containers/BuyPopupContainer';
import usePopup from '@hooks/usePopup';
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
  const { __showPopup } = usePopup();

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

  const onDownloadBtnClicked = useCallback(() => {
    __showPopup(
      <BuyPopupContainer
        item={music.title}
        options={[
          { name: 'MP3', isDisabled: false, price: 100 },
          { name: 'WAV', isDisabled: false, price: 100 },
        ]}
      />,
    );
  }, [__showPopup]);

  useEffect(() => {
    setPlayTime(secondToTime(Math.trunc(music.src.duration)));

    if (toggle) {
      timer = setInterval(() => {
        setNowTime(secondToTime(Math.trunc(music.src.currentTime)));
        setProgress((music.src.currentTime / music.src.duration) * 100);
      }, 500);
      setPlay('-on');
      music.src.play();
    } else {
      clearInterval(timer);
      setPlay('-off');
      music.src.pause();
    }
  }, [toggle]);
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
      onDownloadBtnClicked={onDownloadBtnClicked}
    />
  );
};

export default MusicPlayContainer;
