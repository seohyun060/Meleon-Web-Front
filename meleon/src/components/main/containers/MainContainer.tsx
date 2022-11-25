import React, { useCallback } from 'react';
import Main from '../Main';
import { MainTableTypes } from '@typedef/components/Main/main.types';
import { useNavigate } from 'react-router-dom';
type Props = {};
const tabTable: MainTableTypes[] = [
  {
    label: '음원',
    labelEnglish: 'MUSIC',
    path: '/music',
    background: '/assets/images/preview-img/img1@3x.png',
  },
  {
    label: '영상',
    labelEnglish: 'VIDEO',
    path: '/video',
    background: '/assets/images/preview-img/img2@3x.png',
  },
  {
    label: '영상템플릿',
    labelEnglish: 'TEMPLATE',
    path: '/template',
    background: '/assets/images/preview-img/img3@3x.png',
  },
  {
    label: '사진',
    labelEnglish: 'PHOTO',
    path: '/picture',
    background: '/assets/images/preview-img/img4@3x.png',
  },
  {
    label: '일러스트',
    labelEnglish: 'ILLUSTRATE',
    path: '/illustrator',
    background: '/assets/images/preview-img/img5@3x.png',
  },
  {
    label: '3D',
    labelEnglish: '3-DIMENSIONAL',
    path: '/3d',
    background: '/assets/images/preview-img/img6@3x.png',
  },
];
const MainContainer = (props: Props) => {
  const navigate = useNavigate();
  const onItemClicked = useCallback((path: string) => {
    if (path === '/custom') {
      return;
    }

    navigate(path);
  }, []);
  return <Main tabTable={tabTable} onItemClicked={onItemClicked} />;
};

export default MainContainer;
