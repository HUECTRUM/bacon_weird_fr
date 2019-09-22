import React from 'react';
import { withStyles } from '@material-ui/styles';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = theme => ({
  container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 500,
      marginRight: 30,
      width: 500,
    },
    button: {
      margin: 30,
    },
    input: {
      color: "red"
    }
});

class MessageSender extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { classes, onChange, onPress, currentValue } = this.props;

        return (
          <form className={classes.container} color="secondary" noValidate autoComplete="off">
              <TextField
                error
                variant="filled"
                id="standard-name"
                label="Send message"
                className={classes.textField}
                value={currentValue}
                onChange={onChange}
                margin="normal"
                InputProps={{
                  className: classes.input
                }}
              />
              <Button onClick={onPress} variant="contained" color="secondary" className={classes.button}>
                Send data
              </Button>
          </form>
        );
    }
}

export default  withStyles(useStyles)(MessageSender);
