import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, Chart, Legend, LineSeries, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation, ArgumentScale } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';

import { energyConsumption as data } from './demo-data/date-vizualization.js';
import { useAppSelector } from '../../store/hooks';
import { getChartData } from '../../feautures/main/mainSlice';
import { padTo2Digits } from '../../utils/dateTime/functionsDateTime';

const PREFIX = 'Demo';

const classes = {
  title: `${PREFIX}-title`,
  chart: `${PREFIX}-chart`,
};

const Line = (props) => (
  <LineSeries.Path
    {...props}
    path={line()
      .x(({ arg }) => arg)
      .y(({ val }) => val)
      .curve(curveCatmullRom)}
  />
);

const Root = (props) => (
  <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = (props) => (
  <Legend.Label {...props} sx={{ mb: 1, whiteSpace: 'nowrap' }} />
);
const Item = (props) => (
  <Legend.Item {...props} sx={{ flexDirection: 'column-reverse' }} />
);

const StyledChart = styled(Chart)(() => ({
  [`&.${classes.chart}`]: {
    paddingRight: '30px',
  },
}));

const CustomChart = () => {
  const chartData = useAppSelector(getChartData);
  const [newData, setNewData] = useState([]);

  // function keyValue(a) {
  //   console.log('a', a);
  //   Object.preventExtensions(a);
  // eslint-disable-next-line max-len
  //   Object.defineProperty(...a, `${padTo2Digits(a?.id)}/${a?.locationName.trim()}`, { value: a?.profit ? a?.profit : 0 });
  //   // a[`${padTo2Digits(a?.id)}/${a?.locationName}/${a?.address}`] = a?.profit ? a?.profit : 0;
  //   return a;
  // }

  useEffect(() => {
    console.log('data', chartData);
    setNewData(chartData.map((row) => ({
      date: row?.date,
      // eslint-disable-next-line no-return-assign
      ...row?.locations?.map((a) => ({
        [`${padTo2Digits(a?.id)}/${a?.locationName.trim()}`]: a?.profit ? a?.profit : 0,
      })),
    })));
    console.log('newData', newData);
    console.log('data', data);
  }, [chartData]);

  return (
    <Paper sx={{ width: '100%', padding: '30px', boxSizing: 'border-box' }}>
      <StyledChart
        data={data}
      >
        <ArgumentScale factory={scalePoint} />
        <ArgumentAxis />
        <ValueAxis />

        <LineSeries
          name="Hydro-electric"
          valueField="hydro"
          argumentField="date"
          seriesComponent={Line}
        />
        <LineSeries
          name="Oil"
          valueField="oil"
          argumentField="country"
          seriesComponent={Line}
        />
        <LineSeries
          name="Natural gas"
          valueField="gas"
          argumentField="country"
          seriesComponent={Line}
        />
        <LineSeries
          name="Coal"
          valueField="coal"
          argumentField="country"
          seriesComponent={Line}
        />
        <LineSeries
          name="Nuclear"
          valueField="nuclear"
          argumentField="country"
          seriesComponent={Line}
        />
        <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
        <Animation />
      </StyledChart>
    </Paper>
  );
};
export default CustomChart;
