import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { userDataLoading, deleteUserData } from './actions';
import Grid from './index'
const mapStateToPros = (state) => {
    const {
        Login: {
            user = {},
            isAuthenticated = false,
        } = {},
        Grid: {
            users = [{}],
            isLoading = false,
        } = {},
    } = state;
    return {
        users,
        isLoading,
        isAuthenticated,
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({userDataLoading, deleteUserData}, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(Grid);