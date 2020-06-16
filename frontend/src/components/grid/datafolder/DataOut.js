import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const rows = [
  sensorData('sensor 1'),
  sensorData('sensor 2'),
  sensorData('Sensor 3'),
  sensorData('sensor 4'),
  sensorData('Sensor 5'),
  sensorData('sensor 6'),
  sensorData('Sensor 7'),
  sensorData('sensor 8'),
  //encoderData('encoder'),
  //accelData('Accelloremeter'),
];

function sensorData(name, val1, unit1, val2, unit2) {
  val1 = 1;
  unit1 = "on/off";
  val2 = 500;
  unit2 = "mV";

  return {
    name, val1, unit1, val2, unit2
  };
}

const useStyles = makeStyles({
  table: {
    minWidth: 300,
  },
});

export default function DataOut(props) {
  const irSensor = props.irSensor;
  //const [onoff, setonoff] = 

  const classes = useStyles();

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <TableRow>
              <TableCell>Sensor Name</TableCell>
              <TableCell align="right">Value </TableCell>
              <TableCell align="left">Unit</TableCell>
              <TableCell align="right">Online</TableCell>
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
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

    </div>

  );
}

