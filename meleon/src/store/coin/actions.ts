import { ADD_COIN, SUB_COIN } from './modules/actionType';

export const addCoinAction = (payload: number) => ({
  type: ADD_COIN,
  payload,
});

export const subCoinAction = (payload: number) => ({
  type: SUB_COIN,
  payload,
});

export type CoinActionTypes =
  | ReturnType<typeof addCoinAction>
  | ReturnType<typeof subCoinAction>;
