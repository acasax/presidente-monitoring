import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  getSelectedMachineLocation,
  getSelectMachineLocationData,
  setSelectedMachineLocation,
} from '../../../../feautures/main/mainSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const MainMachineLocationSelect = () => {
  const machineLocationData = useAppSelector(getSelectMachineLocationData);
  const machineSelectedLocation = useAppSelector(getSelectedMachineLocation);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState([]);

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedMachineLocation(event.target.value as string));
  };

  useEffect(() => {
    setItems(machineLocationData.map((x) => (
      {
        value: x.id,
        text: `${x.id} / ${x.locationName}`,
      }
    )));
  }, [machineLocationData]);

  return (
    <CustomSelect
      header="Lokacija"
      selectedItems={machineSelectedLocation}
      handleChange={handleChange}
      items={items}
      multiple={false}
      width={width > 600 ? 400 : width - 60}
      id="machine-location-select"
    />
  );
};

export default MainMachineLocationSelect;
