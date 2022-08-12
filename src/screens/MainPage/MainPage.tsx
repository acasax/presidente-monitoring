import React, { FC, useContext, useEffect } from 'react';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MainLocationSelect from './component/selects/MainLocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import {
  getSelectedBestAndWorstLocation,
  getSelectedLocation,
  getSelectedMachineLocation,
  getSelectLocationData,
  getSelectMachineLocationData,
  setSelectMachineLocationData,
} from '../../feautures/locationSelect/locationSelectSlice';
import MainDatePickerModeSelect from './component/selects/MainDatePickerModeSelect';
import CustomDatePicker from '../../components/CustomDatePicker/CustomDatePicker';
import {
  getBestAndWorstDaySelectedDates,
  getDatePickerMode,
  getSelectedDate,
} from '../../feautures/datePicker/datePickerSlice';
import { getToken } from '../../feautures/auth/authSlice';
import {
  getAverageAndSumByDateAndLocation,
  getBestAndWorstDayAllTime,
  getDataForLocation,
  getDataForLocationForChart,
  getDataForMachine,
  getDataForWeekAnalytics,
  getDataForWeekAnalyticsFooter,
} from '../../feautures/main/MainService';
import { MainPageContext } from '../../feautures/main/context';
import CustomChart from '../../components/CustomChart/CustomChart';
import { useLoading } from '../../hooks/UseLoading';
import {
  getBestDayOfAllTime,
  getBestDayWeekAnalytics,
  getBestDayWeekAnalyticsFooter,
  getChartData,
  getLocationTableData,
  getMachineTableData,
  getTransactionTableDateFooter,
  getWorstDayOfAllTime,
  getWorstDayWeekAnalytics,
  getWorstDayWeekAnalyticsFooter,
  setBestDayOfAllTime,
  setBestDayWeekAnalytics,
  setBestDayWeekAnalyticsFooter,
  setChartData,
  setLocationTableData,
  setMachineTableData,
  setTransactionTableDataFooter,
  setWorstDayOfAllTime,
  setWorstDayWeekAnalytics,
  setWorstDayWeekAnalyticsFooter,
} from '../../feautures/main/mainSlice';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { getDaysArray } from '../../utils/dateTime/functionsDateTime';
import MainMachineLocationSelect from './component/selects/MainMachineLocationSelect';
import BestAndWorstDayOfAllTimeContainer
  from '../../components/BestAndWorstDayOfAllTimeContainer/BestAndWorstDayOfAllTimeContainer';
import LocationTable from '../../components/CustomTable/LocationTable';
import MachineTable from '../../components/CustomTable/MachineTable';
import MainBestAndWorstDayLocationSelect from './component/selects/MainBestAndWorstDayLocationSelect';
import BestAndWorstDayDatePicker from '../../components/CustomDatePicker/BestAndWorstDayDatePicker';
import BestAndWorstDayWeekAnalyticsTable from '../../components/CustomTable/BestAndWorstDayWeekAnalyticsTable';
import MainBestAndWorstDayDatePickerModeSelect
  from './component/selects/MainBestAndWorstDayDatePickerModeSelect';

interface PageTestProps {
  test?: string
}

