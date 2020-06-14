
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataOut from '../datafolder/DataOut';
import Anima from '../../animation/anima';
import { sensorData } from '../datafolder/sensorData.1';
import { accelData } from '../datafolder/accelData';
import { encoderData } from '../datafolder/EncoderData';

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function LayoutGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            Link to documentation and how to use
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>,
          xs  
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <DataOut>{rows}</DataOut>
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>
            <Anima />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

