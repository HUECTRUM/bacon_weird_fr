import React from 'react';
import { withStyles } from '@material-ui/styles';

import SocketFeedInput from './socketFeedInput.js';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    width: 800,
    height: 250,
  }
});

class SocketFeed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, fields } = this.props

        const input = fields
          .map(value => (<SocketFeedInput text={value}/>))

        return (
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Paper style={{maxHeight: '100%', overflow: 'auto'}} className={classes.paper}>
                  {input}
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        );
    }
}

export default  withStyles(useStyles)(SocketFeed);
