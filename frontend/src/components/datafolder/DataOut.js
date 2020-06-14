import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { sensorData } from './sensorData.1';
import { accelData } from './accelData';
import { encoderData } from './EncoderData';

const useStyles = makeStyles({
  table: {
    minWidth: 450,
  },
});

const rows = [
  sensorData('sensor 1'),
  sensorData('sensor 2'),
  sensorData('Sensor 3'),
  sensorData('sensor 4'),
  sensorData('Sensor 5'),
  sensorData('sensor 6'),
  sensorData('Sensor 7'),
  sensorData('sensor 8'),
  encoderData('encoder'),
  accelData('Accelloremeter'),
];


export default function DataOut() {
  
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
    <header></header>
      <Table className={classes.table} aria-label="Data Reading">
        <TableHead>
          <TableRow>
            <TableCell>SensorName</TableCell>
            <TableCell align="right">Value A</TableCell>
            <TableCell align="left">Unit</TableCell>
            <TableCell align="right">Value B</TableCell>
            <TableCell align="left">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.val1}</TableCell>
              <TableCell align="left">{row.unit1}</TableCell>
              <TableCell align="right">{row.val2}</TableCell>
              <TableCell align="left">{row.unit2}</TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}
