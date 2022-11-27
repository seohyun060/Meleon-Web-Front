import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import ThreeDList from '../components/ThreeDList';

type Props = {};

const ThreeDListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/three');
  }, [navigate]);

  return <ThreeDList onUploadClicked={onUploadClicked} />;
};

export default ThreeDListContainer;
