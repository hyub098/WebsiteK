import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AdminAboutConsole extends TrackerReact(React.Component) {

	constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);
        
    }

        onSubmit(e) {

    	//stop default HTML actions
        e.preventDefault();

        reader  = new FileReader();
        
        var aboutImg = this.refs.aimg.files[0];
        var aboutDesc = this.refs.aboutDesc.value;
        //store db id as global variable to be used inside reader function
        //this.props.home <-- the value we passed in from AdminConsole.jsx (parent component)
        id = this.props.about._id;

        if (aboutImg ) {
            if(aboutImg.type.indexOf('png') != -1 || aboutImg.type.indexOf('jpg') != -1  || aboutImg.type.indexOf('jpeg') != -1 || aboutImg.type.indexOf('gif') != -1 ){
                reader.readAsDataURL(aboutImg); //reads the data as a URL
            }   
            else{
                //tell user to upload proper image and return the function
                alert("upload image!");
                return;
            }
            //wait for img to finish loading
            reader.onloadend = function () {
                //call a metoer method to update everything
                Meteor.call('updateAbout',id,aboutImg,aboutDesc,function(error, response){
                    // FlowRouter.go('/');
                    console.log("updated with image");
                });
            }
        }
        else{

            //call a different meteor method
            Meteor.call('updateAboutWithoutImg',id,aboutDesc,function(error, response){
                    // FlowRouter.go('/');
                    console.log("updated WITHOUT image");
            });
        }
          
    }

        render(){
        	let desc = this.props.about.aboutDesc;
        	return(
        			<div>
	        		 	<h3>About</h3>
	                    {/*input for img*/}
	                    <p>Image</p>
	                    <form className="data-content" onSubmit={this.onSubmit}>
		                    <div className="fileinput fileinput-new" data-provides="fileinput">
		                        <div className="fileinput-new thumbnail" style={{height: 200}}>
		                            <img src={this.props.about.aboutimg.result} height="200" width="auto" />
		                        </div>
		                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"maxHeight": 200}}></div>
		                        <div>
		                            <span className="btn btn-default btn-file">
		                                <span className="fileinput-new">Select image</span>
		                                <span className="fileinput-exists">Change</span>
		                                <input type="file" ref="aimg"/>
		                            </span>
		                            <a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
		                        </div>
		                    </div>
		                    <p>Description</p>
		                    <textarea ref="aboutDesc" defaultValue={desc}></textarea>
		                    <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
	                    </form>
                    </div>
        		);
        }

}