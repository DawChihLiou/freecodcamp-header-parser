import {REQUEST_INFO, RECEIVE_INFO} from '../actions';

const defaultMsg = 'Click the buttom to see!';

const reducer = (state={info: {
    ipaddress: defaultMsg,
    language: defaultMsg,
    software: defaultMsg
}, isFetching: false}, action) => {
  switch (action.type) {
    case REQUEST_INFO:
        return Object.assign({}, state, {
            isFetching: true
        });
    case RECEIVE_INFO:
        return Object.assign({},state, {
            isFetching: false,
            info: action.info
        });    
    default: 
        return state;
  }  
};

export default reducer;