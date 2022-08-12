import React, { useContext } from 'react';
import { MainPageContext } from '../../../../feautures/main/context';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';

const BestAndWorstDayDatePicker = () => {
  const { bestAndWorstDayValues, setBestAndWorstDayValues } = useContext(MainPageContext);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={false}
      monthPicker
      value={bestAndWorstDayValues}
      onChange={setBestAndWorstDayValues}
      format="YYYY-MM"
    />
  );
};

export default BestAndWorstDayDatePicker;
