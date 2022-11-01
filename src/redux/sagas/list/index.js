import { all, call, put, takeLatest } from '@redux-saga/core/effects'
import { getUserFailure, getUserSuccess, UserType } from '../../actions'
import * as types from '../../types'

let userApi
const userRequest = async (payload) => {
    try {
        const request = await fetch(`https://rickandmortyapi.com/api/character/?page=${payload.page}&name=${payload.search}`)
        const response = await request.json()
        userApi = response
        return true                
    } catch (error) {
        return false
    }
}
export function* userData(action) {
    try {
        yield call(userRequest, action.payload)
        yield put(getUserSuccess(userApi))
    } catch (error) {
        yield put(getUserFailure(userApi))
    }
}

export default all([takeLatest(types.GET_USER_REQUEST, userData)])