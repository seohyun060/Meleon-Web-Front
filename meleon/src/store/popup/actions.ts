import { UPDATE_POPUP, RESET_POPUP } from './modules/actionType';

export const updatePopup = (payload: JSX.Element) => {
  return {
    type: UPDATE_POPUP,
    payload,
  };
};

export const resetPopup = () => {
  return {
    type: RESET_POPUP,
  };
};

export type PopupActionType =
  | ReturnType<typeof updatePopup>
  | ReturnType<typeof resetPopup>;
