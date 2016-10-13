import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AdminHomeConsole from './AdminHomeConsole.jsx';
//import other components in here

Home = new Mongo.Collection("home");
About = new Mongo.Collection("about");
Contact = new Mongo.Collection("contact");

export default class AdminConsole extends TrackerReact(React.Component) {

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

    home() {
        return Home.find().fetch();
    }
    about(){
        return About.find().fetch();
    }
    contact(){
        return Contact.find().fetch();
    }
  

    //This function can be put into each component separately and no need to write here.write
    //For more details, look into AdminHomeConsole.jsx
    onSubmit(e) {
        e.preventDefault();
        //array to store everything
        reader  = new FileReader();

       
        var aboutImg = this.refs.aimg.files[0];
        var aboutDesc = this.refs.aboutDesc.value;
        var mobile = this.refs.mobile.value;
        var address = this.refs.address.value;
        var email = this.refs.email.value;

        function imgNull(img) {
                if(img==null){
                    img = ""; //no img
                }else{
                    reader.readAsDataURL(img);
                }
        }

        imgNull(bgImg);

        reader.onloadend = function () {
            imgNull(aboutImg);
        }

        //wait for img to finish loading
        reader.onloadend = function () {}

        Meteor.call('updateAbout',aboutImg,aboutDesc,function(error, response){});
        Meteor.call('updateContact',mobile,address,email,function(error, response){});
        FlowRouter.go('/');
                
    }
 
   render() {
        let homeInfo = this.home();
        let aboutInfo = this.about();
        let contactInfo = this.contact();
        if(homeInfo.length < 1){
            return (<div>Loading</div>);
        }

      return (
          <div>

            {/*tab of each page*/}
            <div className="container">
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <ul className="nav nav-tab nav-justified">
                    <li className="active"><a data-toggle="tab" href="#home">Home</a></li>
                    <li><a data-toggle="tab" href="#about">About</a></li>
                    <li><a data-toggle="tab" href="#contact">Contact</a></li>
                </ul>

              <div className="tab-content">
                {/*
                    Home component for the tab, remember to import other components at the top
                    pass in the variable read from db, we call it "home"
                */}
                <AdminHomeConsole home={homeInfo[0]}/> {/*Child Component*/}
                

                {/*
                    about component for the tab
                */}
                <div id="about" className="tab-pane fade">
                    <h3>About</h3>
                    {/*input for img*/}
                    <p>Image</p>
                    <div className="fileinput fileinput-new" data-provides="fileinput">
                        <div className="fileinput-new thumbnail" style={{width: 300, height: 300}}>
                            <img data-src="holder.js/100%x100%"/>
                        </div>
                        <div className="fileinput-preview fileinput-exists thumbnail" style={{"maxWidth": 300,"maxHeight": 300}}></div>
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
                    <input type="text" ref="aboutDesc" defaultValue={aboutInfo[0].aboutDesc}/>
                </div>


                {/*
                    contact component for the tab
                */}
                <div id="contact" className="tab-pane fade">
                    <h3>Contact</h3>
                    <p>Mobile</p>
                    <input type="text" ref="mobile" defaultValue={contactInfo[0].mobile}/>
                    <p>Address</p>
                    <input type="text" ref="address" defaultValue={contactInfo[0].address}/>
                    <p>Email</p>
                    <input type="text" ref="email" defaultValue={contactInfo[0].email}/>
                </div>
              </div>
                
            </div>
          </div>

      );
   }
}


