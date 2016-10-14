import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class AdminAboutConsole extends TrackerReact(React.Component) {



        render(){
        	return(
        			<div>
	        		 	<h3>About</h3>
	                    {/*input for img*/}
	                    <p>Image</p>
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
	                    <input type="text" ref="aboutDesc" defaultValue={this.props.about.aboutDesc}/>
                    </div>
        		);
        }

}