import React from 'react';
import './App.css';
import $ from 'jquery';
import Game from './components/game.js';
import {Helmet} from "react-helmet";


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <Helmet>
                  <style>{'body { background-color: #2f383d; }'}</style>
                </Helmet>
                <Game />
            </div>
        );
    }
}


export default App;
