import { BUY_COIN, UPDATE_AUTO, USE_COIN } from './module/actionType';

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

export type AutoCoinSettingType = {
  minimum: number;
  coinNumber: number;
};

export const updateAuto = (payload: AutoCoinSettingType) => {
  return {
    type: UPDATE_AUTO,
    payload,
  };
};

export type CoinActionType =
  | ReturnType<typeof buyCoin>
  | ReturnType<typeof updateAuto>
  | ReturnType<typeof usedCoin>;
