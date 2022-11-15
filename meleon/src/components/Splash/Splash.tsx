import React from 'react';
import './styles/splash.style.scss';
import { useNavigate } from 'react-router-dom';

const Splash = () => {
  const navigate = useNavigate();
  return (
    <div className='splash'>
      <div className='splash-box'>
        <div>완벽한 결과를 위한</div>
        <div>스톡 에셋 플랫폼 멜레온</div>
        <div className='little'>
          음원 부터 영상, 3D 까지 필요한 에셋을 한번에
        </div>
      </div>

      <div className='splash-button'>
        <button className='skip-fix'>항상 건너뛰기</button>
        <button className='skip-now'>건너뛰기</button>
      </div>
    </div>
  );
};

export default Splash;
