import React from 'react';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, Chart, Legend, LineSeries, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation, ArgumentScale } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';

import { energyConsumption as data } from './demo-data/date-vizualization.js';

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

const CustomChart = () => (
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
        argumentField="country"
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
export default CustomChart;
