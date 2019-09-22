import React from 'react';
import { withStyles } from '@material-ui/styles';

import BoardSpace from './boardSpace.js';

import gameConsts from './../consts/game_consts.js';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class GameBoard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, board } = this.props;

        const fields = gameConsts.boardIndexes
          .map(value => (<BoardSpace text={board[value]}/>))

        return (
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {fields}
              </Grid>
            </Grid>
          </Grid>
        );
    }
}

export default  withStyles(useStyles)(GameBoard);
