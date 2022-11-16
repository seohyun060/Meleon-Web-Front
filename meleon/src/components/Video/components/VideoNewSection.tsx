import React from 'react';
import { images } from 'src/assets/images';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import '../styles/video.new.section.styles.css';

type Props = {
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const VideoNewSection = ({
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <section className='new-section'>
      <a className='title' href=''>
        <span className='span'>{'신규 영상'}</span>
        <img src={images.right_arrow_18_black} alt='right-arrow-button' />
      </a>
      <div className='item-list'>
        {previews.map((item, idx) => {
          return (
            <>
              <div
                className='item-container'
                key={idx}
                onClick={() => onItemClicked(idx)}>
                <img className='item' src={item} alt='video-preview-image' />
              </div>
              {idx === selectedItem && (
                <VideoPlayerContainer
                  onClosePlayerClicked={onClosePlayerClicked}
                />
              )}
            </>
          );
        })}
      </div>
    </section>
  );
};

export default VideoNewSection;
