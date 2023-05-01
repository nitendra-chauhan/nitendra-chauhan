import { connect } from "react-redux";
import Home from './index'
const mapStateToPros = (state) => {
    const {
        Login: {
            isAuthenticated = false,
        } = {},
    } = state;
    return {
        isAuthenticated,
    }
}

export default connect(mapStateToPros, {})(Home);