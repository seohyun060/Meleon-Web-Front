import { BUY_COIN, USE_COIN } from './module/actionType';

export const buyCoin = (payload: number) => {
  return {
    type: BUY_COIN,
    payload,
  };
};

export const usedCoin = (payload: number) => {
  return {
    type: USE_COIN,
    payload,
  };
};

export type CoinActionType =
  | ReturnType<typeof buyCoin>
  | ReturnType<typeof usedCoin>;
