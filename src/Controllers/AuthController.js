import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Routes } from '../Constantes/Routes';
import { BehaviorSubject } from 'rxjs';
import App, { history } from '../App';

var currentUserSubject;

try {
    currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));
} catch (error) {
    currentUserSubject = new BehaviorSubject(null);
}

export const AuthenticationService = {
    logout,
    saveUserByKey,
    currentUser: currentUserSubject.asObservable(),
    get currentUserValue () { return currentUserSubject.value }
};



/**
 * logout and remove user from local storage
 */
function logout(){
    // remove from local storage
    localStorage.removeItem('currentUser');
    currentUserSubject.next(null);
    history.push(Routes.login)
    App.setState({})
}

/**
 * save the user to local storage
 */
function saveUserByKey(token, userId){
    if(token){
        var user = {userId, token}
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
    }
}

export const saveFromLoginPage=(token, userId)=> {
     saveUserByKey(token, userId)
     history.push(Routes.dashboard)
     App.setState({})
}

/**
 * returns authorization header (Bearer token)
 */
export const authHeader = ()=>{
    const currentUser = AuthenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return { Authorization: `Token ${currentUser.token}` };
    } else {
        return {};
    }
}

/**
 * 
 * chack if the token is still valid
 */
export const isLoggedIn = () => {
    const currentUser = AuthenticationService.currentUserValue;
    if (currentUser && currentUser.token) {
        return true
    }
    return false
}

/**
 * the PrivateRoute Component
 * redirects to home if not authenticated
 */
export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (!isLoggedIn()) {
            // user not authenticated
            return <Redirect to={{ pathname: Routes.login, state: { from: props.location } }} />
        }
        // user authenticated
        return <Component {...props} />
    }} />
)

/**
 * the PublicRoute Component
 * redirects to home if not authenticated
 */
export const PublicRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => {
        if (isLoggedIn()) {
            // user authenticated
            return <Redirect to={{ pathname: Routes.dashboard, state: { from: props.location } }} />
        }
        // user not authenticated
        return <Component {...props} />
    }} />
)
