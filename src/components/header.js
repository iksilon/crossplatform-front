import React from 'react';
import {observable, action} from 'mobx';
import {observer} from 'mobx-react';
import {getRequest} from "../rest/fetchRequests";
import logo from "../images/controller-bg.svg";

const headerState = observable({
    name: 'stranger',
});

let headerActions = {
    fetchName: action(() => {
        getRequest()
            .then(
                (res) => {
                    console.log(res);
                    headerState.name = res.name;
                },
                (err) => {
                    console.log(err);
                },
            )
    })

};

const HeaderComponent = ({className}) => {
    headerActions.fetchName();
    return (
        <div className={className}>
            <img className="App-logo" src={logo} alt={"Logo"}/>
            <div> Welcome {headerState.name} </div>
            <img className="App-logo" src={logo} alt={"Logo"}/>
        </div>
    );
};

export const Header = observer(HeaderComponent);


