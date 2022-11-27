import { TabType } from '@typedef/mypage.types';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import TabNavigation from '../components/TabNavigation';

type Props = {
  onTabChange: (tab: TabType) => void;
};

const TabNavigationContainer = ({ onTabChange }: Props) => {
  const [searchParam] = useSearchParams();

  const [tab, setTab] = useState<TabType>('userinfo');

  const onTabChanged = useCallback(
    (tab: TabType) => {
      setTab(tab);
      onTabChange(tab);
    },
    [onTabChange],
  );
  useLayoutEffect(() => {
    const tab = searchParam.get('tab');
    if (tab) {
      setTab(tab as TabType);
    }
  }, [searchParam]);
  return <TabNavigation onTabChange={onTabChanged} tab={tab} />;
};

export default TabNavigationContainer;
