import React, { Component } from 'react';


export default class Contact extends React.Component {
  
  
 
   render() {
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
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277552998015!2d90.3678744!3d23.773128800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae4adf3cb9%3A0x7f2cf443b764e4a4!2sShishu+Mela!5e0!3m2!1sen!2s!4v1435516022247" width="100%" height="400" frameborder="0" style={{"border":0}} allowfullscreen></iframe>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row address-details">
                    <div className="col-md-4">
                        <div className="address wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".5s">
                            <i className="ion-ios-location-outline"></i>
                            <h5>125 , Line 1 <br />Line 2</h5>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="email wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".7s">
                            <i className="ion-ios-email-outline"></i>
                            <p>iAmCute@oreohuang.com</p>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="phone wow fadeInLeft" data-wow-duration="500ms" data-wow-delay=".9s">
                            <i className="ion-ios-telephone-outline"></i>
                            <p>+09 111 222 333<br />+021 999 999 999</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

          </div>

      );
   }
}


