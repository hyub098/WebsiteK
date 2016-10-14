import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AdminContactConsole extends TrackerReact(React.Component) {



	render(){
        	return(
        			<div>
	        		 	<h3>Contact</h3>
	                    <p>Mobile</p>
	                    <input type="text" ref="mobile" defaultValue={this.props.contact.mobile}/>
	                    <p>Address</p>
	                    <input type="text" ref="address" defaultValue={this.props.contact.address}/>
	                    <p>Email</p>
	                    <input type="text" ref="email" defaultValue={this.props.contact.email}/>
                    </div>
        		);
        }

	}	