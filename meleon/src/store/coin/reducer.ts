import { AutoCoinSettingType, CoinActionType } from './actions';
import { BUY_COIN, UPDATE_AUTO, USE_COIN } from './module/actionType';

const initialState: CoinStateType = {
  coin: 3000,
  usedCoin: 1200,
  autoSetting: {
    minimum: 3000,
    coinNumber: 200,
  },
};

export type CoinStateType = {
  coin: number;
  usedCoin: number;
  autoSetting: AutoCoinSettingType;
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
        ...state,
        coin: state.coin - payload,
        usedCoin: state.usedCoin + payload,
      };
    case UPDATE_AUTO:
      return {
        ...state,
        autoSetting: payload,
      };
    default:
      return state;
  }
}
