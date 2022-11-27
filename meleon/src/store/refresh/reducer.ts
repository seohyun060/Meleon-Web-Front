import { RefreshActionType } from './actions';
import { REFRESH_REDUCER } from './module/actionType';

const initialState: boolean = false;

export default function CoinReducer(
  state = initialState,
  { type }: RefreshActionType,
): boolean {
  switch (type) {
    case REFRESH_REDUCER:
      return !state;
    default:
      return state;
  }
}
