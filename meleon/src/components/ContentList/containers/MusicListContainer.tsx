import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import MusicList from '../components/MusicList';

type Props = {};

const MusicListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/image');
  }, [navigate]);

  return <MusicList onUploadClicked={onUploadClicked} />;
};

export default MusicListContainer;
