import { CoinActionTypes } from './actions';

const initialState = 2000;

const coinReducer = (
  state = initialState,
  { type, payload }: CoinActionTypes,
): number => {
  switch (type) {
    case 'ADD_COIN':
      return state + payload;
    case 'SUB_COIN':
      return state - payload;
    default:
      return state;
  }
};

export default coinReducer;
