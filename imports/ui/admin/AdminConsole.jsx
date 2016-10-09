import React, { Component } from 'react';

    Content = new Mongo.Collection("content");

export default class AdminConsole extends React.Component {

    constructor(){
        super();

        //bind the function to 'this'
        this.onSubmit = this.onSubmit.bind(this);


    }
  
    onSubmit(e) {
            e.preventDefault();
            //var homeTitle = document.getElementById("htitle").value;
            //job= document.getElementById("hjob").value;
            //homeDesc = document.getElementById("homeDesc").value;
            //homeArray["bgImgUrl"] = document.getElementById("bgImgUrl").value;
            //aboutArray["imgUrl"] = document.getElementById("imgUrl").value;
            //aboutDesc = document.getElementById("aboutDesc").value;
            //mobile = document.getElementById("cmobile").value;
            //address = document.getElementById("caddress").value;
            //email = document.getElementById("cemail").value;
            /*Content.insert({
                text: homeTitle,
                complete: false,
                createdAt: new Date()
            });*/

            //display the reference values
            console.log(this.refs.title.value);
            }
 
   render() {
      return (
          <div>
            

            {/*tab of each page*/}
            <div className="container">
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
                    <input type="text" id="hjob" placeholder="username or email"/>
                    <p>Description</p>
                    <input type="text" id="homeDesc" placeholder="username or email"/>
                    {/*input for background img*/}
                    <p>Background Image</p>
                </div>
                <div id="about" className="tab-pane fade">
                    <h3>About</h3>
                    {/*input for img*/}
                    <p>Image</p>
                    <p>Description</p>
                    <input type="text" id="aboutDesc" placeholder="username or email"/>
                </div>
                <div id="contact" className="tab-pane fade">
                    <h3>Contact</h3>
                    <p>Mobile</p>
                    <input type="text" id="cmobile" placeholder="username or email"/>
                    <p>Address</p>
                    <input type="text" id="caddress" placeholder="username or email"/>
                    <p>Email</p>
                    <input type="text" id="cemail" placeholder="username or email"/>
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


