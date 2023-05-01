import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { logout } from '../Login/actions';
import AddData from './index'
const mapStateToPros = (state) => {
    const {
        Login: {
            user = {},
            isAuthenticated = false,
        } = {},
    } = state;
    return {
        isAuthenticated,
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({logout}, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(AddData);