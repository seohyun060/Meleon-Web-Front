import useCoinReducer from '@hooks/useCoinReducer';
import { GNBTableTypes } from '@typedef/components/common/GNB/gnb.types';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GNB from '../GNB';

type Props = {
  location: string;
  textColor?: 'white' | 'black';
};

const tabTable: GNBTableTypes[] = [
  {
    label: '음원',
    path: '/music',
  },
  {
    label: '영상',
    path: '/video',
  },
  {
    label: '영상템플릿',
    path: '/template',
  },
  {
    label: '사진',
    path: '/picture',
  },
  {
    label: '일러스트',
    path: '/illustrator',
  },
  {
    label: '3D',
    path: '/3d',
  },
  {
    label: '맞춤제작',
    path: '/custom',
  },
];

const GNBContainer = ({ location }: Props) => {
  const navigate = useNavigate();
  const { coin } = useCoinReducer();

  const [textColor, setTextColor] = useState<'white' | 'black'>('white');
  const [selectedTab, setSelectedTab] = useState<string>('/music');
  const [check, setCheck] = useState<string>('');
  const [menuToggle, setMenuToggle] = useState(false);

  const onItemClicked = useCallback((path: string) => {
    if (path === '/custom') {
      return;
    }
    setSelectedTab(path);
    navigate(path);
  }, []);

  const onMypageClicked = useCallback(() => {
    navigate('/mypage');
  }, [navigate]);

  const onMenuToggleClicked = useCallback(() => {
    setMenuToggle((prev) => !prev);
  }, []);

  useEffect(() => {
    let route = location.split('/')[1];
    if (route === 'mypage') {
      setTextColor('black');
    } else {
      setTextColor('white');
    }
    setCheck(window.localStorage.getItem('check') || '');
    setSelectedTab(`/${route}`);
  }, [location]);

  return (
    <GNB
      coin={coin}
      check={check}
      tabTable={tabTable}
      location={location}
      selectedTab={selectedTab}
      menuToggle={menuToggle}
      textColor={textColor}
      onMypageClicked={onMypageClicked}
      onMenuToggleClicked={onMenuToggleClicked}
      onItemClicked={onItemClicked}
    />
  );
};

export default GNBContainer;
