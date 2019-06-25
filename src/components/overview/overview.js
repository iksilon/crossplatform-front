import React from 'react';
import {action} from "mobx";
import {observer} from 'mobx-react';
import './overview.css';
import {OverviewRow} from './overview-row';
import {getRequest, postRequest} from "../../rest/fetchRequests";
import {api} from "../../rest/api";
import {state} from "../../App.state";
import {appActions} from "../../App";

export const overviewActions = {
    fetchGames: (userId) => {
        postRequest(api.overview.games, {userId}).then(
            (response) => {
                overviewActions.setGames(response.games);
            },
            (err) => {
                console.log(err);
            }
        );
    },

    fetchPlatforms: () => {
        getRequest(api.overview.platforms).then(
            (response) => {
                overviewActions.setPlatforms(response);
            },
            (err) => {
                console.log(err);
            }
        );
    },

    submitGame: (data) => {
        postRequest(api.overview.add, data).then(
            () => {
                overviewActions.fetchGames(appActions.getUserId());
            },
            (err) => {
                console.log(err);
            }
        );
    },

    setGames: action((games) => {
        state.user.games.replace(games);
    }),
    setPlatforms: action((platforms) => {
        state.platforms.replace(platforms);
    }),

    getGames: () => {
        return state.user.games;
    },
    getPlatforms: () => {
        return state.platforms;
    },
};

const OverviewComponent = () => {

    const submitGame = () => {
        overviewActions.submitGame({
            idUser: appActions.getUserId(),
            idPlatform: document.getElementById("add-game-platform").value,
            gameName: document.getElementById("add-game-name").value,
        });
    };

    const addForm = (
        <div>
            <div>Add a game:</div>
            <div className="add-game-form">
                <div>Name:</div>
                <input id="add-game-name" type="text"/>
                <div>Platform:</div>
                <select id="add-game-platform">
                    {overviewActions.getPlatforms().map((platform, index) =>
                        <option key={index} value={platform.idPlatform}>{platform.platformName}</option>)}
                </select>
                <button type="button" onClick={submitGame}>Add</button>
            </div>
        </div>
    );

    return (
        <div className="overview">
            {addForm}
            <div>These are your games:</div>
            <OverviewRow type="header"/>
            {overviewActions.getGames().map((game, index) => <OverviewRow key={index} data={game}/>)}
        </div>
    );
};

export const Overview = observer(OverviewComponent);


