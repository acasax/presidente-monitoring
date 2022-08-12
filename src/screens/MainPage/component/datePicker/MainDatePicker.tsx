import React, { useContext } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { getDatePickerMode } from '../../../../feautures/main/mainSlice';
import { MainPageContext } from '../../../../feautures/main/context';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';

const MainDatePicker = () => {
  const datePickerMode = useAppSelector(getDatePickerMode);
  const { values, setValues } = useContext(MainPageContext);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={datePickerMode[0] === 'YEAR'}
      monthPicker={datePickerMode[0] === 'MONTH'}
      value={values}
      onChange={setValues}
      format={datePickerMode[0] === 'YEAR' ? 'YYYY' : datePickerMode[0] === 'MONTH' ? 'MM.YYYY' : 'DD.MM.YYYY'}
    />
  );
};

export default MainDatePicker;
