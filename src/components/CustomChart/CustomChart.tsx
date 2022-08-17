import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ArgumentAxis, Chart, Legend, LineSeries, ValueAxis } from '@devexpress/dx-react-chart-material-ui';
import { styled } from '@mui/material/styles';
import { Animation, ArgumentScale } from '@devexpress/dx-react-chart';
import { curveCatmullRom, line } from 'd3-shape';
import { scalePoint } from 'd3-scale';
import TableContainer from '@mui/material/TableContainer';

import { useAppSelector } from '../../store/hooks';
import { getChartData } from '../../feautures/main/mainSlice';

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
  const [chartArgument, setChartArgument] = useState([]);

  useEffect(() => {
    let argument = Object.keys(chartData[0]);
    argument.shift();
    argument = argument.map((element) => element.trim());
    setChartArgument(argument);
  }, [chartData]);

  return (
    <TableContainer component={Paper}>
      <Paper sx={{
        minWidth: chartData.length > 25 ? 2000 : 0,
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
      }}
      >
        <StyledChart
          data={chartData}
        >
          <ArgumentScale factory={scalePoint} />
          <ArgumentAxis />
          <ValueAxis />
          {
                        chartArgument.includes('1Kruševac') && (
                        <LineSeries
                          name="1Kruševac"
                          valueField="1Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes('2Kruševac') && (
                        <LineSeries
                          name="2Kruševac"
                          valueField="2Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('3Aleksandrovac') && (
                        <LineSeries
                          name="3Aleksandrovac"
                          valueField="3Aleksandrovac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('4Brus') && (
                        <LineSeries
                          name="4Brus"
                          valueField="4Brus"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('7Paraćin') && (
                        <LineSeries
                          name="7Paraćin"
                          valueField="7Paraćin"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('8Kruševac') && (
                        <LineSeries
                          name="8Kruševac"
                          valueField="8Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('9Kruševac') && (
                        <LineSeries
                          name="9Kruševac"
                          valueField="9Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('10Kraljevo') && (
                        <LineSeries
                          name="10Kraljevo"
                          valueField="10Kraljevo"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('11Kruševac') && (
                        <LineSeries
                          name="11Kruševac"
                          valueField="11Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('12Borča') && (
                        <LineSeries
                          name="12Borča"
                          valueField="12Borča"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('13Kraljevo') && (
                        <LineSeries
                          name="13Kraljevo"
                          valueField="13Kraljevo"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes('14Kruševac') && (
                        <LineSeries
                          name="14Kruševac"
                          valueField="14Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          <Legend position="bottom" rootComponent={Root} itemComponent={Item} labelComponent={Label} />
          <Animation />
        </StyledChart>
      </Paper>
    </TableContainer>
  );
};
export default CustomChart;
