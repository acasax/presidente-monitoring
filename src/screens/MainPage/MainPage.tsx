import React, { FC, useContext, useEffect } from 'react';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import { clearSelectedLocation, getSelectedLocation } from '../../feautures/locationSelect/locationSelectSlice';
import DatePickerModeSelect from '../../components/DatePickerModeSelect/DatePickerModeSelect';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import { clearPickedDate, getDatePickerMode, getSelectedDate } from '../../feautures/datePicker/datePickerSlice';
import { getToken } from '../../feautures/auth/authSlice';
import { getDataForLocation } from '../../feautures/main/MainService';
import { MainPageContext } from '../../feautures/main/context';
import CustomChart from '../../components/CustomChart/CustomChart';
import { useLoading } from '../../hooks/UseLoading';
import LocationTable from '../../components/CustomTable/LocationTable';
import { getChartData, getLocationTableData, setLocationTableData } from '../../feautures/main/mainSlice';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';

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
  const { values, handleChoseDate, setValues } = useContext(MainPageContext);
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
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setLocationTableData(res));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
      }
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      dispatch(clearSelectedLocation());
      dispatch(clearPickedDate());
      setValues([]);
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
        {locationTableData.length !== 0 && <LocationTable data={locationTableData} />}
        <div className="_footer">
          <CustomIconButtonSend />
        </div>
      </div>
    </Screen>
  );
};

export default MainPage;
