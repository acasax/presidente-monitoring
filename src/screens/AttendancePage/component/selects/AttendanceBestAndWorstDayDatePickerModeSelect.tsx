import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  clearAttendanceBestAndWorstDaySelectedDates,
  getAttendanceBestAndWorstDayDatePickerMode,
  setAttendanceBestAndWorstDayMode,
} from '../../../../feautures/attendance/attendanceSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { DateNoDayModeSelectItems } from '../../../../constants/select';

const AttendanceBestAndWorstDayDatePickerModeSelect = () => {
  const dataPickerMode = useAppSelector(getAttendanceBestAndWorstDayDatePickerMode);
  const dispatch = useAppDispatch();

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const handleChange = (event: SelectChangeEvent<typeof dataPickerMode>) => {
    const {
      target: { value },
    } = event;
    dispatch(clearAttendanceBestAndWorstDaySelectedDates());
    dispatch(setAttendanceBestAndWorstDayMode(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <CustomSelect
      header="Format datuma"
      selectedItems={dataPickerMode}
      handleChange={handleChange}
      items={DateNoDayModeSelectItems}
      multiple={false}
      width={width > 600 ? 200 : width - 60}
      id="date-picker-mode-week-analytic-attendance"
    />
  );
};

export default AttendanceBestAndWorstDayDatePickerModeSelect;
