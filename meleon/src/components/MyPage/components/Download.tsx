import IllustratorListContainer from '@components/Illustrator/containers/IllustratorListContainer';
import MusicPlayContainer from '@components/Music/containers/MusicPlayContainer';
import VideoListContainer from '@components/Video/containers/VideoListContainer';
import { images } from 'src/assets/images';
import '../styles/download.style.css';

const previews1 = [
  images.preview.img1,
  images.preview.img2,
  images.preview.img3,
  images.preview.img4,
];

const previews2 = [
  images.preview.img5,
  images.preview.img6,
  images.preview.img7,
  images.preview.img8,
];

const previews3 = [
  images.preview.img9,
  images.preview.img10,
  images.preview.img11,
  images.preview.img12,
];

const previews4 = [
  images.preview.img13,
  images.preview.img14,
  images.preview.img15,
  images.preview.img16,
];

const artistList = [
  ,
  ,
  ,
  ,
  'Dynamic, Emotional, Festive',
  '멜로망스(Melomance)',
  '마크툽(Marktub)',
  '마크툽(Marktub)',
];
const titleList = [
  ,
  ,
  ,
  'Can We Always Be Friends?',
  'Rain Dance',
  ,
  '너를 부르는 바람',
  '너를 부르는 바람',
];
const musicList = [
  {
    image: `/assets/images/music1.png`,
    artist: '마크툽(Marktub)',
    title: '너를 부르는 바람',
    buy: false,
  },
  {
    image: `/assets/images/music2.png`,
    artist: 'Dynamic, Powerful, Playful',
    title: 'ENERGETIC DANCE POP',
    buy: false,
  },
  {
    image: `/assets/images/music3.png`,
    artist: '제아',
    title: 'Orange Drive(Prod. VERYGOODS...',
    buy: false,
  },
  {
    image: `/assets/images/music4.png`,
    artist: '마크툽(Marktub)',
    title: '다시 또 널 사랑하게 되었네',
    buy: false,
  },
];

type Props = {
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const Download = ({
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <div className='download-root'>
      <section>
        <div className='title'>음원</div>
        <div className='divider'></div>
        <div className='content'>
          {/* {musicList.map((music) => (
            <MusicPlayContainer music={music} />
          ))} */}
          <div className='text'>다운로드 목록이 없습니다</div>
        </div>
      </section>
      <section>
        <div className='title'>영상</div>
        <div className='divider'></div>
        <div className='content'>
          <VideoListContainer
            previews={previews4}
            selectedItem={selectedItem}
            onItemClicked={onItemClicked}
            onClosePlayerClicked={onClosePlayerClicked}
          />
        </div>
      </section>
      <section>
        <div className='title'>영상템플릿</div>
        <div className='divider'></div>
        <div className='content'>
          <IllustratorListContainer
            previews={previews1}
            selectedItem={selectedItem}
            onItemClicked={onItemClicked}
            onClosePlayerClicked={onClosePlayerClicked}
          />
        </div>
      </section>
      <section>
        <div className='title'>사진</div>
        <div className='divider'></div>
        <div className='content'>
          <IllustratorListContainer
            previews={previews2}
            selectedItem={selectedItem}
            onItemClicked={onItemClicked}
            onClosePlayerClicked={onClosePlayerClicked}
          />
        </div>
      </section>
      <section>
        <div className='title'>일러스트</div>
        <div className='divider'></div>
        <div className='content'>
          <IllustratorListContainer
            previews={previews3}
            selectedItem={selectedItem}
            onItemClicked={onItemClicked}
            onClosePlayerClicked={onClosePlayerClicked}
          />
        </div>
      </section>
      <section>
        <div className='title'>3D</div>
        <div className='divider'></div>
        <div className='content'>
          <div className='text'>다운로드 목록이 없습니다</div>
        </div>
      </section>
    </div>
  );
};

export default Download;
