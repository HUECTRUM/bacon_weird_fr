import React from 'react';

import Typography from '@material-ui/core/Typography';



class SocketFeedInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { classes, text } = this.props;

        return (
          <Typography variant="body1">
            {text}
          </Typography>
        );
    }
}

export default SocketFeedInput;
