import { TabType } from '@typedef/mypage.types';
import React from 'react';
import DownloadContainer from './containers/DownloadContainer';
import FixUserInfoContainer from './containers/FixUserInfoContainer';
import PaymentContainer from './containers/PaymentContainer';
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
      {tab === 'payment' && <PaymentContainer />}
      {tab === 'download' && <DownloadContainer />}
    </div>
  );
};

export default Mypage;
