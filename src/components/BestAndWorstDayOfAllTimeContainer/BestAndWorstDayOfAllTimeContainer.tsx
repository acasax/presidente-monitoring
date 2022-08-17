import React from 'react';
import { translateDayName, translateMountName } from '../../utils/dateTime/functionsDateTime';

const BestAndWorstDayOfAllTimeContainer = ({ header, data }: any) => (
  <div
    className={header === 'Najbolji' ? '_best-and-worst-day-of-all-time-container _best-day-of-all-time-container' : '_best-and-worst-day-of-all-time-container'}
  >
    <div className="_header-container-container">
      <p className={header === 'Najbolji' ? '_header _best' : '_header _worst'}>{header}</p>
    </div>
    <div className="_data-row">
      <div className="_cell">
        <p className="_header-cell _text-cell">Mesec</p>
        <p className="_data-cell _text-cell">{translateMountName(data?.month)}</p>
      </div>
      <div className="_cell">
        <p className="_header-cell _text-cell">Dan</p>
        <p className="_data-cell _text-cell">
          {translateDayName(data?.day)}
        </p>
      </div>
      <div className="_cell">
        <p className="_header-cell _text-cell">Datum</p>
        <p className="_data-cell _text-cell">{data?.date}</p>
      </div>
    </div>
  </div>
);

export default BestAndWorstDayOfAllTimeContainer;
