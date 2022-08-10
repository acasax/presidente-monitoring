import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';

const BestAndWorstDayWeekAnalyticsTable = ({ header, data, footer }: any) => (
  <TableContainer
    component={Paper}
    className={header === 'Najbolji' ? '_week-analytic-table-container _week-analytic-best-table-container' : '_week-analytic-table-container'}
  >
    <div className="_week-analytic-table-header-container">
      <p className={header === 'Najbolji' ? '_table-header-text _best' : '_table-header-text _worst'}>{header}</p>
    </div>
    <Table className="_table-container">
      <TableHead>
        <TableRow className="_table-header-container">
          <TableCell className="_table-header _week-analytic-table-cell">Nedelja u godini</TableCell>
          <TableCell className="_table-header _week-analytic-table-cell" align="center">Nedelja u mesecu</TableCell>
          <TableCell className="_table-header _week-analytic-table-cell" align="center">Trajanje od - do</TableCell>
          <TableCell className="_table-header _week-analytic-table-cell" align="center">Datum</TableCell>
          <TableCell className="_table-header _week-analytic-table-cell" align="center">Dan</TableCell>
          <TableCell className="_table-header _week-analytic-table-cell" align="center">Vrednost</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {data?.map((row, key) => (
          <TableRow
            key={key}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              className="_table-cell _week-analytic-table-cell"
            >
              {row?.week}
            </TableCell>
            <TableCell align="center" className="_table-cell _week-analytic-table-cell">
              {key + 1}
            </TableCell>
            <TableCell align="center" className="_table-cell _week-analytic-table-cell">
              {row?.startDateOfWeek}
              {' '}
              {row?.endDateOfWeek}
            </TableCell>
            <TableCell align="center" className="_table-cell _week-analytic-table-cell">
              {row?.day ? row?.day : '/'}
            </TableCell>
            <TableCell align="center" className="_table-cell _week-analytic-table-cell">
              {row?.dateInWeek ? row?.dateInWeek : '/'}
            </TableCell>
            <TableCell align="center" className="_table-cell _week-analytic-table-cell">
              {row?.weekSum ? row?.weekSum : '/'}
            </TableCell>
          </TableRow>
        ))}
        <div className="_week-analytic-table-footer-container">
          <TableRow
            className="_week-analytic-table-footer-row"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell"
              sx={{ border: 0 }}
            >
              Najbolji datum u mesecu
            </TableCell>
            <TableCell
              align="center"
              className={header === 'Najbolji' ? '_table-cell _week-analytic-table-footer-row-text-best' : '_table-cell _week-analytic-table-footer-row-text-worst'}
              sx={{ border: 0 }}
            >
              {footer?.date ? footer?.date : '/'}
            </TableCell>
          </TableRow>
          <TableRow
            className="_week-analytic-table-footer-row"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell"
              sx={{ border: 0 }}
            >
              Najbolji dan u mesecu
            </TableCell>
            <TableCell
              align="center"
              className={header === 'Najbolji' ? '_table-cell _week-analytic-table-footer-row-text-best' : '_table-cell _week-analytic-table-footer-row-text-worst'}
              sx={{ border: 0 }}
            >
              {footer?.day ? footer?.day : '/'}
            </TableCell>
          </TableRow>
          <TableRow
            className="_week-analytic-table-footer-row"
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell
              component="th"
              scope="row"
              className="_table-cell"
              sx={{ border: 0 }}
            >
              Vrednost
            </TableCell>
            <TableCell
              align="center"
              className={header === 'Najbolji' ? '_table-cell _week-analytic-table-footer-row-text-best' : '_table-cell _week-analytic-table-footer-row-text-worst'}
              sx={{ border: 0 }}
            >
              {footer?.totalProfitByDate ? footer?.totalProfitByDate : '/'}
            </TableCell>
          </TableRow>
        </div>
      </TableBody>

    </Table>
  </TableContainer>
);

export default BestAndWorstDayWeekAnalyticsTable;
