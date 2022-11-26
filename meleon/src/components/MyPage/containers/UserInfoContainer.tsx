import useCoinReducer from '@hooks/useCoinReducer';
import usePopup from '@hooks/usePopup';
import useRefresh from '@hooks/useRefresh';
import useUser from '@hooks/useUser';
import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserInfo from '../components/UserInfo';
import BenefitPopupContainer from './BenefitPopupContainer';

type Props = {};

const UserInfoContainer = (props: Props) => {
  const navigate = useNavigate();

  const { refresh } = useRefresh();
  const { __showPopup } = usePopup();
  const { __getProfile, __getUserInfo } = useUser();
  const { coin, useCoin } = useCoinReducer();

  const [userInfo, setUserInfo] = useState(__getUserInfo());
  const [profile, setProfile] = useState(__getProfile());

  const onBenefitClicked = useCallback(() => {
    __showPopup(<BenefitPopupContainer />);
  }, [__showPopup, BenefitPopupContainer]);

  const onLogoutClicked = useCallback(() => {
    //로그인 안된 상태로 변경
    localStorage.setItem('check', 'nonelogin');
    navigate('/login');
  }, []);

  useEffect(() => {
    console.log('test');
    setTimeout(() => {
      setUserInfo(__getUserInfo());
      setProfile(__getProfile());
    }, 500);
  }, [refresh]);

  return (
    <UserInfo
      coin={coin}
      useCoin={useCoin}
      userInfo={userInfo}
      profile={profile}
      onBenefitClicked={onBenefitClicked}
      onLogoutClicked={onLogoutClicked}
    />
  );
};

export default UserInfoContainer;
