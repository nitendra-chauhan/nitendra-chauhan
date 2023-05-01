import {
    REQUEST_DATA,
    DATA_LOADED,
    LOADING_FAILS,
    DATA_LOADED_AFTER_DELETE,
    ADDING_DATA,
    ADDING_DATA_FAILS,
} from './constants';
import axios from 'axios';

export const userDataLoading = () => async (dispatch) => {
    dispatch({type: REQUEST_DATA})
    try {
        const { data }  = await axios.get('https://jsonplaceholder.typicode.com/users')
        dispatch({
            type: DATA_LOADED,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: LOADING_FAILS,
            payload: 'loading failed'
        })
    }
}

export const deleteUserData = (deleteUserId = '', users = '') => (dispatch) => {
    try {
        const filterUsers = users.filter(({id = ''}) => deleteUserId !== id);
        dispatch({
            type: DATA_LOADED_AFTER_DELETE,
            payload: filterUsers,
        })
    } catch (error) {
        dispatch({
            type: LOADING_FAILS,
            payload: 'loading failed'
        })
    }
}

export const addUserData = (userData = {}, users = [{}]) => async (dispatch) => {
    try {
        const updatedUsers = [...users, userData];
        dispatch({
            type: ADDING_DATA,
            payload: updatedUsers,
        })
    } catch (error) {
        dispatch({
            type: ADDING_DATA_FAILS,
            payload: 'loading failed'
        })
    }
}