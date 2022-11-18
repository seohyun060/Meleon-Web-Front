import React, { Fragment } from 'react';
import VideoPlayerContainer from '../containers/VideoPlayerContainer';
import '../styles/video.list.styles.css';

type Props = {
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const VideoList = ({
  previews,
  selectedItem,
  onItemClicked,
  onClosePlayerClicked,
}: Props) => {
  return (
    <div className='video-list-root'>
      {previews.map((item, idx) => {
        return (
          <Fragment key={idx}>
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
          </Fragment>
        );
      })}
    </div>
  );
};

export default VideoList;
