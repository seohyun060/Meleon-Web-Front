import useUser from '@hooks/useUser';
import { UserInfoType } from '@typedef/mypage.types';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import FixUserInfo from '../components/FixUserInfo';

type Props = {};

const FixUserInfoContainer = (props: Props) => {
  const { __getUserInfo, __setUserInfo } = useUser();

  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: 'Jinny',
    nickname: 'Jinny',
    address: '경상북도 경주시 초당길 55번길 삼성아파트 102동 1321호',
    birth: '2000.01.01',
    phone: '010-1111-2222',
    email: 'jinny@naver.com',
  });

  const ProfileRef = useRef<HTMLImageElement>(null);

  const onUserInfoChange = useCallback(
    (key: keyof UserInfoType, value: string) => {
      setUserInfo((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const onProfileChanged = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      let reader = new FileReader();
      if (ProfileRef.current && e.target.files) {
        ProfileRef.current.src = URL.createObjectURL(e.target.files[0]);
      }
    },
    [ProfileRef],
  );

  const onStoreButtonClicked = useCallback(() => {
    __setUserInfo(userInfo);
  }, [userInfo, __setUserInfo]);

  useEffect(() => {
    const userInfo = __getUserInfo();
    if (userInfo) {
      setUserInfo(userInfo);
    }

    return () => {};
  }, []);

  return (
    <FixUserInfo
      ProfileRef={ProfileRef}
      userInfo={userInfo}
      onStoreButtonClicked={onStoreButtonClicked}
      onUserInfoChange={onUserInfoChange}
      onProfileChanged={onProfileChanged}
    />
  );
};

export default FixUserInfoContainer;
