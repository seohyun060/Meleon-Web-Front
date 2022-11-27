import { TabType } from '@typedef/mypage.types';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Mypage from '../Mypage';

type Props = {
  initialTab?: TabType;
};

const MypageContainer = ({ initialTab }: Props) => {
  const [searchParam] = useSearchParams();
  const [tab, setTab] = useState<TabType>(initialTab || 'userinfo');

  const onTabChanged = useCallback((tab: TabType) => {
    setTab(tab);
  }, []);

  useLayoutEffect(() => {
    const tab = searchParam.get('tab');
    if (tab) {
      setTab(tab as TabType);
    }
  }, [searchParam]);

  return <Mypage onTabChanged={onTabChanged} tab={tab} />;
};

export default MypageContainer;
