import { combineReducers } from 'redux'
import greetings from './reducer-register'


const rootReducer = combineReducers({
    greetings,
})

export default rootReducer
