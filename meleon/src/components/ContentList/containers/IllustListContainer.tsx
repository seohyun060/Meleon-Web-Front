import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import IllustList from '../components/IllustList';

type Props = {};

const IllustListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/image');
  }, [navigate]);

  return <IllustList onUploadClicked={onUploadClicked} />;
};

export default IllustListContainer;
