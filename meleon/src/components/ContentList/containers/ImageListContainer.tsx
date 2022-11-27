import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageList from '../components/ImageList';

type Props = {};

const ImageListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/image');
  }, [navigate]);

  return <ImageList onUploadClicked={onUploadClicked} />;
};

export default ImageListContainer;
