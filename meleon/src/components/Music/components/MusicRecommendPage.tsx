import React from 'react';
import MusicPlayContainer from '../containers/MusicPlayContainer';
import MusicSearchContainer from '../containers/MusicSearchContainer';

type Props = {
  searchParam: URLSearchParams;
};

type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
  src: HTMLAudioElement;
};
const musicList: MusicInfo[] = [];
const artistList = [
  '마크툽(Marktub)',
  'Dynamic, Powerful, Playful, Dramatic, Insightful',
  '제아',
  'Gracie Abrams',
  'Dynamic, Emotional, Festive',
  '멜로망스(Melomance)',
  '마크툽(Marktub)',
  '마크툽(Marktub)',
];
const titleList = [
  '너를 부르는 바람',
  'ENERGETIC DANCE POP',
  'Orange Drive(Prod. VERYGOODS)',
  'Can We Always Be Friends?',
  'Rain Dance',
  '다시 또 널 사랑하게 되었네',
  '너를 부르는 바람',
  '너를 부르는 바람',
];
const myAudio1 = new Audio();
const myAudio2 = new Audio();
const myAudio3 = new Audio();
const myAudio4 = new Audio();
const myAudio5 = new Audio();
const myAudio6 = new Audio();
const myAudio7 = new Audio();
const myAudio8 = new Audio();
myAudio1.src = '/assets/audio/music1.mp3';
myAudio2.src = '/assets/audio/music2.mp3';
myAudio3.src = '/assets/audio/music3.mp3';
myAudio4.src = '/assets/audio/music4.mp3';
myAudio5.src = '/assets/audio/music5.mp3';
myAudio6.src = '/assets/audio/music6.mp3';
myAudio7.src = '/assets/audio/music7.mp3';
myAudio8.src = '/assets/audio/music8.mp3';
const audioList = [
  myAudio1,
  myAudio2,
  myAudio3,
  myAudio4,
  myAudio5,
  myAudio6,
  myAudio7,
  myAudio8,
];
for (let i = 0; i < 8; i++) {
  if (i === 0) {
    musicList.push({
      image: `/assets/images/music1${i + 1}.png`,
      artist: artistList[i],
      title: titleList[i],
      buy: true,
      src: audioList[i],
    });
  } else {
    musicList.push({
      image: `/assets/images/music1${i + 1}.png`,
      artist: artistList[i],
      title: titleList[i],
      buy: false,
      src: audioList[i],
    });
  }
}

const MusicRecommendPage = ({ searchParam }: Props) => {
  return (
    <div className='video-root page-root'>
      <MusicSearchContainer />
      <main className='main-section'>
        <div>
          <a className='title'>
            <span className='span'>{`${searchParam.get('q')}`}</span>
          </a>
        </div>
        {musicList.map((music) => (
          <MusicPlayContainer music={music} />
        ))}
      </main>
      <section className='keyword-section'></section>
    </div>
  );
};

export default MusicRecommendPage;
