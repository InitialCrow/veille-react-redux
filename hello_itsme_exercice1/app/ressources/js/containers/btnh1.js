import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {switchToHello, switchToIts} from '../actions/index'
class BtnH1 extends React.Component{
	constructor(props) {
		super(props)
		
	}
	change(){
		
		if (this.props.text.state === 0){
			this.props.its()
		}
		else{
			this.props.hello()
		}
		
		
	}
	render(){
		return(

			<h1 onClick = {this.change.bind(this)}>{this.props.text.text}</h1>
		)
	}
}
function mapStateToProps(state){
	return {
		text : state.text
	}
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({hello : switchToHello, its : switchToIts},dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(BtnH1)