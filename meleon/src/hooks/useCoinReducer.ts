import { buyCoin, useCoin } from '@store/coin/actions';
import { RootState } from '@store/rootReducer';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

export default function useCoinReducer() {
  const dispatch = useDispatch();
  const { coin } = useSelector((state: RootState) => state.coinReducer);

  const __useCoin = useCallback(
    (coin: number) => {
      dispatch(useCoin(coin));
    },
    [dispatch, useCoin],
  );

  const __buyCoin = useCallback(
    (coin: number) => {
      dispatch(buyCoin(coin));
    },
    [dispatch, buyCoin],
  );

  return {
    coin,
    __buyCoin,
    __useCoin,
  };
}
