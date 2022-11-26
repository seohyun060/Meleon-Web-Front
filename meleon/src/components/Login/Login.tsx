import React, { useCallback, useState } from 'react';
import meleon from '../../assets/image/meleon.png';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import ic_select from '../../assets/image/ic_select.png';
import ic_unselect from '../../assets/image/ic_unselect.png';
import kakao from '../../assets/image/ic-sns-kakao.png';
import naver from '../../assets/image/ic-sns-naver.png';
import '../Login/styles/login.style.scss';
import { useNavigate } from 'react-router-dom';

type Props = {};

const testUser = {
  id: 'testUser',
  password: 'testtest',
};

export let loginChecked: boolean;

const Login = ({}: Props) => {
  const navigate = useNavigate();
  const [memberToggle, setmemberToggle] = useState(false);
  const [checkToggle, setcheckToggle] = useState(false);
  const [check, setcheck] = useState(false);
  const onSetmemberToggle = useCallback(() => {
    setmemberToggle((prev) => !prev);
  }, []);
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');

  const onDeleteId = useCallback(() => {
    setid('');
  }, []);

  const onSetcheckToggle = useCallback(() => {
    setcheckToggle((prev) => !prev);
  }, []);

  const onLogin = useCallback(() => {
    if (id !== testUser.id || password !== testUser.password) {
      alert('아이디, 패스워드를 확인해주세요');
      return;
    }
    window.localStorage.setItem('check', 'login');
    console.log(id, password);
    navigate('/main');
  }, [id, password]);

  return (
    <div className='frame'>
      <div className='login'>
        <img className='login-meleon' src={meleon} />
        {memberToggle ? (
          <>
            <div className={`login-member-clicked`} onClick={onSetmemberToggle}>
              일반 회원
            </div>
            <div className={`login-member`} onClick={onSetmemberToggle}>
              판매자 회원
            </div>
          </>
        ) : (
          <>
            <div className={`login-member`} onClick={onSetmemberToggle}>
              일반 회원
            </div>
            <div className={`login-member-clicked`} onClick={onSetmemberToggle}>
              판매자 회원
            </div>
          </>
        )}

        <div className='login-id'>
          <CInputContainer
            inputId='id'
            value={id}
            placeholder='아이디를 입력해주세요'
            label='아이디'
            onValueChanged={setid}
            onDeleteBtnClicked={onDeleteId}
          />
        </div>
        <div className='login-password'>
          <CInputContainer
            inputId='password'
            value={password}
            placeholder='패스워드를 입력해주세요'
            label='비밀번호'
            onValueChanged={setpassword}
            inputType='password'
          />
        </div>
        <div className='login-check'>
          <div className='maintain'>
            {checkToggle ? (
              <img
                className='auto'
                onClick={onSetcheckToggle}
                src={ic_unselect}></img>
            ) : (
              <img
                className='auto'
                onClick={onSetcheckToggle}
                src={ic_select}></img>
            )}
            <span>로그인 유지</span>
          </div>
          <span className='find'>아이디/비밀번호 찾기</span>
        </div>

        <button className='login-confirm' onClick={onLogin}>
          로그인
        </button>

        <div className='login-or'>
          <hr></hr>
          <span>Or</span>
          <hr></hr>
        </div>
        <button className='login-kakao'>
          <img src={kakao} />
          <span>카카오로 로그인</span>
        </button>
        <button className='login-naver'>
          <img src={naver} />
          <span>네이버로 로그인</span>
        </button>
        <span className='login-yet'>아직 멜레온 회원이 아니신가요?</span>
        <span className='login-sign'>회원가입 하기</span>
      </div>
    </div>
  );
};

export default Login;
