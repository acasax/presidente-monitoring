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

const CustomChart = () => {
  const chartData = useAppSelector(getChartData);
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
        minWidth: chartData.length > 25 ? width < 600 ? 1000 : 2000 : 0,
        width: '100%',
        paddingTop: width < 600 ? '20px' : '30px',
        paddingBottom: width < 600 ? '20px' : '30px',
        paddingLeft: width < 600 ? '20px' : '30px',
        paddingRight: width < 600 ? '40px' : '50px',
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
                          name="01 Kruševac, Trg Despota Stefana 30"
                          valueField="1Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes('2Kruševac') && (
                        <LineSeries
                          name="02 Kruševac, Cara Lazara 193"
                          valueField="2Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('3Aleksandrovac') && (
                        <LineSeries
                          name="03 Aleksandrovac, 29. Novembra bb"
                          valueField="3Aleksandrovac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('4Brus') && (
                        <LineSeries
                          name="04 Brus, Kralja Petra I 42"
                          valueField="4Brus"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('7Paraćin') && (
                        <LineSeries
                          name="07 Paraćin, Vojvode Mišića 8"
                          valueField="7Paraćin"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('8Kruševac') && (
                        <LineSeries
                          name="08 Kruševac, Bircaninova 10"
                          valueField="8Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('9Kruševac') && (
                        <LineSeries
                          name="09 Kruševac, Vidovdanska 233"
                          valueField="9Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('10Kraljevo') && (
                        <LineSeries
                          name="10 Kraljevo, Dimitrija Tucovića 40"
                          valueField="10Kraljevo"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('11Kruševac') && (
                        <LineSeries
                          name="11 Kruševac, Rasinska 101"
                          valueField="11Kruševac"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('12Borča') && (
                        <LineSeries
                          name="12 Borča, Zrenjaninski put 155"
                          valueField="12Borča"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }

          {
                        chartArgument.includes('13Kraljevo') && (
                        <LineSeries
                          name="13 Kraljevo, Trg Kralja Petra I Oslobodioca 3/1"
                          valueField="13Kraljevo"
                          argumentField="date"
                          seriesComponent={Line}
                        />
                        )
                    }
          {
                        chartArgument.includes('14Kruševac') && (
                        <LineSeries
                          name="14 Kruševac, Čolak Antina 17"
                          valueField="14Kruševac"
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
