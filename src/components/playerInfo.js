import React from 'react';
import { withStyles } from '@material-ui/styles';

import PlayerGeneralInfo from './playerGeneralInfo.js';
import PlayerAttackInfo from './playerAttackInfo.js';

import gameConsts from './../consts/game_consts.js';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = theme => ({
  root: {
    flexGrow: 1,
  }
});

class PlayerInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, info, discardOne, discardTwo, health, attack, ua } = this.props;

        return (
          <Grid container className={classes.root} spacing={3}>
            <Grid item xs={3}>
            </Grid>
            <Grid item xs={3}>
              <PlayerGeneralInfo
                info={info}
                discardOne={discardOne}
                discardTwo={discardTwo}
                health={health}
                ua={ua}
              />
            </Grid>
            <Grid item xs={3}>
              <PlayerAttackInfo
                attack={attack}
              />
            </Grid>
            <Grid item xs={3}>
            </Grid>
          </Grid>
        );
    }
}

export default  withStyles(useStyles)(PlayerInfo);
