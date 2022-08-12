import React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  clearBestAndWorstDaySelectedDates,
  getBestAndWorstDayMode,
  setBestAndWorstDayMode,
} from '../../../../feautures/main/mainSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { DateNoDayModeSelectItems } from '../../../../constants/select';

const MainBestAndWorstDayDatePickerModeSelect = () => {
  const dataPickerMode = useAppSelector(getBestAndWorstDayMode);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof dataPickerMode>) => {
    const {
      target: { value },
    } = event;
    dispatch(clearBestAndWorstDaySelectedDates());
    dispatch(setBestAndWorstDayMode(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <CustomSelect
      header="Format datuma"
      selectedItems={dataPickerMode}
      handleChange={handleChange}
      items={DateNoDayModeSelectItems}
      multiple={false}
      width={200}
      id="date-picker-mode-week-analytic-main"
    />
  );
};

export default MainBestAndWorstDayDatePickerModeSelect;
