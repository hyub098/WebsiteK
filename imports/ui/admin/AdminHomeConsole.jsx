import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class AdminHomeConsole extends TrackerReact(React.Component) {



    onSubmit(e) {

    	//stop default HTML actions
        e.preventDefault();
        
        //store db id as global variable to be used inside reader function
        //this.props.home <-- the value we passed in from AdminConsole.jsx (parent component)
        id = this.props.home._id;

          
    }

   render() {
      return (
            <div>      
  						<h3>Home</h3>
  						<p>Title</p>
              {/* bunch of input boxes*/}
  						<input type="text" ref="title" defaultValue={this.props.home.title}/>
  						<p>Occupation</p>
  						<input type="text" ref="job" defaultValue={this.props.home.job}/>
  						<p>Description</p>
  						<input type="text" ref="homeDesc" defaultValue={this.props.home.homeDesc}/>
  						{/*input for background img*/}
  						<p>Background Image</p>
  						<div className="fileinput fileinput-new" data-provides="fileinput">
  							<div className="fileinput-new thumbnail" style={{height: 200}}>
  								<img src={this.props.home.bgimg.result} height="200" width="auto" />
  							</div>
  							<div className="fileinput-preview fileinput-exists thumbnail" style={{"maxHeight": 200}}></div>
    							<div>
    								<span className="btn btn-default btn-file">
    								    <span className="fileinput-new">Select image</span>
    								    <span className="fileinput-exists">Change</span>
    								    <input type="file" ref="bgimg"/>
    								</span>
                    {/*remove image*/}
    								<a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
    							</div>
  						</div>
  				  </div>
      );
   }
}


