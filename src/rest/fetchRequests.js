const getProps = {
    method: 'GET',
    cache: 'no-cache',
    headers: {
        'Content-Type': 'application/json'
    },
};

export const getRequest = () => {
    return fetch('http://localhost:8080/api/greetings', getProps).then(
            response => response.json()
        );
};

