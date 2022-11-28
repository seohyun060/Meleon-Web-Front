import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import SimplePopup from '@components/common/SimplePopup/SimplePopup';
import usePopup from '@hooks/usePopup';
import { UserInfoType } from '@typedef/mypage.types';
import React, { RefObject } from 'react';
import { images } from 'src/assets/images';
import '../styles/fix.userinfo.style.css';

type Props = {
  userInfo: UserInfoType;
  ProfileRef: RefObject<HTMLImageElement>;
  onUserInfoChange: (key: keyof UserInfoType, value: string) => void;
  onProfileChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onStoreButtonClicked: () => void;
};

const user = {
  name: 'Jinny',
  email: 'jinny@naver.com',
  img: images.profile_placeholder,
};

const FixUserInfo = ({
  userInfo,
  ProfileRef,
  onUserInfoChange,
  onProfileChanged,
  onStoreButtonClicked,
}: Props) => {
  const { __showPopup } = usePopup();
  return (
    <div className='fix-userinfo-root'>
      <div className='shadow-box'>
        <div className='wrapper'>
          <section className='profile-section'>
            <h1 className='title'>회원정보</h1>
            <img
              className='user-img'
              src={user.img}
              alt='img_user'
              ref={ProfileRef}
            />
            <label className='img-upload' htmlFor='profile'>
              프로필 사진 업로드
            </label>
            <input
              type='file'
              name='profile'
              id='profile'
              accept='image/*'
              onChange={onProfileChanged}
            />
          </section>
          <form className='user-form'>
            <div className='row'>
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputType='check'
                inputId={'nickname'}
                value={userInfo.nickname}
                placeholder={'닉네임을 입력해주세요'}
                label={'사용자 닉네임*'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('nickname', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('nickname', value);
                }}
                onCheckBtnClicked={() => {
                  __showPopup(
                    <SimplePopup content='사용가능한 닉네임입니다' />,
                  );
                }}
              />
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputId={'phome'}
                value={userInfo.phone}
                placeholder={'전화번호를 입력해주세요'}
                label={'전화번호*'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('phone', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('phone', value);
                }}
              />
            </div>
            <div className='row'>
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputId={'email'}
                value={userInfo.email}
                placeholder={'이메일을 입력해주세요'}
                label={'이메일*'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('email', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('email', value);
                }}
              />
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputId={'birth'}
                value={userInfo.birth}
                placeholder={'2000.00.00'}
                label={'생년월일'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('birth', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('birth', value);
                }}
              />
            </div>
            <div className='row'>
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputId={'name'}
                value={userInfo.name}
                placeholder={'이름을 입력해주세요'}
                label={'이름*'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('name', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('name', value);
                }}
              />
              <CInputContainer
                containerStyle={{ maxWidth: 600, width: '100%', flexGrow: 1 }}
                inputStyle={{ width: '100%' }}
                inputId={'address'}
                value={userInfo.address}
                placeholder={'서울특별시 00구 000'}
                label={'이메일*'}
                onDeleteBtnClicked={() => {
                  onUserInfoChange('address', '');
                }}
                onValueChanged={(value) => {
                  onUserInfoChange('address', value);
                }}
              />
            </div>
            <button
              type='button'
              className='store-button'
              onClick={onStoreButtonClicked}>
              저장하기
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FixUserInfo;
