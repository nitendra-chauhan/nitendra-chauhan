import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addUserData } from '../Grid/actions';
import AddData from './index'
const mapStateToPros = (state) => {
    const {
        Login: {
            user = {},
        } = {},
        Grid: {
            users = [{}],
            isLoading = false,
        } = {},
    } = state;
    return {
        users,
        isLoading,
        user,
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({addUserData}, dispatch)
}

export default connect(mapStateToPros, mapDispatchToProps)(AddData);