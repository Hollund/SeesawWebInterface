import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DataOut from './datafolder/DataOut';
import Anima from '../../animation/anima';

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

export default function LayoutGrid(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            Link to documentation and how to use
          </Paper>
        </Grid>

        <Grid item xs>
          <Paper className={classes.paper}>  </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={1}>
        <Grid item xs>
          <Paper className={classes.paper}>
            <DataOut irSensor={props.irSensor}></DataOut>
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

