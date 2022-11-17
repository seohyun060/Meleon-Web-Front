import React, { useEffect, useState } from 'react';
import './styles/gnb.style.scss';
import { images } from 'src/assets/images';

import loginChecked from '../../Login/Login';
import { useNavigate } from 'react-router-dom';
type Props = {
  location: String;
};
type UserData = {
  name: String;
  coin: number;
};

const user: UserData = {
  name: 'Jinny',
  coin: 232,
};
const GNB = ({ location }: Props) => {
  const navigate = useNavigate();
  const [music, setMusic] = useState('');
  const [video, setVideo] = useState('');
  const [template, setTemplate] = useState('');
  const [picture, setPicture] = useState('');
  const [illust, setIllust] = useState('');
  const [threeD, setThreeD] = useState('');
  const [custom, setCustom] = useState('');
  const [check, setCheck] = useState<String | null>();
  //const check = window.localStorage.getItem('check');
  const [menuToggle, setMenuToggle] = useState(false);

  const [visible, setvisible] = useState('');
  useEffect(() => {
    setCheck(window.localStorage.getItem('check'));
    if (location === '/' || location === '/login') {
      setvisible('-off');
    } else if (check === 'login') {
      setvisible('-login');
    } else if (check === 'logout') {
      setvisible('-logout');
    }
    setMusic('');
    setVideo('');
    setTemplate('');
    setPicture('');
    setIllust('');
    setThreeD('');
    setCustom('');
    if (location === '/music') {
      setMusic('-on');
    } else if (location === '/video') {
      setVideo('-on');
    } else if (location === '/template') {
      setTemplate('-on');
    } else if (location === '/picture') {
      setPicture('-on');
    } else if (location === '/illust') {
      setIllust('-on');
    } else if (location === '/threeD') {
      setThreeD('-on');
    } else if (location === '/custom') {
      setCustom('-on');
    }
  }, [location, check]);

  return (
    <div className={`gnb${visible}`}>
      <img
        src={images.menu_white}
        className='gnb-bar'
        onClick={() => {
          setMenuToggle(true);
        }}></img>
      {menuToggle && (
        <div className='side-menu'>
          <div className='side-menu-bar'>
            <img
              src={images.close}
              onClick={() => {
                setMenuToggle(false);
              }}
            />
            <button
              onClick={() => {
                navigate('/music');
              }}>
              음원
            </button>
            <button
              onClick={() => {
                navigate('/video');
              }}>
              영상
            </button>
            <button
              onClick={() => {
                navigate('/template');
              }}>
              영상템플릿
            </button>
            <button
              onClick={() => {
                navigate('/picture');
              }}>
              사진
            </button>
            <button
              onClick={() => {
                navigate('/illust');
              }}>
              일러스트
            </button>
            <button
              onClick={() => {
                navigate('/threeD');
              }}>
              3D
            </button>
            <button
              onClick={() => {
                navigate('/custom');
              }}>
              맞춤제작
            </button>
          </div>
        </div>
      )}

      <img src={images.logo_small} className='logo' />
      <div className='menu'>
        <button
          className={`menu-music${music}`}
          onClick={() => {
            navigate('/music');
          }}>
          음원
        </button>
        <button
          className={`menu-video${video}`}
          onClick={() => {
            navigate('/video');
          }}>
          영상
        </button>
        <button
          className={`menu-template${template}`}
          onClick={() => {
            navigate('/template');
          }}>
          영상템플릿
        </button>

        <button
          className={`menu-picture${picture}`}
          onClick={() => {
            navigate('/picture');
          }}>
          사진
        </button>
        <button
          className={`menu-illust${illust}`}
          onClick={() => {
            navigate('/illust');
          }}>
          일러스트
        </button>
        <button
          className={`menu-threeD${threeD}`}
          onClick={() => {
            navigate('/threeD');
          }}>
          3D
        </button>
        <button
          className={`menu-custom${custom}`}
          onClick={() => {
            navigate('/custom');
          }}>
          맞춤제작
        </button>
      </div>
      <div className='gnb-user'>
        <div className='welcome'>환영합니다 {user.name}</div>
        <img className='coin-image' src={images.coin_white} />
        <div className='coin-number'>Coin {user.coin}</div>
        <img className='cart' src={images.cart_white} />
        <img src={images.user_white} />
      </div>
      <div className='gnb-button'>
        <button
          className='gnb-button-login'
          onClick={() => {
            navigate('/login');
          }}>
          로그인
        </button>
        <button className='gnb-button-sign'>회원가입</button>
      </div>
    </div>
  );
};

export default GNB;
