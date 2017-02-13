import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {updateFirst, updateLast, updateMail} from '../actions/index'

class FormuCont extends Component{
	constructor(props) {
		super(props);	
	}
	render(){
		let self = this
		return(
			<form action = '/adduser' method= 'POST'>
				<label>
					First name
					<input type="text" name="first" onChange = {(evt)=>{this.props.updateFirst(evt.target.value, self.props.identity)}} />
				</label>
				<label>
					Last Name
					<input type="text" name="last" onChange = {(evt)=>{this.props.updateLast(evt.target.value, self.props.identity)}}  />
				</label>
				<label>
					Email
					<input type="text" name="mail" onChange = {(evt)=>{this.props.updateMail(evt.target.value, self.props.identity)}} />
				</label>
				<button type ="submit">submit</button>
				<hr />
				
			</form>
		)
	}	
}
function mapStateToProps(state){
	return {
		identity : state.formData
	}
}
function matchDisptachProps(dispatch){
	return bindActionCreators({updateFirst : updateFirst, updateLast : updateLast, updateMail : updateMail}, dispatch)
}

export default connect (mapStateToProps, matchDisptachProps)(FormuCont)