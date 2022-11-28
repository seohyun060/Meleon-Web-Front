import { UserInfoType } from '@typedef/mypage.types';
import React from 'react';
import { images } from 'src/assets/images';
import '../styles/userinfo.style.css';

type Props = {
  coin: number;
  useCoin: number;
  profile: string | null;
  userInfo: UserInfoType;
  onLogoutClicked: () => void;
  onBenefitClicked: () => void;
};

const user = {
  name: 'Jinny',
  email: 'jinny@naver.com',
  img: images.profile_placeholder,
};

const UserInfo = ({
  coin,
  useCoin,
  profile,
  userInfo,
  onBenefitClicked,
  onLogoutClicked,
}: Props) => {
  return (
    <section className='user-info-root'>
      <div className='wrapper'>
        <div className='profile-container'>
          <div className='col'>
            <img
              className='user-img'
              src={profile ? profile : user.img}
              alt='img_user'
            />
          </div>
          <div className='col'>
            <div className='row'>
              <span className='name'>{userInfo.nickname}</span>
              <button className='logout' onClick={onLogoutClicked}>
                로그아웃
              </button>
            </div>
            <div className='row'>
              <span className='email'>{userInfo.email}</span>
            </div>
            <div className='row'>
              <button className='benefit' onClick={onBenefitClicked}>
                등급 기준 및 혜택
              </button>
            </div>
          </div>
        </div>
        <div className='coin-progress'>
          <span className='text'>
            {5000 - useCoin} 코인 더 사용 시{' '}
            <span className='colored'>2등급 달성!</span>
          </span>
          <div className='progress-bar'>
            <div className='inner-bar'>
              <svg className='cursor' width={12} height={8}>
                <polygon points='0,0 12,0 6,8' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;
