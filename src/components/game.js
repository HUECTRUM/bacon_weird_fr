import React from 'react';
import Box from '@material-ui/core/Box';

import Board from './board.js';
import PlayerInfo from './playerInfo.js';
import MessageSender from './messgeSender.js';
import SocketFeed from './socketFeed.js';

import createSocket from '../api/gameSocket.js';
import messageProcessor from '../api/messageProcessor.js';
import messageStateChanger from '../api/messageStateChanger.js';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          socket: null,
          board: [],

          playerOneInfo: [],
          playerTwoInfo: [],
          playerOneDiscardOne: [],
          playerOneDiscardTwo: [],
          playerTwoDiscardOne: [],
          playerTwoDiscardTwo: [],
          playerTwoDiscards: [],

          playerOnePair: [''],
          playerTwoPair: [''],

          playerOneUaInfo: '',
          playerTwoUaInfo: '',

          playerOneHealth: 20,
          playerTwoHealth: 20,

          currentMsg: '',
          feed: [],
        }
        this.onChange = this.onChange.bind(this)
        this.onPress = this.onPress.bind(this)
        this.onMessage = this.onMessage.bind(this)
    }

    onChange = event => {
      this.setState({currentMsg: event.target.value})
    }

    onPress = () => {
      this.state.socket.send(this.state.currentMsg)
    }

    onMessage = (event) => {
      var data = JSON.parse(event.data)
      console.log("ws msg " + JSON.stringify(data))

      var state = messageStateChanger(data)
      console.log("state " + JSON.stringify(state))
      var msg = messageProcessor(data)

      var feedNew = this.state.feed
      feedNew.push(msg)

      state.feed = feedNew
      console.log("state new " + JSON.stringify(state))
      this.setState(state)
    }

    componentDidMount = () => {
      var socket = createSocket(this.onMessage)
      this.setState({socket: socket})
    }

    render() {
        const { classes, data } = this.props;

        return (
          <div>
            <PlayerInfo
              info={this.state.playerTwoInfo}
              discardOne={this.state.playerTwoDiscardOne}
              discardTwo={this.state.playerTwoDiscardTwo}
              health={this.state.playerTwoHealth}
              attack={this.state.playerTwoPair}
              ua={this.state.playerTwoUaInfo}
            />
            <Board board={this.state.board}/>
            <PlayerInfo
              info={this.state.playerOneInfo}
              discardOne={this.state.playerOneDiscardOne}
              discardTwo={this.state.playerOneDiscardTwo}
              health={this.state.playerOneHealth}
              attack={this.state.playerOnePair}
              ua={this.state.playerOneUaInfo}
            />

            <MessageSender
              onChange={this.onChange}
              onPress={this.onPress}
              currentValue={this.state.currentMsg}
            />
            <SocketFeed
              fields={this.state.feed}
            />
          </div>
        )
    }
}

export default Game;
