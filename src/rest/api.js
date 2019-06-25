const root = 'http://localhost:8080/api';
export const api = {
    login: `${root}/login`,
    overview: {
        games: `${root}/overview/games`,
        platforms: `${root}/overview/platforms`,
        add: `${root}/overview/add`,
        remove: `${root}/overview/remove`,
    },
};