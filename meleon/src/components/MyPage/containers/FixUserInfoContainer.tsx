import { UserInfoType } from '@typedef/mypage.types';
import React, { useCallback, useState } from 'react';
import FixUserInfo from '../components/FixUserInfo';

type Props = {};

const FixUserInfoContainer = (props: Props) => {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: 'Jinny',
    nickname: 'Jinny',
    address: '경상북도 경주시 초당길 55번길 삼성아파트 102동 1321호',
    birth: '2000.01.01',
    phone: '010-1111-2222',
    email: 'jinny@naver.com',
  });

  const onUserInfoChange = useCallback(
    (key: keyof UserInfoType, value: string) => {
      setUserInfo((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  return (
    <FixUserInfo userInfo={userInfo} onUserInfoChange={onUserInfoChange} />
  );
};

export default FixUserInfoContainer;
