import * as types from '../../types'

export function getUserRequest(payload) {
    return {
        type: types.GET_USER_REQUEST,
        payload
    }
}
export function getUserSuccess(payload) {
    return {
        type: types.GET_USER_SUCCESS,
        payload
    }
}
export function getUserFailure(user){
    return {
        type: types.GET_USER_FAILURE,
        payload: user
    }
}