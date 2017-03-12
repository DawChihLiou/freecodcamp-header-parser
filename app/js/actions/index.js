import fetch from 'isomorphic-fetch';

export const REQUEST_INFO = 'REQUEST_INFO';
export const RECEIVE_INFO = 'RECEIVE_INFO';

export function fetchInfo() {
    return function (dispatch) {
        dispatch(requestInfo());
        
        return fetch(`api/userinfo`)
            .then(response => response.json())
            .then(json => dispatch(receiveInfo(json)));
    };
}

function requestInfo() {
    return {
        type: REQUEST_INFO
    };
}

function receiveInfo(json) {
    return {
        type: RECEIVE_INFO,
        info: json
    };
}
