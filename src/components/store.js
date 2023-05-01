import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import {
    loginReducer
} from './Login/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReducers = combineReducers({
    Login: loginReducer
});

const middleware = [thunk];
const store = createStore(rootReducers, {}, composeWithDevTools(applyMiddleware(...middleware)));

export default store;