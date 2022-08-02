import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const data = [
  {
    sid: '127000004',
    address: 'Kralja Petra I 42',
    locationName: 'Brus ',
    transactions: [
      {
        profit: 485670,
        date: '17.07.2022',
      },
      {
        profit: 435460,
        date: '19.07.2022',
      },
    ],
  },
  {
    sid: '127000004',
    address: 'Kralja Petra I 42',
    locationName: 'Brus ',
    transactions: [
      {
        profit: 485670,
        date: '17.07.2022',
      },
      {
        profit: 435460,
        date: '19.07.2022',
      },
    ],
  },
  {
    sid: '127000007',
    address: 'Vojvode Mišića 8',
    locationName: 'Paraćin',
    transactions: [
      {
        profit: -448720,
        date: '17.07.2022',
      },
      {
        profit: 811280,
        date: '19.07.2022',
      },
    ],
  },
  {
    sid: '127000007',
    address: 'Vojvode Mišića 8',
    locationName: 'Paraćin',
    transactions: [
      {
        profit: -448720,
        date: '17.07.2022',
      },
      {
        profit: 811280,
        date: '19.07.2022',
      },
    ],
  },
  {
    sid: '127000017',
    address: '29. Novembra bb',
    locationName: 'Aleksandrovac',
    transactions: [
      {
        profit: -1126820,
        date: '17.07.2022',
      },
      {
        profit: -55672,
        date: '19.07.2022',
      },
    ],
  },
  {
    sid: '127000017',
    address: '29. Novembra bb',
    locationName: 'Aleksandrovac',
    transactions: [
      {
        profit: -1126820,
        date: '17.07.2022',
      },
      {
        profit: -55672,
        date: '19.07.2022',
      },
    ],
  },
];

const CustomTable = () => (
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Lokacije</TableCell>
          <TableCell align="center">Calories</TableCell>
          <TableCell align="center">Fat&nbsp;(g)</TableCell>
          <TableCell align="center">Total</TableCell>
          <TableCell align="center">Prosek</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {/* eslint-disable-next-line react/destructuring-assignment */}
        {data?.map((row) => (
          <TableRow
            key={row?.sid}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {row?.locationName}
              {row?.address}
            </TableCell>
            {
                                row?.transactions?.map((item) => (
                                  <TableCell align="center">{item?.profit}</TableCell>
                                ))
                            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default CustomTable;
