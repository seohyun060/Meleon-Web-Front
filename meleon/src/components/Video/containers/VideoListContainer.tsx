import React from 'react';
import VideoList from '../components/VideoList';

type Props = {
  previews: string[];
  selectedItem: number;
  onItemClicked: (idx: number) => void;
  onClosePlayerClicked: () => void;
};

const VideoListContainer = (props: Props) => {
  return <VideoList {...props} />;
};

export default VideoListContainer;
