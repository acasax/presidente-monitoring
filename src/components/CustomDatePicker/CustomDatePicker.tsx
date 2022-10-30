import React from 'react';
import DatePicker from 'react-multi-date-picker';
import { StartWorkTimeOfIKS } from '../../utils/Constants';

const CustomDatePicker = ({
  header,
  yearPicker,
  monthPicker,
  value,
  onChange,
  format,
}: any) => (
  <div className="_data-picker-container">
    <div className="_data-picker-label-container">
      <p className="_date-picker-label">{header}</p>
    </div>
    <DatePicker
      inputClass="_date-picker-input"
      onlyYearPicker={yearPicker}
      onlyMonthPicker={monthPicker}
      multiple
      value={value}
      onChange={onChange}
      format={format}
      minDate={StartWorkTimeOfIKS}
      maxDate={new Date()}
    />
  </div>
);

export default CustomDatePicker;
