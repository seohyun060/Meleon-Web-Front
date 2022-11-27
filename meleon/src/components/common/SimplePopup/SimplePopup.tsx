import usePopup from '@hooks/usePopup';
import React, { useCallback } from 'react';
import { images } from 'src/assets/images';
import './styles/simple.popup.style.css';

type Props = { content: string; onConfirm?: () => void };

const SimplePopup = ({ content, onConfirm }: Props) => {
  const { __hidePopup } = usePopup();

  const onCloseClicked = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  return (
    <div className='simple-popup-root'>
      <div className='header-container'>
        <span className='title'>{'알림'}</span>
        <button onClick={onCloseClicked} className='close-btn'>
          <img src={images.close} alt='close-btn' />
        </button>
      </div>
      <div className='content-container'>{content}</div>
      <div className='button-wrapper'>
        <button
          className='close-button'
          onClick={onConfirm ? onConfirm : onCloseClicked}>
          확인
        </button>
      </div>
    </div>
  );
};

export default SimplePopup;
