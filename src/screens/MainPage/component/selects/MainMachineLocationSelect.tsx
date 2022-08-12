import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import {
  getSelectedMachineLocation,
  getSelectMachineLocationData,
  setSelectedMachineLocation,
} from '../../../../feautures/locationSelect/locationSelectSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const MainMachineLocationSelect = () => {
  const machineLocationData = useAppSelector(getSelectMachineLocationData);
  const machineSelectedLocation = useAppSelector(getSelectedMachineLocation);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState([]);

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
      width={400}
      id="machine-location-select"
    />
  );
};

export default MainMachineLocationSelect;
