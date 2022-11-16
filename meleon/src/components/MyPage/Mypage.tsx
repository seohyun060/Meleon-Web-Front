import { TabType } from '@typedef/mypage.types';
import React from 'react';
import FixUserInfoContainer from './containers/FixUserInfoContainer';
import TabNavigationContainer from './containers/TabNavigationContainer';
import UserInfoContainer from './containers/UserInfoContainer';
import './styles/mypage.style.css';

type Props = {
  onTabChanged: (tab: TabType) => void;
  tab: TabType;
};

const Mypage = ({ onTabChanged, tab }: Props) => {
  return (
    <div className='mypage-root'>
      <UserInfoContainer />
      <TabNavigationContainer onTabChange={onTabChanged} />
      {tab === 'userinfo' && <FixUserInfoContainer />}
    </div>
  );
};

export default Mypage;
