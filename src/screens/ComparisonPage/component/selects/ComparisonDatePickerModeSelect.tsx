import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  clearComparisonSelectedDates,
  getComparisonDatePickerMode,
  setComparisonDatePickerMode,
} from '../../../../feautures/comparison/comparisonSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { DateModeSelectItems } from '../../../../constants/select';

const ComparisonDatePickerModeSelect = () => {
  const dataPickerMode = useAppSelector(getComparisonDatePickerMode);
  const dispatch = useAppDispatch();

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const handleChange = (event: SelectChangeEvent<typeof dataPickerMode>) => {
    const {
      target: { value },
    } = event;
    dispatch(clearComparisonSelectedDates());
    dispatch(setComparisonDatePickerMode(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <CustomSelect
      header="Format datuma"
      selectedItems={dataPickerMode}
      handleChange={handleChange}
      items={DateModeSelectItems}
      multiple={false}
      width={width > 600 ? 200 : width - 60}
      id="date-picker-mode-comparison"
    />
  );
};

export default ComparisonDatePickerModeSelect;
