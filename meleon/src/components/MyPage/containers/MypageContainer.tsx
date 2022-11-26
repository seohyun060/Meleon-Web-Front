import { TabType } from '@typedef/mypage.types';
import React, { useCallback, useState } from 'react';
import Mypage from '../Mypage';

type Props = {
  initialTab?: TabType;
};

const MypageContainer = ({ initialTab }: Props) => {
  const [tab, setTab] = useState<TabType>(initialTab || 'userinfo');

  const onTabChanged = useCallback((tab: TabType) => {
    setTab(tab);
  }, []);

  return <Mypage onTabChanged={onTabChanged} tab={tab} />;
};

export default MypageContainer;
