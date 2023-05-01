import {
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    LOGOUT_SUCCESS,
} from './constants';
import { isEqual } from 'lodash';
import mockUserData from '../mocks/loginMocks.js';

export const login = (loginData) => async (dispatch) => {
    const getLoginStatus = await isEqual(mockUserData,loginData);
    try {
        if (getLoginStatus) {
            dispatch({ type: LOGIN_SUCCESS,
                        payload: mockUserData.email})
        } else {
            dispatch({ type: LOGIN_FAIL,
                payload: mockUserData.email})
        }
    } catch (error) {
        dispatch({
            type: LOGIN_FAIL,
            payload: 'Login failed'
        })
    }
}

export const logout = () => (dispatch) => {
    dispatch({
        type: LOGOUT_SUCCESS,
    })
}