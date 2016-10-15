import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import AdminHomeConsole from './AdminHomeConsole.jsx';
import AdminAboutConsole from './AdminAboutConsole.jsx';
import AdminContactConsole from './AdminContactConsole.jsx';
import Spinner from 'react-spin';


Home = new Mongo.Collection("home");
About = new Mongo.Collection("about");
Contact = new Mongo.Collection("contact");

export default class AdminConsole extends TrackerReact(React.Component) {

    constructor(){
        super();

        this.checkDBEmpty = this.checkDBEmpty.bind(this);
        this.state = {
            subscription:{
                      items:Meteor.subscribe('adminContent',function(){
                            this.checkDBEmpty();
                      }.bind(this))
            },
            homeInfo : [],
            aboutInfo : [],
            contactInfo : [],
            loading : true

        };
    }
    componentWillUnmount(){
        this.state.subscription.items.stop();
    }

    checkDBEmpty(){
        var home = this.home();
        var about = this.about();
        var contact = this.contact();

        if(home.length < 1 || about.length < 1 || contact.length < 1){
            this.filldatabase(home.length,about.length,contact.length);
            return;
        }

        this.setState({
            homeInfo : home,
            aboutInfo : about,
            contactInfo : contact,
            loading:false
        })

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
            // Meteor.call('fillHome',function(error, response){});
            Meteor.call('insertHome',"Blackline","Blueline","Description","backgroundImage",function(error,response){});
        }
        if(al < 1){
            // Meteor.call('fillAbout',function(error, response){});
            Meteor.call('insertAbout',"DP","Message",function(error,response){})
        }
        if(cl < 1){
            // Meteor.call('fillContact',function(error, response){});
            Meteor.call('insertContact',"123456789","Address","Email",function(error,response){});
        }

        //refresh page
        location.reload();
    }

    //This function can be put into each component separately and no need to write here.write
    //For more details, look into AdminHomeConsole.jsx
    
 
   render() {
      
        var spinCfg = {
          width: 12,
          radius: 35,
        };

        if(this.state.loading){
            return <Spinner config={spinCfg} /> ;
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
                        
                            {/*Home component for the tab, remember to import other components at the top pass in the variable read from db, we call it "home"*/}
                            <div id="home" className="tab-pane fade in active" >
                                <AdminHomeConsole home={this.state.homeInfo[0]}/> {/*Child Component*/}
                            </div>
                            {/*about component for the tab*/}
                            <div id="about" className="tab-pane fade" >
                               <AdminAboutConsole about={this.state.aboutInfo[0]}/> {/*Child Component*/}
                            </div>
                            {/*contact component for the tab*/}
                            <div id="contact" className="tab-pane fade" >
                                <AdminContactConsole contact={this.state.contactInfo[0]}/> {/*Child Component*/}
                            </div>
                       
                        
                    </div>
                
            </div>
        </div>

      );
   }
}


