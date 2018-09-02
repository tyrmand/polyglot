import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import Learn from './Learn.jsx';
import styles from '../style.scss';

const activeStyle = {
    borderBottom: "3px solid red"
};

const LearnWords = () => <Learn address="words" />;
const LearnSentences = () => <Learn address="sentences" />;

const LearnSelection = () => (
    <div>
        <HashRouter>
            <div>
                <div className="choice-div">
                    <div>
                        <NavLink exact to='/learn/word' activeStyle={activeStyle}>Word</NavLink>
                    </div>
                    <div>
                        <NavLink to='/learn/sentence' activeStyle={activeStyle}>Sentence</NavLink>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/learn/word" component={LearnWords} />
                    <Route path="/learn/sentence" component={LearnSentences} />
                </Switch>
            </div>
        </HashRouter>
    </div>
)

export default LearnSelection;