import React, { FC } from 'react';
import { Button } from '@mui/material';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { getDataForLocation } from '../../feautures/main/MainService';
import { useAppSelector } from '../../store/hooks';
import { getToken } from '../../feautures/auth/authSlice';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);

  const handle = async () => {
    const res = await getDataForLocation(token);
    console.log(res);
  };

  return (
    <Screen>
      <div className="_main-page">
        <CustomIconButtonSend />
        <Button variant="outlined" onClick={handle}>
          get
        </Button>
      </div>
    </Screen>
  );
};

export default MainPage;
