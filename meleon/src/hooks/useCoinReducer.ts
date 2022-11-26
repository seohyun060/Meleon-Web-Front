import { buyCoin, usedCoin } from '@store/coin/actions';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function useCoinReducer() {
  const dispatch = useDispatch();
  const { coin, usedCoin: useCoin } = useSelector(
    (state: RootState) => state.coinReducer,
  );

  const __useCoin = useCallback(
    (coin: number) => {
      dispatch(usedCoin(coin));
    },
    [dispatch, usedCoin],
  );

  const __buyCoin = useCallback(
    (coin: number) => {
      dispatch(buyCoin(coin));
    },
    [dispatch, buyCoin],
  );

  return {
    coin,
    useCoin,
    __buyCoin,
    __useCoin,
  };
}
