import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  getMachineSelectedLocation,
  getSelectMachineLocationData,
  setMachineSelectedLocation,
} from '../../feautures/locationSelect/locationSelectSlice';

const MachineLocationSelect = () => {
  const machineLocationData = useAppSelector(getSelectMachineLocationData);
  const machineSelectedLocation = useAppSelector(getMachineSelectedLocation);
  const dispatch = useAppDispatch();

  const handleChange = (event: SelectChangeEvent<typeof machineSelectedLocation>) => {
    const {
      target: { value },
    } = event;
    dispatch(setMachineSelectedLocation(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  return (
    <div className="_select-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="machine-location-select-label">Lokacija</InputLabel>
        <Select
          labelId="machine-location-select-label"
          id="machine-location-select"
          value={machineSelectedLocation}
          onChange={handleChange}
          style={{ minWidth: '400px', maxWidth: '400px' }}
          disabled={machineLocationData.length === 0}
        >
          {
                        machineLocationData?.map((loc) => (
                          <MenuItem value={loc.id} key={loc.id}>
                            {loc.id}
                            {' '}
                            /
                            {' '}
                            {loc.locationName}
                          </MenuItem>
                        ))
                    }
        </Select>
      </FormControl>
    </div>
  );
};

export default MachineLocationSelect;
