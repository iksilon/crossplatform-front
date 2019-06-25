import {observable} from "mobx";

export const state = observable({
    user: {
        isLoggedIn: false,
        username: "",
        userId: "",
        games: observable([]),
    },
    platforms: observable([]),
    errors: observable({}),
});

window.debugState = state;