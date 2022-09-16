import React, { useContext } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { getComparisonDatePickerMode } from '../../../../feautures/comparison/comparisonSlice';
import { ComparisonPageContext } from '../../../../feautures/comparison/context';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';

const ComparisonDatePicker = () => {
  const datePickerMode = useAppSelector(getComparisonDatePickerMode);
  const { comparisonValues, setComparisonValues } = useContext(ComparisonPageContext);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={datePickerMode[0] === 'YEAR'}
      monthPicker={datePickerMode[0] === 'MONTH'}
      value={comparisonValues}
      onChange={setComparisonValues}
      format={datePickerMode[0] === 'YEAR' ? 'YYYY' : datePickerMode[0] === 'MONTH' ? 'MM.YYYY' : 'DD.MM.YYYY'}
    />
  );
};

export default ComparisonDatePicker;
