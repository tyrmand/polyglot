import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import Review from './Review.jsx';
import styles from '../style.scss';

const activeStyle = {
    borderBottom: "3px solid red"
};

const ReviewWords = () => <Review address="words" />;
const ReviewSentences = () => <Review address="sentences" />;

const ReviewSelection = () => (
    <div>
        <HashRouter>
            <div>
                <div className="choice-div">
                    <div>
                        <NavLink exact to='/review/word' activeStyle={activeStyle}>Review Words</NavLink>
                    </div>
                    <div>
                        <NavLink exact to='/review/sentence' activeStyle={activeStyle}>Review Sentences</NavLink>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/review/word" component={ReviewWords} />
                    <Route path="/review/sentence" component={ReviewSentences} />
                </Switch>
            </div>
        </HashRouter>
    </div>
)

export default ReviewSelection;