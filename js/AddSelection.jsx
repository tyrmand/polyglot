import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Add from './Add.jsx';
import styles from '../scss/style.scss';

class AddSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            topic: "",
        }
    }

    addWords = () => {
        this.setState({
            clicked: true,
            topic: "word",
        })
    }

    addSentences = () => {
        this.setState({
            clicked: true,
            topic: "sentence",
        })
    }

    render() {
        if (this.state.clicked && this.state.topic === "word") {
            return (
                <div>
                    <Switch>
                        <Redirect from="/add" exact to="/add/words" />
                        <Add address="words" />
                    </Switch>
                </div>
            )
        }
        else if (this.state.clicked && this.state.topic === "sentence") {
            return (
                <div>
                    <Switch>
                        <Redirect from="/add" exact to="/add/sentences" />
                        <Add address="sentences" />
                    </Switch>
                </div>
            )
        }
        else {
            return (
                <div className="choice-tile-div">
                    <div className="choice-tile first" onClick={this.addWords}>Add Words</div>
                    <div className="choice-tile second" onClick={this.addSentences}>Add Sentences</div>
                </div>
            )
        }
    }
}

export default AddSelection;