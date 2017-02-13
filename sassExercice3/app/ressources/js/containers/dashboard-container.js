import React, {Component} from 'react'

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getUserList} from '../actions/index'


class DashboardCont extends Component{
	constructor(props) {
		super(props)
		this.props.getUserList()

	}

	showUserList(){
		
		return this.props.userList.map(function(user){
			return(
				<ul>
					<li>
					First Name : {user.first}
					</li>
					<li>
					Last Name : {user.last}
					</li>
					<li>
					 Mail : {user.mail}
					</li>
				</ul>
				
			)
		})
		
		
		
	}
	
	render(){

	
		return(
			<div>
				{this.showUserList()}
				
			</div>
			
			
		)	
		
		
	}	
}
function mapStateToProps(state){
	
	return {
		userList : state.userList
	}
}

function matchDisptachProps(dispatch){
	return bindActionCreators({getUserList : getUserList}, dispatch)
}
export default connect (mapStateToProps, matchDisptachProps)(DashboardCont)

