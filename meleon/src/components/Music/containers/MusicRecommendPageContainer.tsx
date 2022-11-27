import React, { useCallback } from 'react';
import { useSearchParams } from 'react-router-dom';
import MusicRecommendPage from '../components/MusicRecommendPage';

type Props = {};

const MusicRecommendPageContainer = (props: Props) => {
  const [searchParam] = useSearchParams();

  return <MusicRecommendPage searchParam={searchParam} />;
};

export default MusicRecommendPageContainer;
