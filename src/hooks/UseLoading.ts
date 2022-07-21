import { useCallback } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { loadingStatus, setLoadingStatus } from '../components/SpinnerLoading/loadingSlice';

// eslint-disable-next-line import/prefer-default-export
export const useLoading = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(loadingStatus);

  const setLoading = useCallback(() => {
    dispatch(setLoadingStatus(true));
  }, [dispatch]);

  const resetLoading = useCallback(() => {
    dispatch(setLoadingStatus(false));
  }, [dispatch]);

  return {
    loading,
    setLoading,
    resetLoading,
  };
};
