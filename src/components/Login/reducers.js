import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
} from './constants';

export const loginReducer = (state = { user: {} }, actions = {}) => {
    const {
        type = '',
        payload = '',
    } = actions;
    switch (type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                user: {
                    email: payload
                },
                isAuthenticated: true,
            }
        case LOGOUT_SUCCESS:
            return {
                ...state,
                user: {
                        email: payload
                },
                isAuthenticated: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                user: {
                    email: payload
                },
                isAuthenticated: false,
            }
        default: {
            return state;
        }
    }
} 