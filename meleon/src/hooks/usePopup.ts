import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { RootState } from '@store/rootReducer';
import { resetPopup, updatePopup } from '@store/popup/actions';

export default function usePopup() {
  const dispatch = useDispatch();
  const { popup } = useSelector((state: RootState) => state.popupReducer);

  const __showPopup = useCallback(
    (popup: JSX.Element) => {
      dispatch(updatePopup(popup));
    },
    [dispatch, updatePopup],
  );

  const __hidePopup = useCallback(() => {
    dispatch(resetPopup());
  }, [dispatch, resetPopup]);

  return {
    popup,
    __showPopup,
    __hidePopup,
  };
}
