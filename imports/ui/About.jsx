import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Spinner from 'react-spin';

export default class AboutPage extends TrackerReact(React.Component) {

    constructor(){
        super();

        this.checkDB = this.checkDB.bind(this);

        this.state = {
            subscription:{
                      items:Meteor.subscribe('aboutContent',function(){
                        this.checkDB();
                      }.bind(this))
            },
            loading : true
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

    checkDB(){
        this.setState({loading:false});
    }

    about(){
        return About.find().fetch();
    }



   render() {
    let content = this.about();
    //set spin config
    var spinCfg = {
          width: 12,
          radius: 35,
    };

    var count = 0;

    if(this.state.loading){
        return <Spinner config={spinCfg} /> ;
    }
    console.log(content[0].aboutDesc);
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
                        <img src={content[0].aboutimg.result} alt="" className="img-responsive" style={{"width":400,"height":400,"margin-bottom":"5%"}}/>
                    </div>
                    <div className="col-md-6">
                        <div className="block">
                            <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration="500ms">Who am I</h3>
                            <pre className="prein">
                            {content[0].aboutDesc}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>

       		</div>


      );
   }
}


