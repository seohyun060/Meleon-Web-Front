import { BuyOptionType } from '@typedef/components/common/BuyPopup/buy.popup.types';
import React, { ForwardedRef } from 'react';
import { images } from 'src/assets/images';
import './styles/buy.popup.styles.css';

type Props = {
  href: string;
  name: string;
  coin: number;
  item: string;
  options: BuyOptionType[];
  selectedOption: number;
  onOptionClicked: (idx: number) => void;
  onDownloadClicked: () => void;
  onCloseClicked: () => void;
};

const BuyPopup = React.forwardRef(
  (
    {
      name,
      href,
      coin,
      item,
      options,
      selectedOption,
      onDownloadClicked,
      onOptionClicked,
      onCloseClicked,
    }: Props,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <div className='buy-popup-root'>
        <div className='header-container'>
          <span className='title'>{'구매하기'}</span>
          <button onClick={onCloseClicked} className='close-btn'>
            <img src={images.close} alt='close-btn' />
          </button>
        </div>
        <div className='main-container'>
          <div className='options-container'>
            {options.map((item, idx) => {
              return (
                <button
                  disabled={item.isDisabled}
                  key={idx}
                  onClick={() => onOptionClicked(idx)}
                  className={`option-btn ${
                    selectedOption === idx ? 'active' : ''
                  } ${item.isDisabled ? 'disabled' : ''}`}>
                  {item.name}
                </button>
              );
            })}
          </div>
          <div className='info-container'>
            <div className='item'>
              <div className='label'>{'파일명: '}</div>
              <div className='value'>{item}</div>
            </div>
            <div className='item'>
              <div className='label'>{'결제 코인: '}</div>
              <div className='value'>{`${options[selectedOption].price} Coin`}</div>
            </div>
          </div>
          <div className='coin-container'>
            <div className='item'>
              <div className='label'>{'내 보유 코인: '}</div>
              <div className='value'>{`${coin.toLocaleString()} Coin`}</div>
            </div>
          </div>
          <button onClick={onDownloadClicked} className='download-btn'>
            {'다운로드'}
          </button>
          <a href={href} download={name} target={'_blank'} ref={ref} />
        </div>
      </div>
    );
  },
);

export default BuyPopup;
