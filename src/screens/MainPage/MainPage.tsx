import React from 'react';
import MainPageView from './MainPageView';
import MainPageContextContainer from '../../feautures/main/context';

const MainPage = () => (
  <MainPageContextContainer>
    <MainPageView />
  </MainPageContextContainer>
);

export default MainPage;
