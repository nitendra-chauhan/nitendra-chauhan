import {
    LOGIN_SUCCESS,
    LOGIN_FAIL,
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
                    email: payload.email
                },
                isAuthenticated: true,
            }
            case LOGIN_FAIL:
                return {
                    ...state,
                    user: {
                        email: payload.email
                    },
                    isAuthenticated: false,
                }
        default: {
            return state;
        }
    }
} 