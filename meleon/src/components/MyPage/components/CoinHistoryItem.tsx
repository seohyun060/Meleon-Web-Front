import { CoinHistoryItemType } from '@typedef/mypage.types';
import React from 'react';

type Props = {
  coinHistoryItem: CoinHistoryItemType;
};

const CoinHistoryItem = ({ coinHistoryItem }: Props) => {
  return (
    <div className='row'>
      <span className='col'>{coinHistoryItem.date}</span>
      <span className='col'>
        <img src={coinHistoryItem.img} alt='img' />
        <span className='text'>{coinHistoryItem.detail}</span>
      </span>
      <span className='col'>
        {coinHistoryItem.usedCoin.toLocaleString() + ' Coin'}
      </span>
      <span className='col'>
        {coinHistoryItem.remainCoin.toLocaleString() + ' Coin'}
      </span>
    </div>
  );
};

export default CoinHistoryItem;
