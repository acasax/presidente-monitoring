import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { padTo2Digits } from '../../../../utils/dateTime/functionsDateTime';

const ComparisonAllTimeTable = ({ tableData }: any) => (
  <TableContainer component={Paper} sx={{ maxWidth: '100%', flex: 1 }}>
    <Table className="_table-container">
      <TableHead>
        <TableRow className="_table-header-container">
          <TableCell className="_table-cell-header-location _table-header">Lokacije</TableCell>
          <TableCell align="left" className="_table-header">Razlika</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData?.map((row, key) => (
          <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell-header _table-cell-header-location"
            >
              {padTo2Digits(row?.idLocation)}
              {' / '}
              {row?.locationName.trim()}
              {', '}
              {row?.address}
            </TableCell>
            <TableCell
              align="left"
              className="_table-cell"
            >
              {row?.profit ? Math.round(row?.profit * 100) / 100 : 0}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default ComparisonAllTimeTable;
