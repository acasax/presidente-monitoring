import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { TAttendancePageContext } from './AttendanceModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getAttendanceDatePickerMode,
  setAttendanceBestAndWorstDaySelectedDates,
  setAttendancePickedDate,
} from './attendanceSlice';
import { formatDate } from '../../utils/dateTime/functionsDateTime';

export const AttendancePageContext = createContext({} as TAttendancePageContext);

const AttendancePageContextContainer = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getAttendanceDatePickerMode);
  const [bestAndWorstDayValues, setBestAndWorstDayValues] = useState<any>([]);
  const dispatch = useAppDispatch();

  const handleChoseDate = () => {
    const selectedDate = values.map((x) => formatDate(new DateObject(x), datePickerMode));
    dispatch(setAttendancePickedDate(selectedDate));
  };

  const handleChoseBestAndWorstDayDate = () => {
    // eslint-disable-next-line max-len
    const selectedDate = bestAndWorstDayValues.map((x) => formatDate(new DateObject(x), ['MONTH2']));
    dispatch(setAttendanceBestAndWorstDaySelectedDates(selectedDate));
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
    <AttendancePageContext.Provider value={exportData}>{children}</AttendancePageContext.Provider>
  );
};

export default AttendancePageContextContainer;
