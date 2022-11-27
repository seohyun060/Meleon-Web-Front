import { UserInfoType } from '@typedef/mypage.types';
import { useCallback } from 'react';

const USER_INFO = '@USER_INFO@' as const;
const USER_PROFILE = '@USER_PROFILE@' as const;

export default function useUser() {
  const __getUserInfo = useCallback(() => {
    const data = sessionStorage.getItem(USER_INFO);
    const userInfo = JSON.parse(
      data ||
        '{  "name": "Jinny",  "nickname": "Jinny",  "address": "경상북도 경주시 초당길 55번길 삼성아파트 102동 1321호",  "birth": "2000.01.01",  "phone": "010-1111-2222",  "email": "jinny@naver.com"}',
    ) as UserInfoType;

    return userInfo;
  }, []);

  const __setUserInfo = useCallback((data: UserInfoType) => {
    sessionStorage.setItem(USER_INFO, JSON.stringify(data));
  }, []);

  const __uploadProfile = useCallback((data: string) => {
    sessionStorage.setItem(USER_PROFILE, data);
  }, []);

  const __getProfile = useCallback(() => {
    const data = sessionStorage.getItem(USER_PROFILE);

    return data;
  }, []);

  return {
    __getUserInfo,
    __setUserInfo,
    __uploadProfile,
    __getProfile,
  };
}
