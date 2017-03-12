import {connect} from 'react-redux';
import User from '../components/User';
import {fetchInfo} from '../actions';

const mapStateToProps = ({info, isFetching}) => {
    return {
        ipaddress: info.ipaddress,
        language: info.language,
        software: info.software,
        isFetching
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => {
            dispatch(fetchInfo())
        }
    }
}

const UserInfo = connect(
    mapStateToProps,
    mapDispatchToProps
)(User);

export default UserInfo;