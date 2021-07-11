import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebaseConfig';
import { useDispatch } from 'react-redux';
import { loginAction } from '../actions/authActions';
import { PublicRoute } from './PublicRoute';
import { PrivateRoute } from './PrivateRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user?.uid) {
                dispatch(loginAction(user.uid, user.displayName));
                setIsUserAuthenticated(true);
            } else {
                setIsUserAuthenticated(false);
            }

            setChecking(false);
        });
    }, [dispatch, setChecking]);

    if (checking) {
        return <h1>Loading...</h1>
    }

    return (
        <Router>
            <Switch>
                <PublicRoute isAuthenticated={isUserAuthenticated} path='/auth' component={AuthRouter}></PublicRoute>
                <PrivateRoute isAuthenticated={isUserAuthenticated} exact path='/' component={JournalScreen}></PrivateRoute>
            </Switch>
        </Router>
    )
}
