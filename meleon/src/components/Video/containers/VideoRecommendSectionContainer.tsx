import { RecommendCardTypes } from '@typedef/components/Video/video.recommend.types';
import React, { useCallback, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import VideoRecommendSection from '../components/VideoRecommendSection';

const VideoRecommendSectionContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [path, setPath] = useState(location.pathname.split('/')[1]);

  const [list, setList] = useState<RecommendCardTypes[]>([
    {
      title: '아름다운 자연 전경의 생동감 넘치는 비디오 모음',
      tag: '#자연 #광활한 대지',
    },
    {
      title: '여유로운 한낮의 도시 전경 비디오 모음',
      tag: '#한낮 #여유 #도시',
    },
    {
      title: '도시 야경 비디오 모음',
      tag: '#도시 #야경',
    },
    {
      title: '생동감 넘치는 야생 동물 비디오 모음',
      tag: '#자연 #야생 동물',
    },
    {
      title: '잔잔한 자연 전경 비디오 모음',
      tag: '#잔잔 #자연',
    },
    {
      title: '고요한 크리스마스 비디오 모음',
      tag: '#고요 #크리스마스',
    },
    {
      title: '활기찬 해안 도시 비디오 모음',
      tag: '#활기 #해얀가',
    },
    {
      title: '울창한 지구의 허파 비디오 모음',
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
    <VideoRecommendSection
      path={path}
      list={list}
      onItemClicked={onItemClicked}
    />
  );
};

export default VideoRecommendSectionContainer;
