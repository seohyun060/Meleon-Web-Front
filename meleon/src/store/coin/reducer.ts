import { CoinActionType } from './actions';
import { BUY_COIN, USE_COIN } from './module/actionType';

const initialState: CoinStateType = {
  coin: 3000,
  usedCoin: 1200,
};

export type CoinStateType = {
  coin: number;
  usedCoin: number;
};

export default function CoinReducer(
  state: CoinStateType = initialState,
  { type, payload }: CoinActionType,
): CoinStateType {
  switch (type) {
    case BUY_COIN:
      return {
        ...state,
        coin: state.coin + payload,
      };
    case USE_COIN:
      return {
        coin: state.coin - payload,
        usedCoin: state.usedCoin + payload,
      };
    default:
      return state;
  }
}
