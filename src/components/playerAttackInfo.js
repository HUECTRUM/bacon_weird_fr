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

class PlayerAttackInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, attack } = this.props;

        return (
            <Paper className={classes.paper}>
              <Typography variant="h5" component="h3">
                Current attack:
              </Typography>
              <Typography component="p">
                {attack}
              </Typography>
            </Paper>
        );
    }
}

export default  withStyles(useStyles)(PlayerAttackInfo);
