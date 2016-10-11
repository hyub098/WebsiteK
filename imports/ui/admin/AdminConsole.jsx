import React, { Component } from 'react';

    Home = new Mongo.Collection("home");
    About = new Mongo.Collection("about");
    Contact = new Mongo.Collection("contact");

export default class AdminConsole extends React.Component {

    constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {

            subscription:{
                      items:Meteor.subscribe('adminContent')
            }
        };


    }
  
    onSubmit(e) {
                e.preventDefault();
                //array to store everything
                reader  = new FileReader();

                //allow empty values
                var homeTitle = this.refs.title.value;
                var job = this.refs.job.value;
                var homeDesc = this.refs.homeDesc.value;
                var bgImg = this.refs.bgimg.files[0];
                var aboutImg = this.refs.aimg.files[0];
                var aboutDesc = this.refs.aboutDesc.value;
                var mobile = this.refs.mobile.value;
                var address = this.refs.address.value;
                var email = this.refs.email.value;

                //wait for img to finish loading
                reader.onloadend = function () {
                Meteor.call('updateHome',homeTitle,job,homeDesc,bgImg,function(error, response){});
                Meteor.call('updateAbout',aboutImg,aboutDesc,function(error, response){});
                Meteor.call('updateContact',mobile,address,email,function(error, response){});
                FlowRouter.go('/');
                }
            }

    imgNull(img) {
        if(img===null){
            return ""; //no img
        }else{
            reader.readAsDataURL(img);
        }
    }
 
   render() {
      return (
          <div>
            

            {/*tab of each page*/}
            <div className="container">
            <br/>
            <br/>
              <h2>Pages</h2>
              <ul className="nav nav-tab nav-justified">
                <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                <li><a data-toggle="tab" href="#about">About</a></li>
                <li><a data-toggle="tab" href="#contact">Contact</a></li>
              </ul>
              <form className="data-content" onSubmit={this.onSubmit}>
              <div className="tab-content">
                <div id="home" className="tab-pane fade in active">
                    <h3>Home</h3>
                    <input type="text" value=""/>
                    <p>Title</p>
                    <input type="text" ref="title" value=""/>
                    <p>Occupation</p>
                    <input type="text" ref="job" value=""/>
                    <p>Description</p>
                    <input type="text" ref="homeDesc" value=""/>
                    {/*input for background img*/}
                    <p>Background Image</p>
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail" style={{width: 300, height: 300}}>
                            <img data-src="holder.js/100%x100%"/>
                        </div>
                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"max-width": 300,"max-height": 300}}></div>
                        <div>
                            <span className="btn btn-default btn-file">
                                <span className="fileinput-new">Select image</span>
                                <span className="fileinput-exists">Change</span>
                                <input type="file" ref="bgimg" />
                            </span>
                            <a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
                        </div>
                    </div>
                </div>
                <div id="about" className="tab-pane fade">
                    <h3>About</h3>
                    {/*input for img*/}
                    <p>Image</p>
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail" style={{width: 300, height: 300}}>
                            <img data-src="holder.js/100%x100%"/>
                        </div>
                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"max-width": 300,"max-height": 300}}></div>
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
                    <input type="text" ref="aboutDesc" value=""/>
                </div>
                <div id="contact" className="tab-pane fade">
                    <h3>Contact</h3>
                    <p>Mobile</p>
                    <input type="text" ref="mobile" value=""/>
                    <p>Address</p>
                    <input type="text" ref="address" value=""/>
                    <p>Email</p>
                    <input type="text" ref="email" value=""/>
                </div>
              </div>
                {/*button to save content into the database*/}
                <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                </form>
            </div>
          </div>

      );
   }
}


