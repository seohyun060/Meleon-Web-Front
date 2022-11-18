import React from 'react';
import { PopupActionType } from './actions';

const initialState: PopStateType = {
  popup: null,
};

type PopStateType = {
  popup: JSX.Element | null;
};

export default function reducer(
  state: PopStateType = initialState,
  action: PopupActionType,
): PopStateType {
  switch (action.type) {
    case 'UPDATE_POPUP':
      return {
        popup: action.payload,
      };
    case 'RESET_POPUP':
      return {
        popup: null,
      };
    default:
      return state;
  }
}
