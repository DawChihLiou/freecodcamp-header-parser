import React from 'react';
import { render } from 'react-dom';
import UserInfo from './components/UserInfo';

render(
    <UserInfo ipaddress="1.1.1.1" language="en-US" software="Mac" />
, document.getElementById('app'));