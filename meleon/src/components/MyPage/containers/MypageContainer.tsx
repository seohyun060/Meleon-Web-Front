import useMypaeTab from '@hooks/useMypageTab';
import { TabType } from '@typedef/mypage.types';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';
import Mypage from '../Mypage';

type Props = {
  initialTab?: TabType;
};

const MypageContainer = ({ initialTab }: Props) => {
  const { tab, __updateTab } = useMypaeTab();

  const onTabChanged = useCallback(
    (tab: TabType) => {
      __updateTab(tab);
    },
    [__updateTab],
  );

  return <Mypage onTabChanged={onTabChanged} tab={tab} />;
};

export default MypageContainer;
