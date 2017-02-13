import React from 'react'

import Formu from '../containers/formu-container'
import FormRender from '../containers/formRender-container'

import { Link } from 'react-router'


const App = () => (
	<div>
		<div>
			<Formu />
		</div>
		<div>
			<FormRender />
		</div>
		<Link to="/dashboard">Dashboard</Link>
	</div>

)
export default App