import React from 'react';
import {Link} from "react-router-dom";
import {observer} from 'mobx-react';
import './login.css';
import {postRequest} from "../../rest/fetchRequests";
import {appActions} from "../../App";
import {api} from "../../rest/api";
import {overviewActions} from "../overview/overview";

export const loginActions = {
    login: (username, password) => {
        postRequest(api.login, {username, password}).then(
            (response) => {
                if(response.error) {
                    appActions.errors.setErrorForField("login-username", response.message);
                } else {
                    appActions.setUserData(response);
                    overviewActions.fetchGames(appActions.getUserId());
                    overviewActions.fetchPlatforms();
                }
            },
            (err) => {
                console.log(err);
            },
        )
    },
};

const LoginComponent = ({}) => {
    const login = () => {
        appActions.errors.setErrorForField("login-username", undefined);
        appActions.errors.setErrorForField("login-password", undefined);

        const username = document.getElementById("login-username").value;
        const password = document.getElementById("login-password").value;
        if(!username) {
            appActions.errors.setErrorForField("login-username", "Please enter a username");
        }
        if(!password) {
            appActions.errors.setErrorForField("login-password", "Please enter a password");
        }

        if(username && password) {
            loginActions.login(username, password);
        }
    };

    return (
        <div className="login">
            <h1> Please log in</h1>
            <div className="login-card">
                <div className="login-card-cell">
                    <div>Username</div>
                    <input id="login-username" type="text"/>
                    <div className="error">{appActions.errors.getErrorForField("login-username")}</div>
                </div>
                <div className="login-card-cell">
                    <div>Password</div>
                    <input id="login-password" type="password"/>
                    <div className="error">{appActions.errors.getErrorForField("login-password")}</div>
                </div>
                <div className="login-card-cell">
                    <button type="button" onClick={login}>Log in</button>
                </div>
            </div>
            <Link to="/signup/">or click here to sign up</Link>
        </div>
    );
};

export const Login = observer(LoginComponent);