import { addCoinAction, subCoinAction } from '@store/coin/actions';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useCoin() {
  const coin = useSelector((root: RootState) => root.coinReducer);
  const dispatch = useDispatch();

  const __addCoinAction = useCallback(
    (coin: number) => {
      dispatch(addCoinAction(coin));
    },
    [dispatch],
  );

  const __subCoinAction = useCallback(
    (subCoin: number) => {
      if (coin - subCoin < 0) {
        alert('사용 가능한 코인이 부족합니다.');
        return;
      }
      dispatch(subCoinAction(subCoin));
    },
    [coin, dispatch],
  );

  return {
    coin,
    __addCoinAction,
    __subCoinAction,
  };
}
