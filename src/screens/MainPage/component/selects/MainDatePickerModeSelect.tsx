import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { clearMainPickedDate, getMainDatePickerMode, setMainDatePickerMode } from '../../../../feautures/main/mainSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';
import { DateModeSelectItems } from '../../../../constants/select';

const MainDatePickerModeSelect = () => {
  const dataPickerMode = useAppSelector(getMainDatePickerMode);
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
    dispatch(clearMainPickedDate());
    dispatch(setMainDatePickerMode(typeof value === 'string' ? value.split(',') : value));
  };

  return (
    <CustomSelect
      header="Format datuma"
      selectedItems={dataPickerMode}
      handleChange={handleChange}
      items={DateModeSelectItems}
      multiple={false}
      width={width > 600 ? 200 : width - 60}
      id="date-picker-mode-main"
    />
  );
};

export default MainDatePickerModeSelect;
