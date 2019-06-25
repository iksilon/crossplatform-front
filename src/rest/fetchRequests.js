const commonProps = {
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
};

export const getRequest = (url) => {
    const init = {
        method: 'GET',
        ...commonProps,
    };

    return fetch(url, init).then(
        response => response ? response.json() : {}
        );
};

export const postRequest = (url, data) => {
    const init = {
        ...commonProps,
        method: 'POST',
        body: JSON.stringify(data),
    };

    return fetch(url, init).then(
        response => response ? response.json() : {}
    );
};
