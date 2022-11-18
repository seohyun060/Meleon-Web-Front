import React from 'react';
import MusicNew from '../components/MusicNew';
type MusicInfo = {
  image: string;
  artist: string;
  title: string;
  buy: boolean;
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
for (let i = 0; i < 8; i++) {
  if (i === 1) {
    musicList.push({
      image: `/assets/images/music${i + 1}.png`,
      artist: artistList[i],
      title: titleList[i],
      buy: true,
    });
  } else {
    musicList.push({
      image: `/assets/images/music${i + 1}.png`,
      artist: artistList[i],
      title: titleList[i],
      buy: false,
    });
  }
}
const MusicNewContainer = () => {
  return <MusicNew musicList={musicList} />;
};

export default MusicNewContainer;
