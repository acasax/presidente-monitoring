import React from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { clearPickedDate, getDatePickerMode, setDatePickerMode } from '../../../../feautures/datePicker/datePickerSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { DateModeSelectItems } from '../../../../constants/select';

const MainDatePickerModeSelect = () => {
  const dataPickerMode = useAppSelector(getDatePickerMode);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof dataPickerMode>) => {
    const {
      target: { value },
    } = event;
    dispatch(clearPickedDate());
    dispatch(setDatePickerMode(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <CustomSelect
      header="Format datuma"
      selectedItems={dataPickerMode}
      handleChange={handleChange}
      items={DateModeSelectItems}
      multiple={false}
      width={200}
      id="date-picker-mode-main"
    />
  );
};

export default MainDatePickerModeSelect;
