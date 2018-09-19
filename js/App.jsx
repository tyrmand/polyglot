import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './Navigation.jsx';
import Intro from './Intro.jsx';
import LearnSelection from './LearnSelection.jsx';
import ReviewSelection from './ReviewSelection.jsx';
import AddSelection from './AddSelection.jsx';
import Review from './Review.jsx';

import styles from '../style.scss';

const ReviewWords = () => <Review address="words" />;
const ReviewSentences = () => <Review address="sentences" />;

const App = ({ children }) => (
    <div>
        <HashRouter>
            <div>
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Intro} />
                    <Route path="/learn" component={LearnSelection} />
                    <Route path="/review" component={ReviewSelection} />
                    <Route path="/add" component={AddSelection} />
                    <Route path="/add/word" render={() => <Add address="words" />} />
                    <Route path="/add/sentence" render={() => <Add address="sentences" /> } />
                    <Route path="/review/word" render={() => <Review address="words" />} />
                    <Route path="/review/sentence" render={ReviewSentences} />
                    {/* <Redirect exact to="/" /> */}
                </Switch>
            </div>
        </HashRouter>
        {children}
    </div>
)

export default App;