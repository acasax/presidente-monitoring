import React from 'react';
import BestAndWorstDayWeekAnalyticsTable from '../CustomTable/BestAndWorstDayWeekAnalyticsTable';

const WeekAnalyticsContainer = ({ bestData, bestFooter, worstData, worstFooter }: any) => (
  <div className="_week-analytics-container">
    {
                bestData?.map((item, key) => (
                  <div className="_week-analytics-row" key={key}>
                    <BestAndWorstDayWeekAnalyticsTable
                      header={`Najbolji u ${item?.month}`}
                      data={item?.monthAnalyticsByWeek}
                      footer={bestFooter[key]}
                    />
                    <BestAndWorstDayWeekAnalyticsTable
                      header={`Najgori u ${worstData[key]?.month}`}
                      data={worstData[key]?.monthAnalyticsByWeek}
                      footer={worstFooter[key]}
                    />
                  </div>
                ))
            }
  </div>
);

export default WeekAnalyticsContainer;
