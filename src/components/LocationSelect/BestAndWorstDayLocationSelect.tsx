import React, { useEffect } from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import { useLoading } from '../../hooks/UseLoading';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getToken } from '../../feautures/auth/authSlice';
import {
  getSelectedBestAndWorstLocation,
  getSelectLocationData,
  setSelectedBestAndWorstLocation,
  setSelectLocationData,
} from '../../feautures/locationSelect/locationSelectSlice';
import { getLocations } from '../../feautures/locationSelect/LocationSelectService';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../CustomAlert/alertSlice';

const BestAndWorstDayLocationSelect = () => {
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const token = useAppSelector(getToken);
  const locationData = useAppSelector(getSelectLocationData);
  const selectedLocations = useAppSelector(getSelectedBestAndWorstLocation);
  const dispatch = useAppDispatch();

  const fetchLocations = async () => {
    setLoading();
    try {
      const res = await getLocations(token);
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setSelectLocationData(res?.data));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  useEffect(() => {
    fetchLocations().catch(console.error);
  }, []);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedBestAndWorstLocation(event.target.value as string));
  };

  return (
    <div className="_select-container">
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="machine-location-select-label">Lokacija</InputLabel>
        <Select
          labelId="machine-location-select-label"
          id="machine-location-select"
          value={selectedLocations}
          onChange={handleChange}
          style={{ minWidth: '400px', maxWidth: '400px' }}
        >
          {
              locationData?.map((loc) => (
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

export default BestAndWorstDayLocationSelect;
