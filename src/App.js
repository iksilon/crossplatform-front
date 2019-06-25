import React from 'react';
import {action} from "mobx";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import './App.css';
import {state} from "./App.state";
import {Header} from './components/header/header';
import {Login} from "./components/login/login";
import {Overview} from "./components/overview/overview";
import {observer} from "mobx-react";

export const appActions = {
    setUserData: action((userData) => {
        if (userData) {
            state.user.isLoggedIn = true;
            state.user.username = userData.username;
            state.user.userId = userData.idUser;
        }
    }),

    clearUserData: action(() => {
        state.user = {
            isLoggedIn: false,
            username: "",
            userId: "",
        };
    }),

    getUsername: () => {
        return state.user.username;
    },

    getUserId: () => {
        return state.user.userId;
    },

    errors: {
        getErrorForField: (fieldKey) => {
            return state.errors[fieldKey];
        },

        setErrorForField: (fieldKey, error) => {
            state.errors[fieldKey] = error;
        }
    }
};

const AppComponent = () => {
    return (
        <div className="app">
            <Header/>
            <Router>
                {state.user.isLoggedIn
                    ? <Redirect to="/overview"/>
                    : <Redirect to="/login"/>
                }
                <Route path="/login" component={Login}/>
                <Route path="/overview" component={Overview}/>
            </Router>
        </div>
    );
};

export const App = observer(AppComponent);
