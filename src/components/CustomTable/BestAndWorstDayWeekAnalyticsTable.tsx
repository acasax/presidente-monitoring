import React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import { translateDayName } from '../../utils/dateTime/functionsDateTime';
import { BestAndWorstDayStatus } from '../../utils/Constants';
import { Texts } from '../../utils/Texts';

const BestAndWorstDayWeekAnalyticsTable = ({ header, data, footer }: any) => (
  <TableContainer
    component={Paper}
    className={header.includes(BestAndWorstDayStatus.BEST) ? '_week-analytic-table-container _week-analytic-best-table-container' : '_week-analytic-table-container'}
  >
    <div className="_week-analytic-table-header-container">
      <p
        className={header.includes(BestAndWorstDayStatus.BEST) ? '_table-header-text _best' : '_table-header-text _worst'}
      >
        {header}
      </p>
    </div>
    <Table
      className="_table-container"
      style={{ tableLayout: 'auto' }}
    >
      <TableHead>
        <TableRow
          className="_table-header-container"
        >
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.weekInYear}
          </TableCell>
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.weekInMonth}
          </TableCell>
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.duration}
          </TableCell>
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.day}
          </TableCell>
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.date}
          </TableCell>
          <TableCell
            className="_table-header _week-analytic-table-cell"
            align="center"
          >
            {Texts.valuesInWeek}
          </TableCell>
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
              align="center"
            >
              {row?.week}
            </TableCell>
            <TableCell
              align="center"
              className="_table-cell _week-analytic-table-cell"
            >
              {key + 1}
            </TableCell>
            <TableCell
              align="center"
              className="_table-cell _week-analytic-table-cell"
            >
              {row?.startDateOfWeek}
              {' '}
              {row?.endDateOfWeek}
            </TableCell>
            <TableCell
              align="center"
              className="_table-cell _week-analytic-table-cell"
            >
              {row?.day ? translateDayName(row?.day) : '/'}
            </TableCell>
            <TableCell
              align="center"
              className="_table-cell _week-analytic-table-cell"
            >
              {row?.dateInWeek ? row?.dateInWeek : '/'}
            </TableCell>
            <TableCell
              align="center"
              className="_table-cell _week-analytic-table-cell"
            >
              {row?.weekSum ? row?.weekSum : '/'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <div
      className="_week-analytic-table-footer-container"
    >
      <TableRow
        className="_week-analytic-table-footer-row"
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell
          component="th"
          scope="row"
          className="_table-cell _week-analytic-table-footer-header-cell"
          sx={{ border: 0 }}
        >
          {Texts.bestDateInMount}
        </TableCell>
        <TableCell
          align="center"
          className={header.includes(BestAndWorstDayStatus.BEST) ? '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-best' : '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-worst'}
          sx={{ border: 0 }}
        >
          {footer?.bestDate?.day ? footer?.bestDate?.day : '/'}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          className="_table-cell _week-analytic-table-footer-value-header-cell"
          sx={{ border: 0 }}
        >
          {Texts.value}
        </TableCell>
        <TableCell
          align="center"
          className={header.includes(BestAndWorstDayStatus.BEST) ? '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-best' : '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-worst'}
          sx={{ border: 0 }}
        >
          {footer?.bestDate?.sum ? footer?.bestDate?.sum : '/'}
        </TableCell>
      </TableRow>
      <TableRow
        className="_week-analytic-table-footer-row"
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell
          component="th"
          scope="row"
          className="_table-cell _week-analytic-table-footer-header-cell"
          sx={{ border: 0 }}
        >
          {Texts.bestDayInMount}
        </TableCell>
        <TableCell
          align="center"
          className={header.includes(BestAndWorstDayStatus.BEST) ? '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-best' : '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-worst'}
          sx={{ border: 0 }}
        >
          {footer?.bestDay?.day ? translateDayName(footer?.bestDay?.day) : '/'}
        </TableCell>
        <TableCell
          component="th"
          scope="row"
          className="_table-cell _week-analytic-table-footer-value-header-cell"
          sx={{ border: 0 }}
        >
          Vrednost
        </TableCell>
        <TableCell
          align="center"
          className={header.includes(BestAndWorstDayStatus.BEST) ? '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-best' : '_week-analytic-table-footer-value-cell _table-cell _week-analytic-table-footer-row-text-worst'}
          sx={{ border: 0 }}
        >
          {footer?.bestDay?.sum ? footer?.bestDay?.sum : '/'}
        </TableCell>
      </TableRow>
    </div>
  </TableContainer>
);

export default BestAndWorstDayWeekAnalyticsTable;
