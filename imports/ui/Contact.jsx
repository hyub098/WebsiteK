import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Spinner from 'react-spin';


export default class ContactPage extends TrackerReact(React.Component) {
  
  constructor(){
        super();

        this.checkDB = this.checkDB.bind(this);

        this.state = {
            subscription:{
                      items:Meteor.subscribe('contactContent',function(){
                        this.checkDB();
                      }.bind(this))
            },
            loading : true
        };


    }

    componentWillUnmount(){
        this.state.subscription.items.stop();
    }

    checkDB(){
        this.setState({loading:false});
    }
    
    contact(){
        return Contact.find().fetch();
    }
 
   render() {

    let content = this.contact();
    //set spin config
    var spinCfg = {
          width: 12,
          radius: 35,
    };

    var count = 0;

    if(this.state.loading){
        return <Spinner config={spinCfg} /> ;
    }

    //set up string for Google map address
    let string = "https://www.google.com/maps/embed/v1/place?key=AIzaSyCBW2SNEmetbErFmAM0ft8VsXMLUEjkce8&q=" + content[0].address.replace(' ','+');
      return (



          <div>
		       	<section className="global-page-header">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12">
		                        <div className="block">
		                            <h2>Contact Me</h2>
		                            
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>
          		  <section id="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="block">
                            <h2 className="subtitle wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Contact With Me</h2>
                            <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
                                汪汪汪汪汪！
                            </p>
                            <div className="contact-form">

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                         <div className="map-area">
                            <h2 className="subtitle  wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".3s">Find Me</h2>
                            <p className="subtitle-des wow fadeInDown" data-wow-duration="500ms" data-wow-delay=".5s">
									This is where i live.                                
                            </p>
                            <div className="map">
                                <iframe src={string} width="100%" height="400" frameborder="0" style={{"border":0}} allowfullscreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row address-details">
                    <div className="col-md-4">
                        <div className="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                            <i className="ion-ios-location-outline"></i>
                            <h5>{content[0].address}</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="email wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                            <i className="ion-ios-email-outline"></i>
                            <p>{content[0].email}</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="phone wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                            <i className="ion-ios-telephone-outline"></i>
                            <p>{content[0].mobile}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          </div>

      );
   }
}


