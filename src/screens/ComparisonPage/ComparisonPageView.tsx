import React, { FC, useContext, useEffect } from 'react';
import Screen from '../Screen';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useLoading } from '../../hooks/UseLoading';
import { getToken } from '../../feautures/auth/authSlice';
import {
  getAverageAndSumByDateForComparison,
  getComparisonAllTimeDate,
  getComparisonData,
} from '../../feautures/comparison/ComparisonService';
import {
  getComparison,
  getComparisonAllTime,
  getComparisonDatePickerMode,
  getComparisonSelectedDates,
  getComparisonTableFooter,
  setComparisonAllTimeData,
  setComparisonData,
  setComparisonDateTableFooter,
} from '../../feautures/comparison/comparisonSlice';
import ComparisonAllTimeTable from './component/table/ComparisonAllTimeTable';
import Header1 from '../../components/Text/Header1';
import Header2 from '../../components/Text/Header2';
import ComparisonDatePickerModeSelect from './component/selects/ComparisonDatePickerModeSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import { getMountsArray } from '../../utils/dateTime/functionsDateTime';
import ComparisonDatePicker from './component/datePicker/ComparisonDatePicker';
import LocationTable from '../../components/CustomTable/LocationTable';
import { ComparisonPageContext } from '../../feautures/comparison/context';
import { AlertStatus, DataPickerModeStatus, DateTypes, StartWorkTimeOfIKS } from '../../utils/Constants';
import { Texts } from '../../utils/Texts';

interface PageTestProps {
  test?: string
}

const ComparisonPageView: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const pickedDate = useAppSelector(getComparisonSelectedDates);
  const dataPickerMode = useAppSelector(getComparisonDatePickerMode);
  const tableComparisonAllTimeData = useAppSelector(getComparisonAllTime);
  const tableComparisonDate = useAppSelector(getComparison);
  const tableComparisonDateFooter = useAppSelector(getComparisonTableFooter);
  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const fetchLComparisonAllTimeDate = async () => {
    setLoading();
    try {
      const res = await getComparisonAllTimeDate(token, { dates: [StartWorkTimeOfIKS, new Date().toISOString().split('T')[0]] });
      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setComparisonAllTimeData(res));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  useEffect(() => {
    fetchLComparisonAllTimeDate().catch(console.error);
  }, []);

  const {
    comparisonValues,
    handleChoseDateComparison,
  } = useContext(ComparisonPageContext);

  useEffect(() => {
    handleChoseDateComparison();
  }, [comparisonValues]);

  const handleComparisonData = async () => {
    setLoading();
    try {
      if (pickedDate.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(Texts.noPickedDate));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const res = await getComparisonData(token, {
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode,
      });

      const footer = await getAverageAndSumByDateForComparison(token, {
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH
          : dataPickerMode[0],
      });

      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setComparisonData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (footer?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setComparisonDateTableFooter(footer));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
    } catch (e) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_comparison-page">
        <Header1 text={Texts.comparisonPageTitle} />
        {tableComparisonAllTimeData.length !== 0
                    && (
                    <>
                      <Header2 text={Texts.differenceAllTime} />
                      <ComparisonAllTimeTable
                        tableData={tableComparisonAllTimeData}
                      />
                    </>

                    )}
        <Header2 text={Texts.differenceForPeriodOfTime} />
        <div className="_row-comparison">
          <ComparisonDatePickerModeSelect />
          <ComparisonDatePicker />
          <div className="_search-button-container-comparison">
            <CustomButton
              text={Texts.search}
              handleFunction={handleComparisonData}
            />
          </div>
        </div>
        <div className="_table-row-comparison">
          <div className="_location-table-comparison">
            {/* eslint-disable-next-line max-len */}
            {(tableComparisonDate.length !== 0 && tableComparisonDateFooter.length !== 0)
                            && <Header2 text={Texts.differenceByLocation} />}
            {/* eslint-disable-next-line max-len */}
            {(tableComparisonDate.length !== 0 && tableComparisonDateFooter.length !== 0)
                            && (
                            <LocationTable
                              data={tableComparisonDate}
                              footer={tableComparisonDateFooter}
                              table={DateTypes.TRANSACTION}
                            />
                            )}
          </div>
        </div>
      </div>
    </Screen>
  );
};

export default ComparisonPageView;
