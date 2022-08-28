import React, { useContext } from 'react';
import { useAppSelector } from '../../../../store/hooks';
import { getAttendanceDatePickerMode } from '../../../../feautures/attendance/attendanceSlice';
import { AttendancePageContext } from '../../../../feautures/attendance/context';
import CustomDatePicker from '../../../../components/CustomDatePicker/CustomDatePicker';

const AttendanceDatePicker = () => {
  const datePickerMode = useAppSelector(getAttendanceDatePickerMode);
  const { values, setValues } = useContext(AttendancePageContext);

  return (
    <CustomDatePicker
      header="Izaberi datume"
      yearPicker={datePickerMode[0] === 'YEAR'}
      monthPicker={datePickerMode[0] === 'MONTH'}
      value={values}
      onChange={setValues}
      format={datePickerMode[0] === 'YEAR' ? 'YYYY' : datePickerMode[0] === 'MONTH' ? 'MM.YYYY' : 'DD.MM.YYYY'}
    />
  );
};

export default AttendanceDatePicker;
