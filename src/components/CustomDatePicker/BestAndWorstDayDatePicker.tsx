import React, { useContext } from 'react';
import DatePicker from 'react-multi-date-picker';
import { MainPageContext } from '../../feautures/main/context';

const BestAndWorstDayDatePicker = () => {
  const { bestAndWorstDayValues, setBestAndWorstDayValues } = useContext(MainPageContext);

  return (
    <div className="_data-picker-container">
      <div className="_data-picker-label-container">
        <p className="_date-picker-label">Izaberi datume</p>
      </div>
      <DatePicker
        inputClass="_date-picker-input"
        onlyMonthPicker
        value={bestAndWorstDayValues}
        onChange={setBestAndWorstDayValues}
        format="YYYY-MM"
      />
    </div>
  );
};

export default BestAndWorstDayDatePicker;
