import React from 'react';
import {observer} from 'mobx-react';
import './header.css';
import logo from "../../images/controller-bg.svg";
import {appActions} from "../../App";

const HeaderComponent = ({}) => {
    const headerLogo = <img className="header-logo" src={logo} alt={"Logo"}/>;

    return (
        <div className="app-header">
            {headerLogo}
            <div> Welcome {appActions.getUsername() ? appActions.getUsername() : 'stranger'} </div>
            {headerLogo}
        </div>
    );
};

export const Header = observer(HeaderComponent);


