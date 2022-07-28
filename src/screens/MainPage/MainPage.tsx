import React, { FC, useEffect } from 'react';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppSelector } from '../../store/hooks';
import { getToken } from '../../feautures/auth/authSlice';
import LocationSelect from '../../components/LocationSelect/LocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);

  useEffect(() => {
    console.log('t', token);
  }, []);

  return (
    <Screen>
      <div className="_main-page">
        <div className="_row">
          <LocationSelect />
          <CustomButton />
        </div>
        <div className="_row">
          <CustomIconButtonSend />
        </div>

      </div>
    </Screen>
  );
};

export default MainPage;
