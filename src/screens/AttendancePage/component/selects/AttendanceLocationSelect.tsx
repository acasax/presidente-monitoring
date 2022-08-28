import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useLoading } from '../../../../hooks/UseLoading';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getToken } from '../../../../feautures/auth/authSlice';
import {
  getAttendanceSelectedLocation,
  getAttendanceSelectLocationData,
  setAttendanceSelectedLocation,
  setAttendanceSelectLocationData,
} from '../../../../feautures/attendance/attendanceSlice';
import { getLocations } from '../../../../feautures/location/LocationService';
import {
  clearAlertMsg,
  setAlertMsg,
  setAlertOpenStatus,
  setAlertStatus,
} from '../../../../components/CustomAlert/alertSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const AttendanceLocationSelect = () => {
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const token = useAppSelector(getToken);
  const locationData = useAppSelector(getAttendanceSelectLocationData);
  const selectedLocations = useAppSelector(getAttendanceSelectedLocation);
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

  const fetchLocations = async () => {
    setLoading();
    try {
      const res = await getLocations(token);
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setAttendanceSelectLocationData(res?.data));
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

  useEffect(() => {
    setItems(locationData.map((x) => (
      {
        value: x.id,
        text: `${x.id} / ${x.locationName}`,
      }
    )));
  }, [locationData]);

  const handleChange = (event: SelectChangeEvent<typeof selectedLocations>) => {
    const {
      target: { value },
    } = event;
    dispatch(setAttendanceSelectedLocation(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  return (
    <CustomSelect
      header="Lokacija"
      selectedItems={selectedLocations}
      handleChange={handleChange}
      items={items}
      multiple
      width={width > 600 ? 400 : width - 60}
      id="location-select-attendance"
    />
  );
};

export default AttendanceLocationSelect;
