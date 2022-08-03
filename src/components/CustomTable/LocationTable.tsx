import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const LocationTable = ({ data }: any) => {
  const [newData, setNewData] = useState([]);

  function sum(a, b) {
    return a + b;
  }

  useEffect(() => {
    // eslint-disable-next-line no-return-assign
    const initialValue = 0;
    setNewData(
      data.map((row) => ({
        ...row,
        // eslint-disable-next-line max-len,no-restricted-globals
        sum: row?.transactions?.reduce(
          // eslint-disable-next-line max-len,no-restricted-globals
          (previousValue, currentValue) => sum(previousValue?.profit ? previousValue?.profit : !isNaN(previousValue) ? previousValue : 0, currentValue?.profit ? currentValue?.profit : !isNaN(currentValue) ? currentValue : 0),
          initialValue,
        ),
        average: row?.transactions?.reduce(
          // eslint-disable-next-line max-len,no-restricted-globals
          (previousValue, currentValue) => sum(previousValue?.profit ? previousValue?.profit : !isNaN(previousValue) ? previousValue : 0, currentValue?.profit ? currentValue?.profit : !isNaN(currentValue) ? currentValue : 0),
          initialValue,
        ) / row?.transactions.length,
      })),
    );
  },
  [data]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow className="_table-header-container">
            <TableCell className="_table-header">Lokacije</TableCell>
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
              <TableCell component="th" scope="row" className="_table-cell _table-cell-header">
                {row?.id}
                {' / '}
                {row?.locationName.trim()}
                {', '}
                {row?.address}
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
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default LocationTable;
