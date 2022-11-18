import React, { useEffect, useState } from 'react';
import MusicPlay from '../components/MusicPlay';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
};
type Props = {
  music: MusicInfo;
};

const MusicPlayContainer = ({ music }: Props) => {
  const [toggle, setToggle] = useState(false);

  const [value, setValue] = useState(0);
  const [play, setPlay] = useState('-off');
  useEffect(() => {
    if (toggle) {
      setValue(39.48);
      setPlay('-on');
    } else {
      setValue(1);
      setPlay('-off');
    }
  }, [toggle, value]);
  return (
    <MusicPlay
      music={music}
      toggle={toggle}
      setToggle={setToggle}
      play={play}
      value={value}
    />
  );
};

export default MusicPlayContainer;
