import React, { FC } from 'react';
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

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getSelectedLocation);
  const dataPickerMode = useAppSelector(getDatePickerMode);
  const pickedDate = useAppSelector(getSelectedDate);

  const handleLocationsRequest = async () => {
    const res = await getDataForLocation(token, {
      locations: selectedLocations,
      dates: pickedDate,
      dateQueryType: dataPickerMode,
    });
    console.log(res);
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
        <div className="_row">
          <CustomIconButtonSend />
        </div>
      </div>
    </Screen>
  );
};

export default MainPage;
