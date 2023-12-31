import React from 'react';
import { images } from 'src/assets/images';
import VideoListContainer from '../containers/VideoListContainer';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';

type Props = {
  path: string;
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const VideoNewSection = ({
  path,
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <section className='new-section'>
      <a className='title' href=''>
        <span className='span'>{`신규 영상${
          path === 'template' ? '템플릿' : ''
        }`}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <VideoListContainer
        previews={previews}
        selectedItem={selectedItem}
        onItemClicked={onItemClicked}
        onClosePlayerClicked={onClosePlayerClicked}
      />
    </section>
  );
};

export default VideoNewSection;
