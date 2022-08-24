import React, { useContext } from 'react';
import { MainPageContext } from '../../../../feautures/main/context';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';
import { useAppSelector } from '../../../../store/hooks';
import { getMainBestAndWorstDayDatePickerMode } from '../../../../feautures/main/mainSlice';

const BestAndWorstDayDatePicker = () => {
  const { bestAndWorstDayValues, setBestAndWorstDayValues } = useContext(MainPageContext);
  const bestAndWorstDayDatePickerMode = useAppSelector(getMainBestAndWorstDayDatePickerMode);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={bestAndWorstDayDatePickerMode[0] === 'YEAR'}
      monthPicker={bestAndWorstDayDatePickerMode[0] === 'MONTH'}
      value={bestAndWorstDayValues}
      onChange={setBestAndWorstDayValues}
      format={bestAndWorstDayDatePickerMode[0] === 'YEAR' ? 'YYYY' : 'MM.YYYY'}
    />
  );
};

export default BestAndWorstDayDatePicker;
