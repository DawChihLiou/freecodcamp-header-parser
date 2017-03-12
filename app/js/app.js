import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import UserInfo from './containers/UserInfo';

import {fetchInfo} from './actions'

const store = createStore(
    reducer,
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <UserInfo />
    </Provider>, 
    document.getElementById('app'));