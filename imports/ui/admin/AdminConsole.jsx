import React, { Component } from 'react';

    Contents = new Mongo.Collection("contents");

export default class AdminConsole extends React.Component {

    constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);


    }
  
    onSubmit(e) {
            e.preventDefault();
            //array to store everything
            var pageContents = [
                this.refs.title.value, 
                this.refs.job.value,
                this.refs.homeDesc.value,
                "background img",
                "about img",
                this.refs.aboutDesc.value,
                this.refs.mobile.value,
                this.refs.address.value,
                this.refs.email.value
            ];
            var text = "hi";
            //display the reference values
            //console.log(text);
            //console.log(this.refs.job.value);
            //console.log(this.refs.homeDesc.value);
            //console.log(this.refs.aboutDesc.value);
            //home background img
            //about img
            //console.log(this.refs.mobile.value);
            //console.log(this.refs.address.value);
            //console.log(this.refs.email.value);
            
                Meteor.call('updateAllPages',text,function(error, response){
                FlowRouter.go('/admin');
                    });
                
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


