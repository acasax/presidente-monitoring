import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useLoading } from '../../../../hooks/UseLoading';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getToken } from '../../../../feautures/auth/authSlice';
import {
  getSelectedBestAndWorstLocation,
  getSelectLocationData,
  setSelectedBestAndWorstLocation,
  setSelectLocationData,
} from '../../../../feautures/main/mainSlice';
import { getLocations } from '../../../../feautures/location/LocationService';
import {
  clearAlertMsg,
  setAlertMsg,
  setAlertOpenStatus,
  setAlertStatus,
} from '../../../../components/CustomAlert/alertSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const MainBestAndWorstDayLocationSelect = () => {
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const token = useAppSelector(getToken);
  const locationData = useAppSelector(getSelectLocationData);
  const selectedLocations = useAppSelector(getSelectedBestAndWorstLocation);
  const dispatch = useAppDispatch();
  const [items, setItems] = useState([]);

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

  useEffect(() => {
    setItems(locationData.map((x) => (
      {
        value: x.id,
        text: `${x.id} / ${x.locationName}`,
      }
    )));
  }, [locationData]);

  const handleChange = (event: SelectChangeEvent) => {
    dispatch(setSelectedBestAndWorstLocation(event.target.value as string));
  };

  return (
    <CustomSelect
      header="Lokacija"
      selectedItems={selectedLocations}
      handleChange={handleChange}
      items={items}
      multiple={false}
      width={400}
      id="week-analytic-location-select"
    />
  );
};

export default MainBestAndWorstDayLocationSelect;
