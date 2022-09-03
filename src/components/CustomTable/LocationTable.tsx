import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { padTo2Digits } from '../../utils/dateTime/functionsDateTime';

const LocationTable = ({ data, footer, table }: any) => {
  const [newData, setNewData] = useState([]);

  function sum(a, b) {
    return parseInt(a, 10) + parseInt(b, 10);
  }

  useEffect(() => {
    // eslint-disable-next-line no-return-assign
    if (table === 'transactions') {
      setNewData(
        data.map((row) => ({
          ...row,
          // eslint-disable-next-line max-len,no-restricted-globals
          sum: row?.transactions?.reduce(
            // eslint-disable-next-line max-len,no-restricted-globals
            (previousValue, currentValue) => sum(previousValue?.sum ? previousValue?.sum : !isNaN(previousValue) ? previousValue : 0, currentValue?.sum ? currentValue?.sum : !isNaN(currentValue) ? currentValue : 0),
            0,
          ),
          average: row?.transactions?.reduce(
            // eslint-disable-next-line max-len,no-restricted-globals
            (previousValue, currentValue) => sum(previousValue?.sum ? previousValue?.sum : !isNaN(previousValue) ? previousValue : 0, currentValue?.sum ? currentValue?.sum : !isNaN(currentValue) ? currentValue : 0),
            0,
          ) / row?.transactions.length,
        })),
      );
    }
    if (table === 'attendances') {
      setNewData(
        data.map((row) => ({
          ...row,
          // eslint-disable-next-line max-len,no-restricted-globals
          sum: row?.attendances?.reduce(
            // eslint-disable-next-line max-len,no-restricted-globals
            (previousValue, currentValue) => sum(previousValue?.sum ? previousValue?.sum : !isNaN(previousValue) ? previousValue : 0, currentValue?.sum ? currentValue?.sum : !isNaN(currentValue) ? currentValue : 0),
            0,
          ),
          average: row?.attendances?.reduce(
            // eslint-disable-next-line max-len,no-restricted-globals
            (previousValue, currentValue) => sum(previousValue?.sum ? previousValue?.sum : !isNaN(previousValue) ? previousValue : 0, currentValue?.sum ? currentValue?.sum : !isNaN(currentValue) ? currentValue : 0),
            0,
          ) / row?.attendances.length,
        })),
      );
    }
  },
  [data]);

  return (
    <TableContainer component={Paper} sx={{ maxWidth: '100%', flex: 1 }}>
      <Table className="_table-container">
        <TableHead>
          <TableRow className="_table-header-container">
            <TableCell className="_table-cell-header-location _table-header">Lokacije</TableCell>
            {
                            (table === 'transactions')
                            && newData[0]?.transactions?.map((row, key) => (
                              // eslint-disable-next-line react/no-array-index-key
                              <TableCell align="center" key={key} className="_table-header">{row?.date}</TableCell>
                            ))
                        }
            {
                            (table === 'attendances')
                            && newData[0]?.attendances?.map((row, key) => (
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
                component="th"
                scope="row"
                className="_table-cell-header _table-cell-header-location"
              >
                {padTo2Digits(row?.id)}
                {' / '}
                {row?.locationName.trim()}
                {', '}
                {row?.address}
              </TableCell>
              {
                                (table === 'transactions')
                                && row?.transactions?.map((item, index) => (
                                  <TableCell
                                    align="center"
                                    key={index}
                                    className="_table-cell"
                                  >
                                    {item?.sum ? item?.sum : '/'}
                                  </TableCell>
                                ))
                            }
              {
                                (table === 'attendances')
                                && row?.attendances?.map((item, index) => (
                                  <TableCell
                                    align="center"
                                    key={index}
                                    className="_table-cell"
                                  >
                                    {item?.sum ? item?.sum : '/'}
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
              className="_table-cell-header-location _table-header"
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
              className="_table-cell-header-location _table-header"
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

export default LocationTable;
