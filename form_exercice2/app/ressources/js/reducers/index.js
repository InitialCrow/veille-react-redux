//need redux stuff
import {combineReducers} from 'redux'

//my stuff reducer
import formReducer from '../reducers/form-reducer.js';
import dashReducer from '../reducers/dash-reducer.js';

const allReducers = combineReducers({
	formData : formReducer,
	userList : dashReducer
})

export default allReducers