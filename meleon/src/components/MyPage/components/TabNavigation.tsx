import { TabType } from '@typedef/mypage.types';
import React from 'react';
import '../styles/tab.navigation.style.css';

type Props = {
  tab: TabType;
  onTabChange: (tab: TabType) => void;
};

const TabNavigation = ({ tab, onTabChange }: Props) => {
  return (
    <nav className='tab-root'>
      <div className='wrapper'>
        <button
          className={`tab-button ${tab === 'userinfo' ? 'active' : ''}`}
          onClick={() => onTabChange('userinfo')}>
          유저정보
        </button>
        <button
          className={`tab-button ${tab === 'download' ? 'active' : ''}`}
          onClick={() => onTabChange('download')}>
          다운로드
        </button>
        <button
          className={`tab-button ${tab === 'payment' ? 'active' : ''}`}
          onClick={() => onTabChange('payment')}>
          결제정보
        </button>
        <button
          className={`tab-button ${tab === 'activity' ? 'active' : ''}`}
          onClick={() => onTabChange('activity')}>
          업로드
        </button>
        <div className={`underline ${tab}`}></div>
      </div>
    </nav>
  );
};

export default TabNavigation;
