import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route path='/auth' component={AuthRouter} />
                <Route exact path='/' component={JournalScreen} />
            </Switch>
        </Router>
    )
}
