import useRefresh from '@hooks/useRefresh';
import useUser from '@hooks/useUser';
import { UserInfoType } from '@typedef/mypage.types';
import { profileEnd } from 'console';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FixUserInfo from '../components/FixUserInfo';

type Props = {};

const FixUserInfoContainer = (props: Props) => {
  const location = useLocation();
  const { __useRefresh } = useRefresh();

  const { __getUserInfo, __setUserInfo, __uploadProfile, __getProfile } =
    useUser();

  const [userInfo, setUserInfo] = useState<UserInfoType>({
    name: 'Jinny',
    nickname: 'Jinny',
    address: '경상북도 경주시 초당길 55번길 삼성아파트 102동 1321호',
    birth: '2000.01.01',
    phone: '010-1111-2222',
    email: 'jinny@naver.com',
  });
  const isInputEmpty = useMemo(
    () =>
      Boolean(
        userInfo.address &&
          userInfo.nickname &&
          userInfo.email &&
          userInfo.name &&
          userInfo.phone,
      ),
    [userInfo],
  );

  const ProfileRef = useRef<HTMLImageElement>(null);

  const onUserInfoChange = useCallback(
    (key: keyof UserInfoType, value: string) => {
      setUserInfo((prev) => ({ ...prev, [key]: value }));
    },
    [],
  );

  const onProfileChanged = useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        let reader = new FileReader();

        reader.onload = (e) => {
          if (ProfileRef.current) {
            ProfileRef.current.src = reader.result as string;
            __uploadProfile(reader.result as string);
          }
        };

        await reader.readAsDataURL(e.target.files[0]);
        __useRefresh();
      }
    },
    [ProfileRef, __uploadProfile, __useRefresh],
  );

  const onStoreButtonClicked = useCallback(() => {
    if (!isInputEmpty) {
      alert('필수정보를 입력해주세요');
      return;
    }
    __setUserInfo(userInfo);
    alert('회원정보가 수정되었습니다');
    __useRefresh();
  }, [userInfo, __setUserInfo, __useRefresh]);

  useEffect(() => {
    const userInfo = __getUserInfo();
    if (userInfo) {
      setUserInfo(userInfo);
    }

    return () => {};
  }, []);

  useEffect(() => {
    if (ProfileRef.current) {
      const profile = __getProfile();
      if (profile) {
        ProfileRef.current.src = profile;
      }
    }
  }, [ProfileRef]);

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
