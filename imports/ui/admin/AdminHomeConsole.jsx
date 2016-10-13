import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class AdminHomeConsole extends TrackerReact(React.Component) {

    constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            subscription:{
            }
        };

    }

    onSubmit(e) {

    	//stop default HTML actions
        e.preventDefault();

        //reader to read image
        reader  = new FileReader();

        //allow empty values
        var homeTitle = this.refs.title.value;
        var job = this.refs.job.value;
        var homeDesc = this.refs.homeDesc.value;
        var bgImg = this.refs.bgimg.files[0];


        //store db id as global variable to be used inside reader function
        //this.props.home <-- the value we passed in from AdminConsole.jsx (parent component)
        id = this.props.home._id;

        //validation for image
       if (bgImg ) {
       		if(bgImg.type.indexOf('png') != -1 || bgImg.type.indexOf('jpg') != -1  || bgImg.type.indexOf('jpeg') != -1 || bgImg.type.indexOf('gif') != -1 ){
       			reader.readAsDataURL(bgImg); //reads the data as a URL
       		}   
       		else{
       			//tell user to upload proper image and return the funcion
       			alert("upload image!");
       			return;
       		}
       		//wait for img to finish loading
	        reader.onloadend = function () {
	        	//call a metoer method to update everything
	        	Meteor.call('updateHome',id,homeTitle,job,homeDesc,bgImg,function(error, response){
	        		// FlowRouter.go('/');
	        		console.log("updated with image");
	        	});
	        }
       }
       else{

       		//call a different meteor method
	        Meteor.call('updateHomeWithoutImg',id,homeTitle,job,homeDesc,function(error, response){
	        		// FlowRouter.go('/');
	        		console.log("updated WITHOUT image");
        	});
       }          
    }

   render() {
      return (
            <div className="container">      
                <form className="data-content" onSubmit={this.onSubmit}>
					<div id="home" className="tab-pane fade in active">
						<h3>Home</h3>
						<p>Title</p>
						<input type="text" ref="title" defaultValue={this.props.home.title}/>
						<p>Occupation</p>
						<input type="text" ref="job" defaultValue={this.props.home.job}/>
						<p>Description</p>
						<input type="text" ref="homeDesc" defaultValue={this.props.home.homeDesc}/>
						{/*input for background img*/}
						<p>Background Image</p>
						<div className="fileinput fileinput-new" data-provides="fileinput">
							<div className="fileinput-new thumbnail" style={{width: 300, height: 300}}>
								<img src={this.props.home.bgimg.result}/>
							</div>
							<div className="fileinput-preview fileinput-exists thumbnail" style={{"maxWidth": 300,"maxHeight": 300}}></div>
							<div>
								<span className="btn btn-default btn-file">
								    <span className="fileinput-new">Select image</span>
								    <span className="fileinput-exists">Change</span>
								    <input type="file" ref="bgimg" onChange={this.changeInput}/>
								</span>
								<a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
							</div>
						</div>
					</div>

	                {/*button to save content into the database*/}
	                <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
            	</form>
            </div>
      );
   }
}


