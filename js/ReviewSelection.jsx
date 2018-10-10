import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Review from './Review.jsx';
import styles from '../scss/style.scss';

class ReviewSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false,
            topic: "",
        }
    }

    reviewWords = () => {
        this.setState({
            clicked: true,
            topic: "word",
        })
    }

    reviewSentences = () => {
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
                        <Redirect from="/review" exact to="/review/words" />
                        <Review address="words" />
                    </Switch>
                </div>
            )
        }
        else if (this.state.clicked && this.state.topic === "sentence") {
            return (
                <div>
                    <Switch>
                        <Redirect from="/review" exact to="/review/sentences" />
                        <Review address="sentences" />
                    </Switch>
                </div>
            )
        }
        else {
            return (
                <div className="choice-tile-div">
                    <div className="choice-tile first" onClick={this.reviewWords}>Review Words</div>
                    <div className="choice-tile second" onClick={this.reviewSentences}>Review Sentences</div>
                </div>
            )
        }
    }
}

export default ReviewSelection;