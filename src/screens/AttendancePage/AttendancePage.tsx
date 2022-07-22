import React, { FC } from 'react';
import Screen from '../Screen';

interface PageTestProps {
  test?: string
}

const AttendancePage: FC<PageTestProps> = () => (
  <Screen>
    <div className="_attendance-page">
      <p className="_text">Attendance</p>
    </div>
  </Screen>
);

export default AttendancePage;
