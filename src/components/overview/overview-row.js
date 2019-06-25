import React from 'react';
import {observer} from 'mobx-react';

const OverviewRowComponent = ({data, type}) => {
    if(type === "header") {
        data = {
            gameName: "Name",
            platform: {
                platformName: "Platform"
            },
        }
    }

    console.log(data);

    return (
        <div className="overview-row">
            <div className="overview-cell">{data.gameName}</div>
            <div className="overview-separator" />
            <div className="overview-cell">{data.platform.platformName}</div>
        </div>
    );
};

export const OverviewRow = observer(OverviewRowComponent);