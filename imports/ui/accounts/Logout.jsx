import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'


export default Login = React.createClass({
	

	componentDidMount(){
		$('#logout').click();
	},

	logout() {
	    Meteor.logout((er)=>{
	      if(er) {
	        alert(er.reason, 4000);
	      } else {
	        //log out user
	        FlowRouter.go('/');
	      }
	    });
	  },
	render() {
		return (
			<div className="container">
			    <button id="logout" onClick={this.logout}>Log Out </button>
			</div>
		);	
	}
});
