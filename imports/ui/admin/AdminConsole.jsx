import React, { Component } from 'react';

    Home = new Mongo.Collection("home");
    About = new Mongo.Collection("about");
    Contact = new Mongo.Collection("contact");
    //Contents = new Mongo.Collection("contents");

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
                var homeTitle = this.refs.title.value;
                var job = this.refs.job.value
                var homeDesc = this.refs.homeDesc.value
                var bgImg = "background img"
                var aboutImg = "about img"
                var aboutDesc = this.refs.aboutDesc.value
                var mobile = this.refs.mobile.value
                var address = this.refs.address.value
                var email = this.refs.email.value
            
                Meteor.call('updateHome',homeTitle,job,homeDesc,bgImg,function(error, response){});
                Meteor.call('updateAbout',aboutImg,aboutDesc,function(error, response){});
                Meteor.call('updateContact',mobile,address,email,function(error, response){});

                
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
                    <p>Title</p>
                    <input type="text" ref="title" id="title" placeholder="username or email"/>
                    <p>Occupation</p>
                    <input type="text" ref="job" id="hjob" placeholder="username or email"/>
                    <p>Description</p>
                    <input type="text" ref="homeDesc" id="homeDesc" placeholder="username or email"/>
                    {/*input for background img*/}
                    <p>Background Image</p>
                </div>
                <div id="about" className="tab-pane fade">
                    <h3>About</h3>
                    {/*input for img*/}
                    <p>Image</p>
                    <p>Description</p>
                    <input type="text" ref="aboutDesc" id="aboutDesc" placeholder="username or email"/>
                </div>
                <div id="contact" className="tab-pane fade">
                    <h3>Contact</h3>
                    <p>Mobile</p>
                    <input type="text" ref="mobile" id="cmobile" placeholder="username or email"/>
                    <p>Address</p>
                    <input type="text" ref="address" id="caddress" placeholder="username or email"/>
                    <p>Email</p>
                    <input type="text" ref="email" id="cemail" placeholder="username or email"/>
                </div>
              </div>
              {/*button to save content into the database*/}
                <button type="submit" className="btn btn-primary btn-lg btn-block">Save</button>
                </form>
            </div>

            {/*button to add img*/}
            <button type="button" onClick="import()">Import</button>

            {/*button to remove img*/}
            <button type="button" onClick="remove()">Remove</button>
            
            
          </div>

      );
   }
}


