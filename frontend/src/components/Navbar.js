import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.name}
          </Typography>
          <Typography variant="h9" className={classes.gitlink}>
            Github link: {props.githubrepo}
          </Typography>

        </Toolbar>

      </AppBar>

    </div>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      textAlign:"left",
      flexGrow: 1,
    },
    gitlink: {
      textAlign:"right",
      flexGrow:1,
    }
  }),
);


