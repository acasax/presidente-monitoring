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
  const [attendanceValues, setAttendanceValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getAttendanceDatePickerMode);
  const [bestAndWorstDayValuesAttendance, setBestAndWorstDayValuesAttendance] = useState<any>([]);
  const dispatch = useAppDispatch();

  const handleChoseDateAttendance = () => {
    const selectedDate = attendanceValues.map((x) => formatDate(new DateObject(x), datePickerMode));
    dispatch(setAttendancePickedDate(selectedDate));
  };

  const handleChoseBestAndWorstDayDateAttendance = () => {
    // eslint-disable-next-line max-len
    const selectedDate = bestAndWorstDayValuesAttendance.map((x) => formatDate(new DateObject(x), ['MONTH2']));
    dispatch(setAttendanceBestAndWorstDaySelectedDates(selectedDate));
  };

  useEffect(() => {
    setAttendanceValues([]);
  }, [datePickerMode]);

  const exportData = useMemo(
    () => (
      {
        attendanceValues,
        setAttendanceValues,
        handleChoseDateAttendance,
        bestAndWorstDayValuesAttendance,
        setBestAndWorstDayValuesAttendance,
        handleChoseBestAndWorstDayDateAttendance,
      }),
    [
      attendanceValues,
      setAttendanceValues,
      handleChoseDateAttendance,
      bestAndWorstDayValuesAttendance,
      setBestAndWorstDayValuesAttendance,
      handleChoseBestAndWorstDayDateAttendance,
    ],
  );
  return (
    <AttendancePageContext.Provider value={exportData}>{children}</AttendancePageContext.Provider>
  );
};

export default AttendancePageContextContainer;
