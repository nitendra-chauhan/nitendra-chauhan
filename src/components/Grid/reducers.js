import {
    DATA_LOADED,
    REQUEST_DATA,
    DATA_LOADED_AFTER_DELETE,
    ADDING_DATA,
    LOADING_FAILS,
} from './constants';

export const gridReducer = (state = { users: [{}] }, actions = {}) => {
    const {
        type = '',
        payload = '',
    } = actions;
    switch (type) {
        case REQUEST_DATA:
            return {
                ...state,
                isLoading: true,
            }
            case DATA_LOADED:
                return {
                    ...state,
                    isLoading: false,
                    users: payload
                }
            case DATA_LOADED_AFTER_DELETE:
                return {
                    ...state,
                    users: payload
                }
            case ADDING_DATA:
                return {
                    ...state,
                    users:  payload
                }
        default: {
            return state;
        }
    }
} 