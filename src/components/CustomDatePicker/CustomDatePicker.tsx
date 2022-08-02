import React, { useContext, useEffect } from 'react';
import DatePicker from 'react-multi-date-picker';
import { useAppSelector } from '../../store/hooks';
import { getDatePickerMode } from '../../feautures/datePicker/datePickerSlice';
import { MainPageContext } from '../../feautures/main/context';

const CustomDatePicker = () => {
  const datePickerMode = useAppSelector(getDatePickerMode);
  const { values, setValues } = useContext(MainPageContext);

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
        onChange={setValues}
        format={datePickerMode[0] === 'YEAR' ? 'YYYY' : datePickerMode[0] === 'MONTH' ? 'MM.YYYY' : 'DD.MM.YYYY'}
      />
    </div>
  );
};

export default CustomDatePicker;
