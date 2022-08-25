import React from 'react';
import AttendancePageContextContainer from '../../feautures/attendance/context';
import AttendancePage from './AttendancePage';

const AttendancePageView = () => (
  <AttendancePageContextContainer>
    <AttendancePage />
  </AttendancePageContextContainer>
);

export default AttendancePageView;
