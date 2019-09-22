import React from 'react';
import { withStyles } from '@material-ui/styles';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = theme => ({
  paper: {
    height: 40,
    width: 110,
    padding: (40, 0, 40)
  }
});

class BoardSpace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, text } = this.props;

        return (
          <Grid key={text} item>
            <Paper className={classes.paper}>
              <Typography align='center' variant="h3" component="h3">
                {text}
              </Typography>
            </Paper>
          </Grid>
        );
    }
}

export default  withStyles(useStyles)(BoardSpace);
