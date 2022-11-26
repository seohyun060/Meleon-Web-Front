import { refreshReducer } from '@store/refresh/actions';
import { RootState } from '@store/rootReducer';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function useRefresh() {
  const dispatch = useDispatch();

  const [refresh, setRefresh] = useState(false);
  const trigger = useSelector((state: RootState) => state.refreshReducer);

  const __useRefresh = useCallback(() => {
    dispatch(refreshReducer());
  }, [dispatch]);

  useEffect(() => {
    setRefresh((prev) => !prev);
  }, [trigger]);

  return {
    refresh,
    __useRefresh,
  };
}
