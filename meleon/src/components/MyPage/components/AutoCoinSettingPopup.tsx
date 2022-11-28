import useCoinReducer from '@hooks/useCoinReducer';
import usePopup from '@hooks/usePopup';
import React, { useCallback, useState } from 'react';
import { images } from 'src/assets/images';
import '../styles/autosetting.popup.style.css';

type Props = {};

const AutoCoinSettingPopup = (props: Props) => {
  const { __hidePopup } = usePopup();
  const { autoSetting, __updateAutoSetting } = useCoinReducer();

  const [minimum, setMinimum] = useState(autoSetting.minimum);
  const [coinNumber, setCoinNumber] = useState(autoSetting.coinNumber);

  const onPopupClosed = useCallback(() => {
    __hidePopup();
  }, [__hidePopup]);

  const onMinimumChanged = useCallback((coin: string) => {
    let value = parseInt(coin);
    if (coin === '') {
      setMinimum(0);
      return;
    }
    if (!value) {
      return;
    }
    setMinimum(value);
  }, []);

  const onCoinNumber = useCallback((coin: string) => {
    let value = parseInt(coin);
    if (coin === '') {
      setMinimum(0);
      return;
    }
    if (!value) {
      return;
    }
    setCoinNumber(value);
  }, []);

  const onStoreButtonClick = useCallback(() => {
    __updateAutoSetting({
      minimum: minimum,
      coinNumber: coinNumber,
    });
    __hidePopup();
  }, [minimum, coinNumber, __updateAutoSetting, __hidePopup]);

  return (
    <div className='autosetting-popup-root'>
      <div className='header'>
        <h2 className='title'>등급기준 및 혜택 안내</h2>
        <button className='close-button' onClick={onPopupClosed}>
          <img src={images.close} alt='ic_close' />
        </button>
      </div>
      <div className='content'>
        <div className='item'>
          <div className='label'>하한기준</div>
          <input
            type='text'
            value={minimum}
            onChange={(e) => onMinimumChanged(e.target.value)}
          />
          <span className='text'>Coin</span>
        </div>
        <div className='item'>
          <div className='label'>자동충전코인</div>
          <input
            type='text'
            value={coinNumber}
            onChange={(e) => onCoinNumber(e.target.value)}
          />
          <span className='text'>Coin</span>
        </div>
        <button className='download' onClick={onStoreButtonClick}>
          저장하기
        </button>
      </div>
    </div>
  );
};

export default AutoCoinSettingPopup;
