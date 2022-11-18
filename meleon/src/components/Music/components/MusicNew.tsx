import React from 'react';
import { images } from 'src/assets/images';
import MusicPlayContainer from '../containers/MusicPlayContainer';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
};
type Props = {
  musicList: MusicInfo[];
};

const MusicNew = ({ musicList }: Props) => {
  return (
    <section className='new-section'>
      <a className='title' href=''>
        <span className='span'>{'신규 음원'}</span>

        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <div className='play-container'>
        {musicList.map((music) => (
          <MusicPlayContainer music={music} />
        ))}
      </div>
    </section>
  );
};

export default MusicNew;
