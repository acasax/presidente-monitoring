import React, { useEffect, useState } from 'react';
import DatePicker, { DateObject } from 'react-multi-date-picker';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getDatePickerMode, setPickedDate } from '../../feautures/datePicker/datePickerSlice';
import { formatDate } from '../../utils/dateTime/functionsDateTime';

const CustomDatePicker = () => {
  const [values, setValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getDatePickerMode);
  // const pickedDate = useAppSelector(getSelectedDate);
  const dispatch = useAppDispatch();

  const handleChoseDate = (date: any) => {
    console.log(formatDate(new DateObject(date[date.length - 1]), datePickerMode));
    dispatch(setPickedDate(formatDate(new DateObject(date[date.length - 1]), datePickerMode)));
    setValues(date);
    console.log(values);
  };

  useEffect(() => {
    setValues([]);
  }, [datePickerMode]);

  return (
    <div className="_data-picker-container">
      <div className="_data-picker-label-container">
        <p className="_date-picker-label">Izaberi datume</p>
      </div>
      <DatePicker
        inputClass="_date-picker-input"
        onlyYearPicker={datePickerMode[0] === 'YEAR'}
        onlyMonthPicker={datePickerMode[0] === 'MONTH'}
        multiple
        value={values}
        onChange={handleChoseDate}
        format={datePickerMode[0] === 'YEAR' ? 'YYYY' : datePickerMode[0] === 'MONTH' ? 'MM.YYYY' : 'DD.MM.YYYY'}
      />
    </div>
  );
};

export default CustomDatePicker;