const MainPage: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getSelectedLocation);
  const dataPickerMode = useAppSelector(getDatePickerMode);
  const pickedDate = useAppSelector(getSelectedDate);
  const chartData = useAppSelector(getChartData);
  const locationTableData = useAppSelector(getLocationTableData);
  const transactionTableDateFooter = useAppSelector(getTransactionTableDateFooter);
  const locationData = useAppSelector(getSelectLocationData);
  const selectedMachineLocations = useAppSelector(getSelectedMachineLocation);
  const machineSelectedLocation = useAppSelector(getSelectMachineLocationData);
  const machineTableData = useAppSelector(getMachineTableData);
  const bestDayOfAllTime = useAppSelector(getBestDayOfAllTime);
  const worstDayOfAllTime = useAppSelector(getWorstDayOfAllTime);
  const bestAndWorstWeekAnalyticsSelectedLocation = useAppSelector(getSelectedBestAndWorstLocation);
  const bestAndWorstWeekAnalyticsSelectedDates = useAppSelector(getBestAndWorstDaySelectedDates);
  const bestDayWeekAnalytics = useAppSelector(getBestDayWeekAnalytics);
  const bestDayWeekAnalyticsFooter = useAppSelector(getBestDayWeekAnalyticsFooter);
  const worstDayWeekAnalytics = useAppSelector(getWorstDayWeekAnalytics);
  const worstDayWeekAnalyticsFooter = useAppSelector(getWorstDayWeekAnalyticsFooter);
  const {
    values,
    handleChoseDate,
    bestAndWorstDayValues,
    handleChoseBestAndWorstDayDate,
  } = useContext(MainPageContext);
  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const fetchLBestDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTime(token, { orderBy: 'DESC' });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setBestDayOfAllTime(res));
        dispatch(setAlertOpenStatus(false));
        dispatch(clearAlertMsg());
      }
    } catch (e) {
      console.log(e);
    } finally {
      resetLoading();
    }
  };

  const fetchLWorstDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTime(token, { orderBy: 'ASC' });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setWorstDayOfAllTime(res));
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
    fetchLWorstDayOfAllTime().catch(console.error);
    fetchLBestDayOfAllTime().catch(console.error);
  }, []);

  useEffect(() => {
    handleChoseDate();
  }, [values]);

  useEffect(() => {
    handleChoseBestAndWorstDayDate();
  }, [bestAndWorstDayValues]);

  const handleLocationsRequest = async () => {
    setLoading();
    try {
      const res = await getDataForLocation(token, {
        locations: selectedLocations,
        dates: pickedDate,
        dateQueryType: dataPickerMode,
        responseDataType: 'TABLE',
      });
      const footer = await getAverageAndSumByDateAndLocation(token, {
        locations: selectedLocations,
        dates: pickedDate,
        dateQueryType: dataPickerMode[0],
      });
      const chart = await getDataForLocationForChart(token, {
        locations: selectedLocations,
        dates: pickedDate,
        dateQueryType: dataPickerMode[0],
        responseDataType: 'CHART',
      });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setLocationTableData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (footer?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(footer?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setTransactionTableDataFooter(footer));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (chart?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(chart?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setChartData(chart));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      // eslint-disable-next-line max-len
      const machineSelectData = locationData.filter((item) => selectedLocations.includes(Number(item.id)));
      dispatch(setSelectMachineLocationData(machineSelectData));
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  const handleMachineLocationsRequest = async () => {
    setLoading();
    try {
      const res = await getDataForMachine(token, {
        location: selectedMachineLocations,
        dates: (dataPickerMode[0] === 'MONTH' && pickedDate.length === 1) ? getDaysArray(pickedDate[0]) : pickedDate,
        dateQueryType: (dataPickerMode[0] === 'MONTH' && pickedDate.length === 1) ? 'DAY' : dataPickerMode[0],
      });

      if (res?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMachineTableData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  const handleWeekAnalyticsRequest = async () => {
    setLoading();
    console.log('bestAndWorstSelectedLocation', bestAndWorstWeekAnalyticsSelectedLocation);
    console.log('bestAndWorstWeekAnalyticsSelectedDates', bestAndWorstWeekAnalyticsSelectedDates);
    try {
      const best = await getDataForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        month: bestAndWorstWeekAnalyticsSelectedDates[0],
        sortType: 'BEST',
      });

      const bestFooter = await getDataForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        month: bestAndWorstWeekAnalyticsSelectedDates[0],
        sortType: 'BEST',
      });

      const worst = await getDataForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        month: bestAndWorstWeekAnalyticsSelectedDates[0],
        sortType: 'WORST',
      });

      const worstFooter = await getDataForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        month: bestAndWorstWeekAnalyticsSelectedDates[0],
        sortType: 'WORST',
      });

      if (best?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(best?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setBestDayWeekAnalytics(best));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      if (bestFooter?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(bestFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setBestDayWeekAnalyticsFooter(bestFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      if (worst?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(worst?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setWorstDayWeekAnalytics(worst));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      if (worstFooter?.message) {
        dispatch(setAlertStatus('error'));
        dispatch(setAlertMsg(worstFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setWorstDayWeekAnalyticsFooter(worstFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
    } catch (e) {
      dispatch(setAlertStatus('error'));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  return (
    <Screen>
      <div className="_main-page">
        <div className="_row">
          <MainLocationSelect />
          <MainDatePickerModeSelect />
          <CustomDatePicker />
          <CustomButton
            text="PRETRAZI"
            handleFunction={handleLocationsRequest}
          />
        </div>
        <div className="_row">
          {chartData.length !== 0 && <CustomChart />}
        </div>
        <div className="_row">
          <MainMachineLocationSelect />
          <CustomButton
            text="PRETRAZI"
            handleFunction={handleMachineLocationsRequest}
            disabled={machineSelectedLocation.length === 0}
          />
        </div>
        <div className="_table-row">
          <div className="_machine-table">
            {/* eslint-disable-next-line max-len */}
            {(machineTableData.length !== 0 && transactionTableDateFooter.length !== 0) && <MachineTable />}
          </div>
          <div className="_location-table">
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && <LocationTable />}
          </div>
        </div>
        <div className="_best-and-worst-day-container">
          <div className="_header-container">
            <p className="_header">
              NAJBOLJI I NAJGORI DAN
            </p>
          </div>
          <div className="_best-and-worst-day-off-all-time-row">
            <BestAndWorstDayOfAllTimeContainer header="Najbolji" data={bestDayOfAllTime} />
            <BestAndWorstDayOfAllTimeContainer header="Najgori" data={worstDayOfAllTime} />
          </div>
          <div className="_row">
            <MainBestAndWorstDayLocationSelect />
            <MainBestAndWorstDayDatePickerModeSelect />
            <BestAndWorstDayDatePicker />
            <CustomButton
              text="PRETRAZI"
              handleFunction={handleWeekAnalyticsRequest}
            />
          </div>
          <div className="_row">
            {(bestDayWeekAnalytics.length !== 0 && bestDayWeekAnalyticsFooter.length !== 0)
                            && (
                            <BestAndWorstDayWeekAnalyticsTable
                              header="Najbolji"
                              data={bestDayWeekAnalytics}
                              footer={bestDayWeekAnalyticsFooter}
                            />
                            )}
            {(worstDayWeekAnalytics.length !== 0 && worstDayWeekAnalyticsFooter.length !== 0)
                            && (
                            <BestAndWorstDayWeekAnalyticsTable
                              header="Najgori"
                              data={worstDayWeekAnalytics}
                              footer={worstDayWeekAnalyticsFooter}
                            />
                            )}

          </div>
        </div>
        <div className="_footer">
          <CustomIconButtonSend />
        </div>
      </div>
    </Screen>
  );
};

export default MainPage;
