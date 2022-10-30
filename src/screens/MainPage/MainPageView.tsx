import React, { FC, useContext, useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import Screen from '../Screen';
import CustomIconButtonSend from '../../components/CustomIconButton/CustomIconButtonSend';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import MainLocationSelect from './component/selects/MainLocationSelect';
import CustomButton from '../../components/CustomButton/CustomButton';
import MainDatePickerModeSelect from './component/selects/MainDatePickerModeSelect';
import MainDatePicker from './component/datePicker/MainDatePicker';
import {
  getMainBestAndWorstDayDatePickerMode,
  getMainBestAndWorstDaySelectedDates,
  getMainBestDayInChosenMounts,
  getMainBestDayOfAllTime,
  getMainBestDayWeekAnalytics,
  getMainBestDayWeekAnalyticsFooter,
  getMainChartData,
  getMainDatePickerMode,
  getMainLocationTableData,
  getMainMachineTableData,
  getMainSelectedBestAndWorstLocation,
  getMainSelectedDate,
  getMainSelectedLocation,
  getMainSelectedMachineLocation,
  getMainSelectLocationData,
  getMainSelectMachineLocationData,
  getMainTransactionTableDateFooter,
  getMainWorstDayInChosenMounts,
  getMainWorstDayOfAllTime,
  getMainWorstDayWeekAnalytics,
  getMainWorstDayWeekAnalyticsFooter,
  setMainBestDayOfAllTime,
  setMainBestDayWeekAnalytics,
  setMainBestDayWeekAnalyticsFooter,
  setMainBestInChosenMounts,
  setMainChartData,
  setMainLocationTableData,
  setMainMachineTableData,
  setMainSelectMachineLocationData,
  setMainTransactionTableDataFooter,
  setMainWorstDayOfAllTime,
  setMainWorstDayWeekAnalytics,
  setMainWorstDayWeekAnalyticsFooter,
  setMainWorstInChosenMounts,
} from '../../feautures/main/mainSlice';
import { clearUser, getToken } from '../../feautures/auth/authSlice';
import {
  getAverageAndSumByDateAndLocation,
  getBestAndWorstDayAllTime,
  getBestAndWorstInChosenMounts,
  getDataForLocation,
  getDataForMachine,
  getDataForWeekAnalytics,
  getDataForWeekAnalyticsFooter,
} from '../../feautures/main/MainService';
import { MainPageContext } from '../../feautures/main/context';
import CustomChart from '../../components/CustomChart/CustomChart';
import { useLoading } from '../../hooks/UseLoading';

import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { getDaysArray, getMountsArray } from '../../utils/dateTime/functionsDateTime';
import MainMachineLocationSelect from './component/selects/MainMachineLocationSelect';
import LocationTable from '../../components/CustomTable/LocationTable';
import MachineTable from './component/customTable/MachineTable';
import MainBestAndWorstDayLocationSelect from './component/selects/MainBestAndWorstDayLocationSelect';
import BestAndWorstDayDatePicker from './component/datePicker/BestAndWorstDayDatePicker';
import MainBestAndWorstDayDatePickerModeSelect from './component/selects/MainBestAndWorstDayDatePickerModeSelect';
import Header1 from '../../components/Text/Header1';
import Header2 from '../../components/Text/Header2';
import WeekAnalyticsContainer from '../../components/WeekAnalyticsContainer/WeekAnalyticsContainer';
import BestAndWorstDayOfAllTimeContainer
  from '../../components/BestAndWorstDayOfAllTimeContainer/BestAndWorstDayOfAllTimeContainer';
import {
  AlertStatus,
  BestAndWorstDayStatus,
  BestAndWorstDayType,
  DataPickerModeStatus,
  DateTypes,
  RequestDataType,
  SortTypes,
} from '../../utils/Constants';
import { Texts } from '../../utils/Texts';

interface PageTestProps {
  test?: string
}

const MainPageView: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const selectedLocations = useAppSelector(getMainSelectedLocation);
  const dataPickerMode = useAppSelector(getMainDatePickerMode);
  const pickedDate = useAppSelector(getMainSelectedDate);
  const locationTableData = useAppSelector(getMainLocationTableData);
  const transactionTableDateFooter = useAppSelector(getMainTransactionTableDateFooter);
  const locationData = useAppSelector(getMainSelectLocationData);
  const selectedMachineLocations = useAppSelector(getMainSelectedMachineLocation);
  const machineSelectedLocation = useAppSelector(getMainSelectMachineLocationData);
  const machineTableData = useAppSelector(getMainMachineTableData);
  const bestDayOfAllTime = useAppSelector(getMainBestDayOfAllTime);
  const worstDayOfAllTime = useAppSelector(getMainWorstDayOfAllTime);
  // eslint-disable-next-line max-len
  const bestAndWorstWeekAnalyticsSelectedLocation = useAppSelector(getMainSelectedBestAndWorstLocation);
  // eslint-disable-next-line max-len
  const bestAndWorstWeekAnalyticsSelectedDates = useAppSelector(getMainBestAndWorstDaySelectedDates);
  const bestDayWeekAnalytics = useAppSelector(getMainBestDayWeekAnalytics);
  const bestDayWeekAnalyticsFooter = useAppSelector(getMainBestDayWeekAnalyticsFooter);
  const worstDayWeekAnalytics = useAppSelector(getMainWorstDayWeekAnalytics);
  const worstDayWeekAnalyticsFooter = useAppSelector(getMainWorstDayWeekAnalyticsFooter);
  const bestAndWorstDayDatePickerMode = useAppSelector(getMainBestAndWorstDayDatePickerMode);
  const bestDayInChosenMounts = useAppSelector(getMainBestDayInChosenMounts);
  const worstDayInChosenMounts = useAppSelector(getMainWorstDayInChosenMounts);
  const mainChartData = useAppSelector(getMainChartData);
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

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  const fetchLBestDayOfAllTime = async () => {
    setLoading();
    try {
      const res = await getBestAndWorstDayAllTime(token, { orderBy: BestAndWorstDayType.BEST });
      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setMainBestDayOfAllTime(res));
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
      const res = await getBestAndWorstDayAllTime(token, { orderBy: BestAndWorstDayType.WORST });
      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
      } else {
        dispatch(setMainWorstDayOfAllTime(res));
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
      if (selectedLocations.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(Texts.noPickedDate));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      if (pickedDate.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(Texts.noPickedLocation));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const res = await getDataForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode,
        responseDataType: RequestDataType.TABLE,
      });
      const footer = await getAverageAndSumByDateAndLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode[0],
      });
      const chart = await getDataForLocation(token, {
        locations: selectedLocations,
        dates: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0]) : pickedDate,
        dateQueryType: (pickedDate.length === 1 && dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH : dataPickerMode[0],
        responseDataType: RequestDataType.CHART,
      });
      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainLocationTableData(res));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (footer?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(footer?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainTransactionTableDataFooter(footer));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (chart?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(chart?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainChartData(chart));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());
      // eslint-disable-next-line max-len
      const machineSelectData = locationData.filter((item) => selectedLocations.includes(Number(item.id)));
      dispatch(setMainSelectMachineLocationData(machineSelectData));
    } catch (e) {
      dispatch(setAlertStatus(AlertStatus.Error));
      dispatch(setAlertMsg(e?.message));
      dispatch(setAlertOpenStatus(true));
    } finally {
      resetLoading();
    }
  };

  const handleMachineLocationsRequest = async () => {
    setLoading();
    try {
      if (selectedMachineLocations.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg('Niste izabralio nijednu lokaciju za pretragu po masinama.'));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const res = await getDataForMachine(token, {
        location: selectedMachineLocations,
        dates: (dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(pickedDate[0])
          : (dataPickerMode[0] === DataPickerModeStatus.MONTH && pickedDate.length === 1)
            ? getDaysArray(pickedDate[0]) : pickedDate,
        dateQueryType: (dataPickerMode[0] === DataPickerModeStatus.YEAR)
          ? DataPickerModeStatus.MONTH
          : (dataPickerMode[0] === DataPickerModeStatus.MONTH && pickedDate.length === 1)
            ? DataPickerModeStatus.DAY : dataPickerMode[0],
      });

      if (res?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(res?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainMachineTableData(res));
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

  const handleWeekAnalyticsRequest = async () => {
    setLoading();
    try {
      if (bestAndWorstWeekAnalyticsSelectedLocation.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(Texts.noPickedLocationForBestAndWorst));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      if (bestAndWorstDayDatePickerMode.length === 0) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(Texts.noPickedDateForBestAndWorst));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      const best = await getDataForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const bestFooter = await getDataForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const worst = await getDataForWeekAnalytics(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      const worstFooter = await getDataForWeekAnalyticsFooter(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      const bestInChosenMounts = await getBestAndWorstInChosenMounts(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.BEST,
      });

      const worstInChosenMounts = await getBestAndWorstInChosenMounts(token, {
        location: bestAndWorstWeekAnalyticsSelectedLocation,
        months: (bestAndWorstDayDatePickerMode[0] === DataPickerModeStatus.YEAR)
          ? getMountsArray(bestAndWorstWeekAnalyticsSelectedDates[0], false)
          : bestAndWorstWeekAnalyticsSelectedDates,
        sortType: SortTypes.WORST,
      });

      if (best?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(best?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainBestDayWeekAnalytics(best));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (bestFooter?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(bestFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainBestDayWeekAnalyticsFooter(bestFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worst?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(worst?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainWorstDayWeekAnalytics(worst));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worstFooter?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(worstFooter?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainWorstDayWeekAnalyticsFooter(worstFooter));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (bestInChosenMounts?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(bestInChosenMounts?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainBestInChosenMounts(bestInChosenMounts));
      dispatch(setAlertOpenStatus(false));
      dispatch(clearAlertMsg());

      if (worstInChosenMounts?.message) {
        dispatch(setAlertStatus(AlertStatus.Error));
        dispatch(setAlertMsg(worstInChosenMounts?.message));
        dispatch(setAlertOpenStatus(true));
        return;
      }
      dispatch(setMainWorstInChosenMounts(worstInChosenMounts));
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
      <div className="_main-page">
        <Header1 text={Texts.mainPageHeader} />
        <Header2 text={Texts.searchDataByLocation} />
        <div className="_row">
          <MainLocationSelect />
          <MainDatePickerModeSelect />
          <MainDatePicker />
          <div className="_search-button-container">
            <CustomButton
              text={Texts.search}
              handleFunction={handleLocationsRequest}
            />
          </div>
        </div>
        {mainChartData.length !== 0 && <Header2 text={Texts.searchByLocation} />}
        {mainChartData.length !== 0
                    && (
                    <div className="_row">
                      <CustomChart chartData={mainChartData} />
                    </div>
                    )}
        <div className="_table-row">
          <div className="_location-table-mobile">
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && <Header2 text={Texts.dataAboutLocation} />}
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && (
                            <LocationTable
                              data={locationTableData}
                              footer={transactionTableDateFooter}
                              table={DateTypes.TRANSACTION}
                            />
                            )}
          </div>
        </div>
        <Header2 text={Texts.searchDataByMachine} />

        <div className="_row">
          <MainMachineLocationSelect />
          <div className="_search-button-container">
            <CustomButton
              text={Texts.search}
              handleFunction={handleMachineLocationsRequest}
              disabled={machineSelectedLocation.length === 0}
            />
          </div>
        </div>

        <div className="_table-row">

          <div className="_machine-table">
            {/* eslint-disable-next-line max-len */}
            {(machineTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && <Header2 text={Texts.dataAboutMachine} />}
            {/* eslint-disable-next-line max-len */}
            {(machineTableData.length !== 0 && transactionTableDateFooter.length !== 0) && <MachineTable />}
          </div>
          <div className="_location-table">
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && <Header2 text={Texts.dataAboutLocation} />}
            {/* eslint-disable-next-line max-len */}
            {(locationTableData.length !== 0 && transactionTableDateFooter.length !== 0)
                            && (
                            <LocationTable
                              data={locationTableData}
                              footer={transactionTableDateFooter}
                              table={DateTypes.TRANSACTION}
                            />
                            )}
          </div>
        </div>
        <div className="_best-and-worst-day-container">
          <Header1 text={Texts.bestAndWorstDayPartHeader} />
          <div className="_best-and-worst-day-header-container">
            <Header2 text={Texts.dataForAllTime} />
          </div>
          <div className="_best-and-worst-day-off-all-time-row">
            <BestAndWorstDayOfAllTimeContainer
              header={BestAndWorstDayStatus.BEST}
              data={bestDayOfAllTime}
            />
            <BestAndWorstDayOfAllTimeContainer
              header={BestAndWorstDayStatus.WORST}
              data={worstDayOfAllTime}
            />
          </div>
          <div className="_row">
            <MainBestAndWorstDayLocationSelect />
            <MainBestAndWorstDayDatePickerModeSelect />
            <BestAndWorstDayDatePicker />
            <div className="_search-button-container">
              <CustomButton
                text={Texts.search}
                handleFunction={handleWeekAnalyticsRequest}
              />
            </div>
          </div>
          <WeekAnalyticsContainer
            bestData={bestDayWeekAnalytics}
            bestFooter={bestDayWeekAnalyticsFooter}
            worstData={worstDayWeekAnalytics}
            worstFooter={worstDayWeekAnalyticsFooter}
          />
          {
                        (bestDayInChosenMounts.month && worstDayInChosenMounts.month)
                        && (
                        <>
                          <div className="_best-and-worst-day-header-container">
                            <Header2 text={Texts.dataInChosenMounts} />
                          </div>
                          <div className="_best-and-worst-day-off-all-time-row">
                            <BestAndWorstDayOfAllTimeContainer
                              header={BestAndWorstDayStatus.BEST}
                              data={bestDayInChosenMounts}
                            />
                            <BestAndWorstDayOfAllTimeContainer
                              header={BestAndWorstDayStatus.WORST}
                              data={worstDayInChosenMounts}
                            />
                          </div>
                        </>
                        )
                    }
        </div>
        <div className="_footer">
          <CustomIconButtonSend
            file={DateTypes.TRANSACTION}
          />
          {
                        width < 600 && (
                        <div className="_logout-icon-button">
                          <IconButton onClick={() => dispatch(clearUser())}>
                            <LogoutIcon className="_icon" />
                          </IconButton>
                        </div>
                        )
                    }
        </div>
      </div>
    </Screen>
  );
};

export default MainPageView;
