import React from 'react';
import MainPage from './MainPage';
import MainPageContextContainer from '../../feautures/main/context';

const MainPageView = () => (
  <MainPageContextContainer>
    <MainPage />
  </MainPageContextContainer>
);

export default MainPageView;
