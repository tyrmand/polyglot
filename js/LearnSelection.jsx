import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Learn from './Learn.jsx';
import styles from '../style.scss';

class LearnSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            topic: "",
        }
    }

    learnWords = () => {
        this.setState({
            clicked: true,
            topic: "word",
        })
    }

    learnSentences = () => {
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
                        <Redirect from="/learn" exact to="/learn/words" />
                        <Learn address="words" />
                    </Switch>
                </div>
            )
        }
        else if (this.state.clicked && this.state.topic === "sentence") {
            return (
                <div>
                    <Switch>
                        <Redirect from="/learn" exact to="/learn/sentences" />
                        <Learn address="sentences" />
                    </Switch>
                </div>
            )
        }
        else {
            return (
                <div className="choice-tile-div">
                    <div className="choice-tile first" onClick={this.learnWords}>Learn Words</div>
                    <div className="choice-tile second" onClick={this.learnSentences}>Learn Sentences</div>
                </div>
            )
        }
    }
}

export default LearnSelection;