import { combineReducers } from 'redux'
import { userReducer } from './list'

const rootReducer = combineReducers({
    data: userReducer
})

export default rootReducer