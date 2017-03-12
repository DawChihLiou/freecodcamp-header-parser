import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers';
import UserInfo from './containers/UserInfo';

const store = createStore(reducer);

render(
    <Provider store={store}>
        <UserInfo />
    </Provider>, 
    document.getElementById('app'));