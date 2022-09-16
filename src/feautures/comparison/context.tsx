import React, { createContext, ReactNode, useEffect, useMemo, useState } from 'react';
import { DateObject } from 'react-multi-date-picker';
import { TComparisonPageContext } from './ComparisonModal';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { getComparisonDatePickerMode, setComparisonSelectedDates } from './comparisonSlice';
import { formatDate } from '../../utils/dateTime/functionsDateTime';

export const ComparisonPageContext = createContext({} as TComparisonPageContext);

const ComparisonPageContextContainer = ({ children }: { children: ReactNode }) => {
  const [comparisonValues, setComparisonValues] = useState<any>([]);
  const datePickerMode = useAppSelector(getComparisonDatePickerMode);
  const dispatch = useAppDispatch();

  const handleChoseDateComparison = () => {
    const selectedDate = comparisonValues.map((x) => formatDate(new DateObject(x), datePickerMode));
    dispatch(setComparisonSelectedDates(selectedDate));
  };

  useEffect(() => {
    setComparisonValues([]);
  }, [datePickerMode]);

  const exportData = useMemo(
    () => (
      {
        comparisonValues,
        setComparisonValues,
        handleChoseDateComparison,
      }),
    [comparisonValues,
      setComparisonValues,
      handleChoseDateComparison],
  );
  return (
    <ComparisonPageContext.Provider value={exportData}>{children}</ComparisonPageContext.Provider>
  );
};

export default ComparisonPageContextContainer;
