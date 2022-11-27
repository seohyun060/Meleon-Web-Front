import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import VideoList from '../components/VideoList';

type Props = {};

const VideoListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/video');
  }, [navigate]);

  return <VideoList onUploadClicked={onUploadClicked} />;
};

export default VideoListContainer;
