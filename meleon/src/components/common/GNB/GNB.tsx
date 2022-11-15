import React, { useEffect, useState } from 'react';
import './styles/gnb.style.scss';
import loginChecked from '../../Login/Login';
type Props = {
  location: String;
};
const GNB = ({ location }: Props) => {
  const check = window.localStorage.getItem('check');
  const [visible, setvisible] = useState('');
  useEffect(() => {
    if (location === '/' || location === '/login') {
      setvisible('-off');
    } else if (check === 'login') {
      setvisible('-login');
    } else if (check === 'logout') {
      setvisible('-logout');
    }
  }, [location]);

  return <div className={`gnb${visible}`}>GNB</div>;
};

export default GNB;
