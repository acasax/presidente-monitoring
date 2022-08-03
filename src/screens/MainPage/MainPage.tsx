import React, { FC, useContext, useEffect } from 'react';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  getSelectedLocation,
  getSelectLocationData,
  setSelectMachineLocationData,
} from '../../feautures/locationSelect/locationSelectSlice';
import DatePickerModeSelect from '../../components/DatePickerModeSelect/DatePickerModeSelect';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import { getDatePickerMode, getSelectedDate } from '../../feautures/datePicker/datePickerSlice';
import { getToken } from '../../feautures/auth/authSlice';
import { getAverageAndSumByDateAndLocation, getDataForLocation } from '../../feautures/main/MainService';
import { MainPageContext } from '../../feautures/main/context';
import CustomChart from '../../components/CustomChart/CustomChart';
import { useLoading } from '../../hooks/UseLoading';
import LocationTable from '../../components/CustomTable/LocationTable';
import {
  getChartData,
  getLocationTableData,
  getLocationTableDateFooter,
  setLocationTableData,
  setLocationTableDataFooter,
} from '../../feautures/main/mainSlice';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { getDaysArray } from '../../utils/dateTime/functionsDateTime';
import MachineLocationSelect from '../../components/LocationSelect/MachineLocationSelect';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getSelectedLocation);
  const dataPickerMode = useAppSelector(getDatePickerMode);
  const pickedDate = useAppSelector(getSelectedDate);
  const chartData = useAppSelector(getChartData);
  const locationTableData = useAppSelector(getLocationTableData);
  const locationTableDateFooter = useAppSelector(getLocationTableDateFooter);
  const locationData = useAppSelector(getSelectLocationData);
  const { values, handleChoseDate } = useContext(MainPageContext);
  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  useEffect(() => {
    handleChoseDate();
  }, [values]);

  const handleLocationsRequest = async () => {
    setLoading();
    try {
      const res = await getDataForLocation(token, {
        locations: selectedLocations,
        dates: pickedDate,
        dateQueryType: dataPickerMode,
      });
      const footer = await getAverageAndSumByDateAndLocation(token, {
        locations: selectedLocations,
        dates: (dataPickerMode[0] === 'MONTH' && pickedDate.length === 1) ? getDaysArray(pickedDate[0]) : pickedDate,
        dateQueryType: (dataPickerMode[0] === 'MONTH' && pickedDate.length === 1) ? 'DAY' : dataPickerMode[0],
      });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setLocationTableData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (footer?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(footer?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setLocationTableDataFooter(footer));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      console.log('se', selectedLocations);
      // eslint-disable-next-line max-len
      const machineSelectData = locationData.filter((item) => selectedLocations.includes(Number(item.id)));
      console.log('machine', machineSelectData);
      dispatch(setSelectMachineLocationData(machineSelectData));
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_main-page">
        <div className="_row">
          <LocationSelect />
          <DatePickerModeSelect />
          <CustomDatePicker />
          <CustomButton
            text="PRETRAZI"
            handleFunction={handleLocationsRequest}
          />
        </div>
        {chartData.length !== 0 && <CustomChart />}
        <div className="_row">
          <MachineLocationSelect />
        </div>
        {/* eslint-disable-next-line max-len */}
        {(locationTableData.length !== 0 && locationTableDateFooter.length !== 0) && <LocationTable />}
        <div className="_footer">
          <CustomIconButtonSend />
        </div>
      </div>
    </Screen>
  );
};

export default MainPage;
