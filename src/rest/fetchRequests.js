const commonProps = {
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
};

const getProps = {
    method: 'GET',
    ...commonProps,
};

const postProps = {
    method: 'POST',
    ...commonProps,
};

export const getRequest = (url) => {
    return fetch(url, getProps).then(
            response => response.json()
        );
};

export const postRequest = (url, data) => {
    let init = {
        ...postProps,
        body: JSON.stringify(data),
    };

    return fetch(url, init).then(
        response => response ? response.json() : {}
    );
};

