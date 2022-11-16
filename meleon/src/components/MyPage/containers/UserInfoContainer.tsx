import usePopup from '@hooks/usePopup';
import React, { useCallback } from 'react';
import UserInfo from '../components/UserInfo';
import BenefitPopupContainer from './BenefitPopupContainer';

type Props = {};

const UserInfoContainer = (props: Props) => {
  const { __showPopup } = usePopup();
  const onBenefitClicked = useCallback(() => {
    __showPopup(<BenefitPopupContainer />);
  }, [__showPopup, BenefitPopupContainer]);

  const onLogoutClicked = useCallback(() => {}, []);

  return (
    <UserInfo
      onBenefitClicked={onBenefitClicked}
      onLogoutClicked={onLogoutClicked}
    />
  );
};

export default UserInfoContainer;
