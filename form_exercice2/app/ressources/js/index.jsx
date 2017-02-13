//react
import React from 'react'
import {render} from 'react-dom'

//redux stuff
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

//my app stuff
import allReducers from './reducers'
import App from './components/app'
import Dashboard from './components/dashboard'

// route stuff
import { Router, Route, browserHistory } from 'react-router'

// const store = createStore(allReducers) sync store for sync action
const store = applyMiddleware(thunk)(createStore)(allReducers) // an async store for async action

render(
	<Provider store = {store} >
		<Router history={browserHistory}>
		    <Route path="/" component={App}/>
		    <Route path="/dashboard" component={Dashboard}/>
		  </Router>

	</Provider>,
	document.getElementById('root')
)