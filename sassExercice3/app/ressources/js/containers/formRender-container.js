import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'


class FormRenderCont extends Component{
	constructor(props) {
		super(props);	
	}
	render(){
		return(
			<div>
				<h2> your card : </h2>
				<ul>
					<li>First name : {this.props.identity.first}</li>
					<li>Last name : {this.props.identity.last}</li>
					<li>Email : {this.props.identity.mail}</li>
				</ul>

			</div>
			
		)
	}	
}
function mapStateToProps(state){
	
	return {
		identity : state.formData
	}
}


export default connect (mapStateToProps)(FormRenderCont)

