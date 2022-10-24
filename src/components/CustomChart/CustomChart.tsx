import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, Chart, Legend, LineSeries, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation, ArgumentScale } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';
import TableContainer from '@mui/material/TableContainer';
import { LocationsFullNames, LocationsShortNames } from '../../utils/Constants';

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
  <Legend.Root
    {...props}
    sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }}
  />
);

const RootMobile = (props) => (
  <Legend.Root
    {...props}
    sx={{ display: 'flex', margin: 'auto', flexDirection: 'column' }}
  />
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

const CustomChart = ({ chartData }: any) => {
  const [chartArgument, setChartArgument] = useState([]);

  const [width, setWidth] = useState(0);

  const updateDimension = () => {
    const widthScreen = window.innerWidth;
    setWidth(widthScreen);
  };

  useEffect(() => {
    updateDimension();
  }, [updateDimension]);

  useEffect(() => {
    let argument = Object.keys(chartData[0]);
    argument.shift();
    argument = argument.map((element) => element.trim());
    setChartArgument(argument);
  }, [chartData]);

  return (
    <TableContainer component={Paper}>
      <Paper sx={{
        // eslint-disable-next-line max-len
        minWidth: chartArgument.length > 10 ? 3500 : chartArgument.length > 8 ? 2700 : chartArgument.length > 6 ? 2500 : chartArgument.length > 4 ? 2000 : chartData.length > 25 ? 2000 : (width < 600 && chartData.length > 5) ? 1000 : 0,
        width: '100%',
        height: '100%',
        paddingTop: width < 600 ? '20px' : '30px',
        paddingBottom: width < 600 ? '20px' : '30px',
        paddingLeft: width < 600 ? '20px' : '30px',
        paddingRight: width < 600 ? '40px' : '50px',
        boxSizing: 'border-box',
      }}
      >
        <StyledChart
          data={chartData}
          height={width < 600 ? 1000 : 600}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />
          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC1) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC1}
                          valueField={LocationsShortNames.KRUSEVAC1}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC2) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC2}
                          valueField={LocationsShortNames.KRUSEVAC2}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.ALEKSANDROVAC3) && (
                        <LineSeries
                          name={LocationsFullNames.ALEKSANDROVAC3}
                          valueField={LocationsShortNames.ALEKSANDROVAC3}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.BRUS4) && (
                        <LineSeries
                          name={LocationsFullNames.BRUS4}
                          valueField={LocationsShortNames.BRUS4}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.PARACIN7) && (
                        <LineSeries
                          name={LocationsFullNames.PARACIN7}
                          valueField={LocationsShortNames.PARACIN7}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC8) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC8}
                          valueField={LocationsShortNames.KRUSEVAC8}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC9) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC9}
                          valueField={LocationsShortNames.KRUSEVAC9}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.KRALJEVO10) && (
                        <LineSeries
                          name={LocationsFullNames.KRALJEVO10}
                          valueField={LocationsShortNames.KRALJEVO10}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC11) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC11}
                          valueField={LocationsShortNames.KRUSEVAC11}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.BORCA12) && (
                        <LineSeries
                          name={LocationsFullNames.BORCA12}
                          valueField={LocationsShortNames.BORCA12}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes(LocationsShortNames.KRALJEVO13) && (
                        <LineSeries
                          name={LocationsFullNames.KRALJEVO13}
                          valueField={LocationsShortNames.KRALJEVO13}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes(LocationsShortNames.KRUSEVAC14) && (
                        <LineSeries
                          name={LocationsFullNames.KRUSEVAC14}
                          valueField={LocationsShortNames.KRUSEVAC14}
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          <Legend
            position="bottom"
            rootComponent={width < 600 ? RootMobile : Root}
            itemComponent={Item}
            labelComponent={Label}
          />
          <Animation />
        </StyledChart>
      </Paper>
    </TableContainer>
  );
};
export default CustomChart;
