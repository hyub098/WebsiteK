import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AdminHomeConsole from './AdminHomeConsole.jsx';
import AdminAboutConsole from './AdminAboutConsole.jsx';
import AdminContactConsole from './AdminContactConsole.jsx';
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
    filldatabase(hl,al,cl){
        if(hl < 1){
            Meteor.call('fillHome',function(error, response){});
        }
        if(al < 1){
            Meteor.call('fillAbout',function(error, response){});
        }
        if(cl < 1){
            Meteor.call('fillContact',function(error, response){});
        }
        
        
        
    }

    //This function can be put into each component separately and no need to write here.write
    //For more details, look into AdminHomeConsole.jsx
    onSubmit(e) {
        e.preventDefault();
        //array to store everything
        reader  = new FileReader();

        var homeTitle = this.refs.title.value;
        var job = this.refs.job.value;
        var homeDesc = this.refs.homeDesc.value;
        var bgImg = this.refs.bgimg.files[0];
        var aboutImg = this.refs.aimg.files[0];
        var aboutDesc = this.refs.aboutDesc.value;
        var mobile = this.refs.mobile.value;
        var address = this.refs.address.value;
        var email = this.refs.email.value;

        hid = this.home._id;
        aid = this.about._id;
        cid = this.contact._id;

        //wait for img to finish loading
        reader.onloadend = function () {}

                //validation for image
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
                Meteor.call('updateHome',hid,homeTitle,job,homeDesc,bgImg,function(error, response){
                    // FlowRouter.go('/');
                    console.log("updated with image");
                });
            }
        }
        else{

            //call a different meteor method
            Meteor.call('updateHomeWithoutImg',hid,homeTitle,job,homeDesc,function(error, response){
                    // FlowRouter.go('/');
                    console.log("updated WITHOUT image");
            });
        }

        Meteor.call('updateAbout',aid,aboutImg,aboutDesc,function(error, response){});
        Meteor.call('updateContact',cid,mobile,address,email,function(error, response){});
        FlowRouter.go('/');
                
    }
 
   render() {
        let homeInfo = this.home();
        let aboutInfo = this.about();
        let contactInfo = this.contact();
        let count = 0;
        if((homeInfo.length < 1 || aboutInfo.length < 1 || contactInfo.length < 1) && count < 200){
            count++;
            return (<div>Loading</div>);
        }else{
            this.filldatabase(homeInfo.length,aboutInfo.length,contactInfo.length);
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

                <form className="data-content" onSubmit={this.onSubmit}>
                    <div className="tab-content">
                        
                            {/*Home component for the tab, remember to import other components at the top pass in the variable read from db, we call it "home"*/}
                            <div id="home" className="tab-pane fade in active" >
                                <AdminHomeConsole home={homeInfo[0]}/> {/*Child Component*/}
                            </div>
                            {/*about component for the tab*/}
                            <div id="about" className="tab-pane fade" >
                               <AdminAboutConsole about={aboutInfo[0]}/> {/*Child Component*/}
                            </div>
                            {/*contact component for the tab*/}
                            <div id="contact" className="tab-pane fade" >
                                <AdminContactConsole contact={contactInfo[0]}/> {/*Child Component*/}
                            </div>
                        {/*button to save content into the database*/}
                        <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                        
                    </div>
                </form>
            </div>
        </div>

      );
   }
}


