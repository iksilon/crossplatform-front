import React from 'react';
import {observer} from 'mobx-react';
import {overviewActions} from "./overview";

const OverviewRowComponent = ({data, type}) => {
    if (type === "header") {
        data = {
            gameName: "Name",
            platform: {
                platformName: "Platform"
            },
        }
    }

    const deleteGame = () => {
        overviewActions.removeGame(data.idGame);
    };

    return (
        <div className="overview-row">
            <div className="overview-cell">{data.gameName}</div>
            <div className="overview-separator"/>
            <div className="overview-cell">{data.platform.platformName}</div>
            {type === "header" ? <div className="btn-remove-game"/> : <button className="btn-remove-game" type="button" onClick={deleteGame}>x</button>}
        </div>
    );
};

export const OverviewRow = observer(OverviewRowComponent);