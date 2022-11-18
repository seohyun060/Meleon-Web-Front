import { RecommendCardTypes } from '@typedef/components/Video/video.recommend.types';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IllustratorRecommendSection from '../components/IllustratorRecommendSection';

const IllustratorRecommendSectionContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);

  const [list, setList] = useState<RecommendCardTypes[]>([
    {
      title: '한번 보면 잊을 수 없는\n독특한 건축물',
      tag: '#건물 #건축물',
    },
    {
      title: '여유로운 한낮의 도시 전경 이미지 모음',
      tag: '#한낮 #여유 #도시',
    },
    {
      title: '도시 야경 이미지 모음',
      tag: '#도시 #야경',
    },
    {
      title: '생동감 넘치는 야생 동물 이미지 모음',
      tag: '#자연 #야생 동물',
    },
    {
      title: '잔잔한 자연 전경 이미지 모음',
      tag: '#잔잔 #자연',
    },
    {
      title: '고요한 크리스마스 이미지 모음',
      tag: '#고요 #크리스마스',
    },
    {
      title: '활기찬 해안 도시 이미지 모음',
      tag: '#활기 #해안가',
    },
    {
      title: '울창한 지구의 허파 이미지 모음',
      tag: '#울창 #아마존',
    },
  ]);

  const onItemClicked = useCallback(
    (item: string) => {
      navigate(`/${path}/recommend?q=${item}`);
    },
    [path],
  );

  useEffect(() => {
    setPath(location.pathname.split('/')[1]);
  }, [location]);

  return (
    <IllustratorRecommendSection
      path={path}
      list={list}
      onItemClicked={onItemClicked}
    />
  );
};

export default IllustratorRecommendSectionContainer;
