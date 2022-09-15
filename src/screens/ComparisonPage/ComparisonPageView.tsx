import React, { FC, useEffect } from 'react';
import Screen from '../Screen';
import { clearAlertMsg, setAlertMsg, setAlertOpenStatus, setAlertStatus } from '../../components/CustomAlert/alertSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useLoading } from '../../hooks/UseLoading';
import { getToken } from '../../feautures/auth/authSlice';
import { getComparisonAllTimeDate } from '../../feautures/comparison/ComparisonService';
import { getComparisonAllTime, setComparisonAllTimeData } from '../../feautures/comparison/comparisonSlice';
import ComparisonAllTimeTable from './component/ComparisonAllTimeTable';
import Header1 from '../../components/Text/Header1';
import Header2 from '../../components/Text/Header2';

interface PageTestProps {
  test?: string
}

const ComparisonPageView: FC<PageTestProps> = () => {
  const token = useAppSelector(getToken);
  const tableComparisonAllTimeData = useAppSelector(getComparisonAllTime);
  const dispatch = useAppDispatch();

  const {
    setLoading,
    resetLoading,
  } = useLoading();

  const fetchLComparisonAllTimeDate = async () => {
    setLoading();
    try {
      const res = await getComparisonAllTimeDate(token, { dates: ['2021-07-11', new Date().toISOString().split('T')[0]] });
      if (res?.message) {
        dispatch(setAlertStatus('error'));
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

  return (
    <Screen>
      <div className="_comparison-page">
        <Header1 text="RAZLIKA KA UPRAVI" />
        {tableComparisonAllTimeData.length !== 0
                    && (
                    <>
                      <Header2 text="Razlika oduvek" />
                      <ComparisonAllTimeTable
                        tableData={tableComparisonAllTimeData}
                      />
                    </>

                    )}
      </div>
    </Screen>
  );
};

export default ComparisonPageView;
