import React, { useCallback, useState } from 'react';
import meleon from '../../assets/image/meleon.png';
import CInputContainer from '@components/common/CInput/containers/CInputContainer';
import '../Login/styles/login.style.scss';
const Login = () => {
  const [memberToggle, setmemberToggle] = useState(false);
  const onSetmemberToggle = useCallback(() => {
    setmemberToggle((prev) => !prev);
  }, []);
  const [id, setid] = useState('');
  const [password, setpassword] = useState('');

  const onChangePassword = useCallback((e: any) => {
    setpassword(e.target.value);
  }, []);
  const onDeleteId = useCallback(() => {
    setid('');
  }, []);

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
        <CInputContainer
          inputId='id'
          value={id}
          placeholder='아이디를 입력해주세요'
          label='아이디'
          onValueChanged={setid}
          onDeleteBtnClicked={onDeleteId}
        />
        <CInputContainer
          inputId='password'
          value={password}
          placeholder='패스워드를 입력해주세요'
          label='패스워드'
          onValueChanged={setpassword}
          inputType='password'
        />
      </div>
    </div>
  );
};

export default Login;
