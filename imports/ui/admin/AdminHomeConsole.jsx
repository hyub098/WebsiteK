import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class AdminHomeConsole extends TrackerReact(React.Component) {


    constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);
        
    }

    onSubmit(e) {

    	//stop default HTML actions
        e.preventDefault();

        reader  = new FileReader();




        var homeTitle = this.refs.title.value;
        var job = this.refs.job.value;
        var homeDesc = this.refs.homeDesc.value.replace("\"<br/>\"","\n");
        var bgImg = this.refs.bgimg.files[0];
        
        //store db id as global variable to be used inside reader function
        id = this.props.home._id;

        if (bgImg ) {
            if(bgImg.type.indexOf('png') != -1 || bgImg.type.indexOf('jpg') != -1  || bgImg.type.indexOf('jpeg') != -1 || bgImg.type.indexOf('gif') != -1 ){
                reader.readAsDataURL(bgImg); //reads the data as a URL
            }   
            else{
                //tell user to upload proper image and return the function
                alert("upload image!");
                return;
            }
            //wait for img to finish loading
            reader.onloadend = function () {
                //call a metoer method to update everything
                Meteor.call('updateHome',id,homeTitle,job,homeDesc,bgImg,function(error, response){

                    console.log("updated with image");
                    toastr.success('Home page updated');

                });
            }
        }
        else{

            //call a different meteor method
            Meteor.call('updateHomeWithoutImg',id,homeTitle,job,homeDesc,function(error, response){

                    console.log("updated WITHOUT image");
                    toastr.success('Home page updated');
            });
        }
          
    }

   render() {
    let desc = this.props.home.homeDesc;
      return (
            <div>      
				<h3>Home</h3>
				<p>Black Title</p>
                <form className="data-content" onSubmit={this.onSubmit}>
                    {/* bunch of input boxes*/}
						<input type="text" ref="title" size="80" defaultValue={this.props.home.title}/>
						<p>Blue Title</p> {/* blue title takes value from job*/}
						<input type="text" ref="job" size="80" defaultValue={this.props.home.job}/>
						<p>Description</p>
						<textarea ref="homeDesc" cols="100" rows="8" defaultValue={desc}></textarea>
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
                             {/*button to save content into the database*/}
						</div>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                </form>
  			</div>
      );
   }
}


