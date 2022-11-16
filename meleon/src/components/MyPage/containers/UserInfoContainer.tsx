import React, { useCallback } from 'react';
import UserInfo from '../components/UserInfo';

type Props = {};

const UserInfoContainer = (props: Props) => {
  const onBenefitClicked = useCallback(() => {}, []);

  const onLogoutClicked = useCallback(() => {}, []);

  return (
    <UserInfo
      onBenefitClicked={onBenefitClicked}
      onLogoutClicked={onLogoutClicked}
    />
  );
};

export default UserInfoContainer;
