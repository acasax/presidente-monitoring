import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useLoading } from '../../../../hooks/UseLoading';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getToken } from '../../../../feautures/auth/authSlice';
import {
  getAttendanceSelectedBestAndWorstLocation,
  getAttendanceSelectLocationData,
  setAttendanceSelectedBestAndWorstLocation,
} from '../../../../feautures/attendance/attendanceSlice';
import { getLocations } from '../../../../feautures/location/LocationService';
import {
  clearAlertMsg,
  setAlertMsg,
  setAlertOpenStatus,
  setAlertStatus,
} from '../../../../components/CustomAlert/alertSlice';
import { setMainSelectLocationData } from '../../../../feautures/main/mainSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const AttendanceBestAndWorstDayLocationSelect = () => {
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const token = useAppSelector(getToken);
  const locationData = useAppSelector(getAttendanceSelectLocationData);
  const selectedLocations = useAppSelector(getAttendanceSelectedBestAndWorstLocation);
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
        dispatch(setMainSelectLocationData(res?.data));
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

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setAttendanceSelectedBestAndWorstLocation(event.target.value as string));
  };

  return (
    <CustomSelect
      header="Lokacija"
      selectedItems={selectedLocations}
      handleChange={handleChange}
      items={items}
      multiple={false}
      width={width > 600 ? 400 : width - 60}
      id="week-analytic-location-select-attendance"
    />
  );
};

export default AttendanceBestAndWorstDayLocationSelect;