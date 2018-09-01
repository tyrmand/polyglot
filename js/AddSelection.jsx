import React from 'react';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';
import Add from './Add.jsx';
import styles from '../style.scss';

const activeStyle = {
    borderBottom: "3px solid red"
};

const AddSelection = () => (
    <div>
        <HashRouter>
            <div>
                <div className="choice-div">
                    <div>
                        <NavLink exact to='/add/word' activeStyle={activeStyle}>Add Words</NavLink>
                    </div>
                    <div>
                        <NavLink exact to='/add/sentence' activeStyle={activeStyle}>Add Sentences</NavLink>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/add/word" render={() => <Add address="words" />} />
                    <Route path="/add/sentence" render={() => <Add address="sentences" /> } />
                </Switch>
            </div>
        </HashRouter>
    </div>
)

export default AddSelection;