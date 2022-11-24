import React, { useEffect, useState } from 'react';

import { images } from 'src/assets/images';

import loginChecked from '../../Login/Login';
import { useNavigate } from 'react-router-dom';
import { GNBTableTypes } from '@typedef/components/common/GNB/gnb.types';
import './styles/gnb.style.css';

type Props = {
  coin: number;
  check: string;
  tabTable: GNBTableTypes[];
  location: string;
  selectedTab: string;
  menuToggle: boolean;
  textColor: 'white' | 'black';
  onMypageClicked: () => void;
  onMenuToggleClicked: () => void;
  onItemClicked: (item: string) => void;
};

const GNB = ({
  coin,
  check,
  tabTable,
  selectedTab,
  menuToggle,
  textColor,
  onMypageClicked,
  onItemClicked,
  onMenuToggleClicked,
  location,
}: Props) => {
  const navigate = useNavigate();
  return (
    <div
      className={`gnb${
        location === '/login' || location === '/' ? '-off' : ''
      }${location === '/main' ? '-main' : ''} ${textColor}`}>
      <img
        src={images.menu_white}
        className='gnb-bar'
        onClick={onMenuToggleClicked}></img>
      {menuToggle && (
        <div className='side-menu'>
          <div className='side-menu-bar'>
            <img src={images.close} onClick={onMenuToggleClicked} />
            {tabTable.map((item, idx) => {
              return (
                <button
                  className={`tab ${selectedTab === item.path ? 'active' : ''}`}
                  key={idx}
                  onClick={() => {
                    onItemClicked(item.path);
                    onMenuToggleClicked();
                  }}>
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <img
        src={location === '/main' ? images.logo_w : images.logo}
        className='gnb-logo'
      />
      <div className='menu'>
        {tabTable.map((item, idx) => {
          return (
            <button
              className={`tab ${selectedTab === item.path ? 'active' : ''}`}
              key={idx}
              onClick={() => onItemClicked(item.path)}>
              {item.label}
            </button>
          );
        })}
      </div>
      {check === 'login' ? (
        <div className='gnb-user'>
          <div className='welcome'>환영합니다 {'Jinny'}</div>
          <img className='coin-image' src={images.coin_white} />
          <div className='coin-number'>Coin {coin}</div>
          <img className='cart' src={images.cart_white} />
          <img src={images.user_white} onClick={onMypageClicked} />
        </div>
      ) : (
        <div className='gnb-button'>
          <button
            className='gnb-button-login'
            onClick={() => {
              navigate('/login');
            }}>
            로그인
          </button>
          <button className='gnb-button-sign'>회원가입</button>
        </div>
      )}
    </div>
  );
};

export default GNB;
