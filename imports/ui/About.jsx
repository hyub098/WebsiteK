import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

export default class About extends TrackerReact(React.Component) {

    constructor(){
        super();
        this.state = {
            subscription:{
                      items:Meteor.subscribe('aboutContent')
            }
        };
    }
  
  componentDidMount(){
    //Change active tabs
    $('#timeLine').removeClass( "active" );
    $('#aboutMe').addClass( "active" );

  }
  componentWillUnmount(){
        this.state.subscription.items.stop();
    }

   render() {
      return (

       		<div>
		       	<section className="global-page-header">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12">
		                        <div className="block">
		                            <h2>About Me</h2>
		                            
		                        </div>
		                    </div>
		                </div>
		            </div>
		        </section>

		        <section className="company-description">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 wow fadeInLeft" data-wow-delay=".3s" >
                        <img src="dp.jpg" alt="" className="img-responsive" style={{"width":400,"height":400,"margin-bottom":"5%"}}/>
                    </div>
                    <div className="col-md-6">
                        <div className="block">
                            <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration="500ms">Who am I</h3>
                            <p  className="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms">
                                I am the best dog in the world. I have fluffy white hair to keep you warm in winter, hot in summer. 
                            </p>
                            <p  className="wow fadeInUp" data-wow-delay=".7s" data-wow-duration="500ms">
                                I am so cute so everyone will love me. 人見人愛 車見車載 汽水樽見到都會打開蓋！！ 以下省略10000字。。。
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </section>

       		</div>


      );
   }
}


