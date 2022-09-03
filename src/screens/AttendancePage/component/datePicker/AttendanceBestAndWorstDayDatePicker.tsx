import React, { useContext } from 'react';
import { AttendancePageContext } from '../../../../feautures/attendance/context';
import { useAppSelector } from '../../../../store/hooks';
import { getAttendanceBestAndWorstDayDatePickerMode } from '../../../../feautures/attendance/attendanceSlice';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';

const AttendanceBestAndWorstDayDatePicker = () => {
  // eslint-disable-next-line max-len
  const { bestAndWorstDayValuesAttendance, setBestAndWorstDayValuesAttendance } = useContext(AttendancePageContext);
  const bestAndWorstDayDatePickerMode = useAppSelector(getAttendanceBestAndWorstDayDatePickerMode);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={bestAndWorstDayDatePickerMode[0] === 'YEAR'}
      monthPicker={bestAndWorstDayDatePickerMode[0] === 'MONTH'}
      value={bestAndWorstDayValuesAttendance}
      onChange={setBestAndWorstDayValuesAttendance}
      format={bestAndWorstDayDatePickerMode[0] === 'YEAR' ? 'YYYY' : 'MM.YYYY'}
    />
  );
};

export default AttendanceBestAndWorstDayDatePicker;
