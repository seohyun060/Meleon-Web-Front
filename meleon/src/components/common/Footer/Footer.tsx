import React, { useEffect, useState } from 'react';
import youtube from '../../../assets/image/ic-sns-youtube.png';
import facebook from '../../../assets/image/ic-sns-facebook.png';

import instagram from '../../../assets/image/ic-sns-instagram.png';

import './styles/footer.style.scss';
type Props = {
  location: String;
};
const Footer = ({ location }: Props) => {
  const [visible, setvisible] = useState('');
  useEffect(() => {
    if (location === '/' || location === '/login') {
      setvisible('-off');
    }
    console.log(location, visible);
  }, []);

  return (
    <div className={`footer${visible}`}>
      {/* <div className='footer-search'>
        <div className='keyword'>
          <div className='keyword-title'>검색 키워드 {'>'}</div>
          <div className='keyword-main'>
            <div>#따뜻한</div>
            <div>#문화 및 종교</div>
            <div>#비즈니스</div>
            <div>#카페</div>
            <div>#공연</div>
            <div>#신나는</div>
            <div>#위로</div>
            <div>#꽃</div>
            <div>#스타트업</div>
            <div>#하늘</div>
            <div>#콘서트</div>
            <div>#퍼포먼스</div>
            <div>#응원</div>
            <div>하늘</div>
            <div>#서비스</div>
            <div>#피크닉</div>
            <div>#배경음악</div>
            <div>#다양한</div>
          </div>
        </div>
      </div> */}
      <div className='footer-info'>
        <div className='footer-info-location'>
          <button>서비스 이용약관</button>
          <span>|</span>
          <button>라이선스 약관</button>
          <span>|</span>
          <button>개인정보 처리 방침</button>
          <span>|</span>
          <button>공지사항</button>
          <p>
            주식회사:유니크 솔루션 | 대표이사 : OOO
            <br />
            사업자 등록번호 : OOO-OO-OOOOO | 주소 :대구광역시 중구 중앙대로 123,
            12=12층
            <br />
            우편번호: 123123 | 통신판매업신고번호: 1234-서울서초-1234
            <br />© 2019-2022. 4by4 Inc. All Rights Reserved. |
            <button>사업자 정보확인</button>
          </p>
        </div>
        <div className='footer-info-address'>
          <div className='address-white'>고객센터</div>
          <div className='address-gray'>123-123-1234</div>
          <div className='address-white'>이메일</div>
          <div className='address-gray'>testemail@test.com</div>
        </div>
        <div className='footer-info-social'>
          <div>소셜미디어</div>
          <img src={youtube}></img>
          <img src={facebook}></img>
          <img src={instagram}></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
