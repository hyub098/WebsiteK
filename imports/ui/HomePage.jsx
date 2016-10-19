import React, { Component } from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Spinner from 'react-spin';

export default class HomePage extends TrackerReact(React.Component) {
  
    constructor(){
        super();

        this.checkDB = this.checkDB.bind(this);

        this.state = {
            subscription:{
                      items:Meteor.subscribe('homeContent',function(){
                        this.checkDB();
                      }.bind(this))
            },
            loading : true
        };
    }

  componentDidMount(){
    //Change active tabs
    //useless comment
    $('#timeLine').removeClass( "active" );
    $('#aboutMe').addClass( "active" );

  }

  componentWillUnmount(){
        this.state.subscription.items.stop();
    }

    checkDB(){
        this.setState({loading:false});
    }

    home(){
        return Home.find().fetch();
    }



   render() {
    let content = this.home();
    //set spin config
    var spinCfg = {
          width: 12,
          radius: 35,
    };

    var count = 0;

    if(this.state.loading){
        return <Spinner config={spinCfg} /> ;
    }
      return (

       		<section id="hero-area" style={{ "background": "url('"+content[0].bgimg.result+"') no-repeat 50%" }}>
              <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="block wow fadeInUp" data-wow-delay=".3s">
                            

                            <section className="cd-intro">
                                <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s">
                                <span>{content[0].title}</span><br />
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">{content[0].job}</b>
                                </span>
                                </h1>
                                </section>
                                <pre className="prein">
                                <h2 className="wow fadeInUp animated" data-wow-delay=".6s" >
                                   {content[0].homeDesc}
                                </h2>
                                </pre>
                                <a className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green" data-wow-delay=".9s" href="/timeline" data-section="#works" >View Works</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
          </section>


      );
   }
}


