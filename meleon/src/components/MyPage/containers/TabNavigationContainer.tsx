import { TabType } from '@typedef/mypage.types';
import React, { useCallback, useState } from 'react';
import TabNavigation from '../components/TabNavigation';

type Props = {
  onTabChange: (tab: TabType) => void;
};

const TabNavigationContainer = ({ onTabChange }: Props) => {
  const [tab, setTab] = useState<TabType>('userinfo');

  const onTabChanged = useCallback(
    (tab: TabType) => {
      setTab(tab);
      onTabChange(tab);
    },
    [onTabChange],
  );

  return <TabNavigation onTabChange={onTabChanged} tab={tab} />;
};

export default TabNavigationContainer;
