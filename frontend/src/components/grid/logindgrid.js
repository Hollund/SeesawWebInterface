import React, { Component } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const URL = 'ws://localhost:3030'

export default class logintemp extends Component {
    state = {
        name: 'Bob',
        messages: [],
      }
    render() {
        return ( 
            <div>
            <label htmlFor="name">
            Name:&nbsp;

            <input
                type="text"
                id={'name'}
                placeholder={'entername '}
                value={this.name}
            />
            </label>
            </div>
        );
    }
}