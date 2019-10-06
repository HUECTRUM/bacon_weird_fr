import React from 'react';
import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  paper: {
    height: 80,
    padding: (80, 0, 80)
  }
});

class PlayerGeneralInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, info, discardOne, discardTwo, health, ua } = this.props;

        return (
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                {info[0]}: {info[1]} at {health} hp
              </Typography>
              <Typography variant="h5" component="h3">
                UA: {ua}
              </Typography>
              <Typography component="p">
                Discard1: {discardOne.join(', ')}
              </Typography>
              <Typography component="p">
                Discard2: {discardTwo.join(', ')}
              </Typography>
            </Paper>
        );
    }
}

export default  withStyles(useStyles)(PlayerGeneralInfo);
