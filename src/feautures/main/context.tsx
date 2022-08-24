import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { TMainPageContext } from './MainModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getMainDatePickerMode, setMainBestAndWorstDaySelectedDates, setMainPickedDate } from './mainSlice';
import { formatDate } from '../../utils/dateTime/functionsDateTime';

export const MainPageContext = createContext({} as TMainPageContext);

const MainPageContextContainer = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getMainDatePickerMode);
  const [bestAndWorstDayValues, setBestAndWorstDayValues] = useState<any>([]);
  const dispatch = useAppDispatch();

  const handleChoseDate = () => {
    const selectedDate = values.map((x) => formatDate(new DateObject(x), datePickerMode));
    dispatch(setMainPickedDate(selectedDate));
  };

  const handleChoseBestAndWorstDayDate = () => {
    // eslint-disable-next-line max-len
    const selectedDate = bestAndWorstDayValues.map((x) => formatDate(new DateObject(x), ['MONTH2']));
    dispatch(setMainBestAndWorstDaySelectedDates(selectedDate));
  };

  useEffect(() => {
    setValues([]);
  }, [datePickerMode]);

  const exportData = useMemo(
    () => (
      {
        values,
        setValues,
        handleChoseDate,
        bestAndWorstDayValues,
        setBestAndWorstDayValues,
        handleChoseBestAndWorstDayDate,
      }),
    [
      values,
      setValues,
      handleChoseDate,
      bestAndWorstDayValues,
      setBestAndWorstDayValues,
      handleChoseBestAndWorstDayDate,
    ],
  );
  return (
    <MainPageContext.Provider value={exportData}>{children}</MainPageContext.Provider>
  );
};

export default MainPageContextContainer;
