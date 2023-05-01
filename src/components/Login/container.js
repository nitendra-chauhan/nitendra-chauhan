import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { login } from './actions';
import Login from './index'
const mapStateToPros = (state) => {
    const {
        Login: {
            user = {},
            isAuthenticated = false,
        } = {},
    } = state;
    return {
        user,
        isAuthenticated,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({login}, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(Login);

