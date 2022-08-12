import React, { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useLoading } from '../../../../hooks/UseLoading';
import { getLocations } from '../../../../feautures/location/LocationService';
import { useAppDispatch, useAppSelector } from '../../../../store/hooks';
import { getToken } from '../../../../feautures/auth/authSlice';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../../../components/CustomAlert/alertSlice';
import {
  getSelectedLocation,
  getSelectLocationData,
  setSelectedLocation,
  setSelectLocationData,
} from '../../../../feautures/main/mainSlice';
import CustomSelect from '../../../../components/CustomSelect/CustomSelect';

const MainLocationSelect = () => {
  const {
    setLoading,
    resetLoading,
  } = useLoading();
  const token = useAppSelector(getToken);
  const locationData = useAppSelector(getSelectLocationData);
  const selectedLocations = useAppSelector(getSelectedLocation);
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

  const handleChange = (event: SelectChangeEvent<typeof selectedLocations>) => {
    const {
      target: { value },
    } = event;
    dispatch(setSelectedLocation(
      typeof value === 'string' ? value.split(',') : value,
    ));
  };

  return (
    <>
      <CustomSelect
        header="Lokacija"
        selectedItems={selectedLocations}
        handleChange={handleChange}
        items={items}
        multiple
        width={400}
        id="location-select"
      />
    </>
  );
};

export default MainLocationSelect;
