import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { clearPickedDate, getDatePickerMode, setDatePickerMode } from '../../feautures/datePicker/datePickerSlice';

const DatePickerModeSelect = () => {
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
    <div className="_select-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-multiple-name-label">Format datuma</InputLabel>
        <Select
          labelId="demo-simple-select-standard-label"
          id="demo-simple-select-standard"
          value={dataPickerMode}
          onChange={handleChange}
          style={{ minWidth: '200px', maxWidth: '200px' }}
        >
          <MenuItem value="DAY">Dan</MenuItem>
          <MenuItem value="MONTH">Mesec</MenuItem>
          <MenuItem value="YEAR">Godina</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default DatePickerModeSelect;