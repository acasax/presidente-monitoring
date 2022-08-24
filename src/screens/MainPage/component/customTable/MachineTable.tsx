import React, { useEffect, useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { useAppSelector } from '../../../../store/hooks';
import { getMainMachineTableData, getMainTransactionTableDateFooter } from '../../../../feautures/main/mainSlice';

const MachineTable = () => {
  const [newData, setNewData] = useState([]);
  const data = useAppSelector(getMainMachineTableData);
  const footer = useAppSelector(getMainTransactionTableDateFooter);

  function sum(a, b) {
    return a + b;
  }

  useEffect(() => {
    setNewData(
      data.map((row) => ({
        ...row,
        sum: row?.transactions?.reduce(
          // eslint-disable-next-line max-len,no-restricted-globals
          (previousValue, currentValue) => sum(previousValue?.profit ? previousValue?.profit : !isNaN(previousValue) ? previousValue : 0, currentValue?.profit ? currentValue?.profit : !isNaN(currentValue) ? currentValue : 0),
          0,
        ),
        average: row?.transactions?.reduce(
          // eslint-disable-next-line max-len,no-restricted-globals
          (previousValue, currentValue) => sum(previousValue?.profit ? previousValue?.profit : !isNaN(previousValue) ? previousValue : 0, currentValue?.profit ? currentValue?.profit : !isNaN(currentValue) ? currentValue : 0),
          0,
        ) / row?.transactions.length,
      })),
    );
  }, [data]);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', flex: 1 }}>
      <Table className="_table-container">
        <TableHead>
          <TableRow className="_table-header-container">
            <TableCell className="_table-cell-header-machine _table-header">Masine (BR. NA LOK. I TIP) </TableCell>
            {
                            newData[0]?.transactions?.map((row, key) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <TableCell align="center" key={key} className="_table-header">{row?.date}</TableCell>
                            ))
                        }
            <TableCell align="center" className="_table-header">Total</TableCell>
            <TableCell align="center" className="_table-header">Prosek</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newData?.map((row, key) => (
            <TableRow
              key={key}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell
                className="_table-cell-header"
              >
                {row?.orderNumber}
                {' '}
                {row?.typeOfGame}
              </TableCell>
              {
                                row?.transactions?.map((item, index) => (
                                  <TableCell
                                    align="center"
                                    key={index}
                                    className="_table-cell"
                                  >
                                    {item?.profit ? item?.profit : '/'}
                                  </TableCell>
                                ))
                            }
              <TableCell align="center" className="_table-cell">
                {row?.sum}
              </TableCell>
              <TableCell align="center" className="_table-cell">
                {Math.round(row?.average * 100) / 100}
              </TableCell>
            </TableRow>
          ))}
          <TableRow
            className="_table-header-container"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell-header-machine _table-header"
            >
              Total
            </TableCell>
            {
                            footer.map((item, index) => (
                              <TableCell align="center" className="_table-cell" key={index}>
                                {item?.total ? item?.total : 0}
                              </TableCell>
                            ))
                        }
          </TableRow>
          <TableRow
            className="_table-header-container"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell-header-machine _table-header"
            >
              Prosek
            </TableCell>
            {
                            footer.map((item, index) => (
                              <TableCell align="center" className="_table-cell" key={index}>
                                {item?.average ? Math.round(item?.average * 100) / 100 : 0}
                              </TableCell>
                            ))
                        }
          </TableRow>

        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MachineTable;
