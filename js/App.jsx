import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Intro from './Intro.jsx';
import LearnSelection from './LearnSelection.jsx';
import ReviewSelection from './ReviewSelection.jsx';
import AddSelection from './AddSelection.jsx';
import styles from '../style.scss';

const App = ({children}) => (
    <div>
        <HashRouter>
                <div>
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Intro}/>
                        <Route path="/learn" component={LearnSelection}/>
                        <Route path="/review" component={ReviewSelection}/>
                        <Route path="/add" component={AddSelection}/>                            
                    </Switch>
                </div>
        </HashRouter>
        {children}
    </div>
)

export default App;