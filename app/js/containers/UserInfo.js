import {connect} from 'react-redux';
import User from '../components/User';

const mapStateToProps = ({ipaddress, language, software}) => {
    return {ipaddress, language, software};
};

const UserInfo = connect(mapStateToProps)(User);

export default UserInfo;