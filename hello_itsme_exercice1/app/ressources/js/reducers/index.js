import {combineReducers} from 'redux'
import switchTextReducer from './main-reducer.js'

const allReducers = combineReducers({
	text : switchTextReducer
})

export default allReducers