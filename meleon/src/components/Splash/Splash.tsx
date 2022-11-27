import React from 'react';
import './styles/splash.style.scss';
import { useNavigate } from 'react-router-dom';
import { images } from 'src/assets/images';

const Splash = () => {
  const navigate = useNavigate();
  return (
    <div className='splash'>
      {/* <div className='splash-box'>
        <div>완벽한 결과를 위한</div>
        <div>스톡 에셋 플랫폼 멜레온</div>
        <div className='little'>
          음원 부터 영상, 3D 까지 필요한 에셋을 한번에
        </div>
      </div> */}
      <video
        className='splash-video'
        src={images.video.splash}
        height={100}
        controls={false}
        autoPlay
        muted
        controlsList='nodownload'></video>

      <div className='splash-button'>
        <button
          className='skip-fix'
          onClick={() => {
            sessionStorage.setItem('@issplashskip', JSON.stringify(true));
            navigate('/main');
          }}>
          항상 건너뛰기
        </button>
        <button
          className='skip-now'
          onClick={() => {
            navigate('/main');
          }}>
          건너뛰기
        </button>
      </div>
    </div>
  );
};

export default Splash;
