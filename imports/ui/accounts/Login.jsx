import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor'


export default Login = React.createClass({
	onSubmit(e) {
		e.preventDefault();
		// Get our input values
		var el = $(e.target);
		var email = el.find("#username").val();
		var password = el.find("#password").val();

		// Login user
		Meteor.loginWithPassword(email, password, (er)=>{
			if(er) {
				alert(er.reason, 4000);
			} else {
				//Redirect
				alert('Login successful', 4000);
				FlowRouter.go('/');
			}
		});
	},
	render() {
		return (
			<div className="container">
			    <div className="row">
			    <br />
			    <br />
			    <br />
			    <br />
			    <br />
			        <div className="col-md-offset-5 col-md-3">
			        <form className="form-login" onSubmit={this.onSubmit}>
			            <div className="form-login">
				            <h4>Welcome back.</h4>
				            <input type="text" id="username" className="form-control input-sm chat-input" placeholder="username or email" />
				            <br />
				            <input type="password" id="password" className="form-control input-sm chat-input" placeholder="password" />
				            <br />
				            <div className="wrapper">
				            <span className="group-btn">     
				                <button type="submit" className="btn btn-primary btn-md">login <i className="fa fa-sign-in"></i></button>
				            </span>
				            </div>
			            </div>
			        </form>
			        </div>
			    </div>
			</div>
		);	
	}
});