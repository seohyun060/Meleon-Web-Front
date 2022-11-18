
import { CoinHistoryItemType } from '@typedef/mypage.types';
import React from 'react'
import CoinHistoryItem from '../components/CoinHistoryItem'

type Props = {
  coinHistoryItem: CoinHistoryItemType;
}

const CoinHistoryItemContainer = (props: Props) => {
  return (
    <CoinHistoryItem {...props} />
  )
}

export default CoinHistoryItemContainer