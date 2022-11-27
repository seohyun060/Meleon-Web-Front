import { REFRESH_REDUCER } from './module/actionType';

export function refreshReducer() {
  return {
    type: REFRESH_REDUCER,
  };
}

export type RefreshActionType = ReturnType<typeof refreshReducer>;
