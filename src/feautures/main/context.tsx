import React, { createContext, ReactNode, useMemo, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { TMainPageContext } from './MainModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDatePickerMode, setPickedDate } from '../datePicker/datePickerSlice';
import { formatDate } from '../../utils/dateTime/functionsDateTime';

export const MainPageContext = createContext({} as TMainPageContext);

const MainPageContextContainer = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getDatePickerMode);
  const dispatch = useAppDispatch();

  const handleChoseDate = () => {
    const selectedDate = values.map((x) => formatDate(new DateObject(x), datePickerMode));
    dispatch(setPickedDate(selectedDate));
  };

  const exportData = useMemo(
    () => (
      {
        values,
        setValues,
        handleChoseDate,
      }),
    [
      values,
      setValues,
      handleChoseDate,
    ],
  );
  return (
    <MainPageContext.Provider value={exportData}>{children}</MainPageContext.Provider>
  );
};

export default MainPageContextContainer;
