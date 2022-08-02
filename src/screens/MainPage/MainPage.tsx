import React, { FC, useContext, useEffect } from 'react';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppSelector } from '../../store/hooks';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import { getSelectedLocation } from '../../feautures/locationSelect/locationSelectSlice';
import DatePickerModeSelect from '../../components/DatePickerModeSelect/DatePickerModeSelect';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import { getDatePickerMode, getSelectedDate } from '../../feautures/datePicker/datePickerSlice';
import { getToken } from '../../feautures/auth/authSlice';
import { getDataForLocation } from '../../feautures/main/MainService';
import { MainPageContext } from '../../feautures/main/context';
import CustomChart from '../../components/CustomChart/CustomChart';
import { useLoading } from '../../hooks/UseLoading';
import CustomTable from '../../components/CustomTable/CustomTable';
import { getChartData } from '../../feautures/main/mainSlice';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getSelectedLocation);
  const dataPickerMode = useAppSelector(getDatePickerMode);
  const pickedDate = useAppSelector(getSelectedDate);
  const chartData = useAppSelector(getChartData);
  const { values, handleChoseDate } = useContext(MainPageContext);

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
      console.log('res', res);
    } catch (e) {
      console.log(e);
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
        {chartData && <CustomChart />}
        <CustomTable />
        <div className="_footer">
          <CustomIconButtonSend />
        </div>
      </div>
    </Screen>
  );
};

export default MainPage;
