import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import SimplePopup from '@components/common/SimplePopup/SimplePopup';
import usePopup from '@hooks/usePopup';
import { UserInfoType } from '@typedef/mypage.types';
import React, { RefObject } from 'react';
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
  img: 'data:image/jpeg;base64,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',
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
