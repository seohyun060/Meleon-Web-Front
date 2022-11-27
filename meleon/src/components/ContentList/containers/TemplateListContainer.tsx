import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateList from '../components/TemplateList';

type Props = {};

const TemplateListContainer = (props: Props) => {
  const navigate = useNavigate();

  const onUploadClicked = useCallback(() => {
    navigate('/upload/template');
  }, [navigate]);

  return <TemplateList onUploadClicked={onUploadClicked} />;
};

export default TemplateListContainer;
