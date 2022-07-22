import React, { FC } from 'react';
import Screen from '../Screen';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => (
  <Screen>
    <div className="_main-page">
      <p className="_text">Main</p>
    </div>
  </Screen>
);

export default MainPage;
