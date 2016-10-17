import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AdminContactConsole extends TrackerReact(React.Component) {

	constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);
        
    }

	onSubmit(e) {
        e.preventDefault();
        //array to store everything

        var mobile = this.refs.mobile.value;
        var address = this.refs.address.value;
        var email = this.refs.email.value;

        id = this.props.contact._id;

        Meteor.call('updateContact',id,mobile,address,email,function(error, response){
            toastr.success('Contact page updated');
        });

                
    }

	render(){
        	return(
        			<div>
	        		 	<h3>Contact</h3>
	                    <p>Mobile</p>
	                    <form className="data-content" onSubmit={this.onSubmit}>
		                    <input type="number" ref="mobile" size="20" defaultValue={this.props.contact.mobile}/>
		                    <p>Address</p>
		                    <input type="text" ref="address" size="40" defaultValue={this.props.contact.address}/>
		                    <p>Email</p>
		                    <input type="email" ref="email" size="30" defaultValue={this.props.contact.email}/>
		                    <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
	                    </form>
                    </div>
        		);
        }

	}	