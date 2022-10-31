import { useCallback } from 'react';
import { useAppDispatch } from '../store/hooks';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../components/CustomAlert/alertSlice';
import { AlertStatus } from '../utils/Constants';
import { Texts } from '../utils/Texts';

export const useAlert = () => {
  const dispatch = useAppDispatch();

  const openAlert = useCallback((msg: any, status: AlertStatus) => {
    dispatch(setAlertStatus(status));
    dispatch(setAlertMsg(msg));
    dispatch(setAlertOpenStatus(true));
  }, []);

  const closeAlert = useCallback(() => {
    dispatch(setAlertOpenStatus(false));
    dispatch(clearAlertMsg());
  }, []);

  const noChosenDateOrLocation = useCallback((
    selectLocationsLength: number,
    pickedDateLength: number,
  ) => {
    if (selectLocationsLength === 0) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(Texts.noPickedLocation));
      dispatch(setAlertOpenStatus(true));
      return false;
    }
    if (pickedDateLength === 0) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(Texts.noPickedDate));
      dispatch(setAlertOpenStatus(true));
      return false;
    }
    return true;
  }, []);

  const noChosenDateOrLocationForBestAndWorstPart = useCallback((
    selectLocationsLength?: number,
    pickedDateLength?: number,
  ) => {
    if (selectLocationsLength && selectLocationsLength === 0) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(Texts.noPickedLocationForBestAndWorst));
      dispatch(setAlertOpenStatus(true));
      return false;
    }
    if (pickedDateLength && pickedDateLength === 0) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(Texts.noPickedDateForBestAndWorst));
      dispatch(setAlertOpenStatus(true));
      return false;
    }
    return true;
  }, []);

  return {
    closeAlert,
    openAlert,
    noChosenDateOrLocation,
    noChosenDateOrLocationForBestAndWorstPart,
  };
};
