import React from 'react';
import AttendancePageContextContainer from '../../feautures/attendance/context';
import AttendancePageView from './AttendancePageView';

const AttendancePage = () => (
  <AttendancePageContextContainer>
    <AttendancePageView />
  </AttendancePageContextContainer>
);

export default AttendancePage;
