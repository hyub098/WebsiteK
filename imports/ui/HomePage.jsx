import React, { Component } from 'react';


export default class HomePage extends React.Component {
  
    constructor(){
        super();
        this.state = {
            subscription:{
                      items:Meteor.subscribe('homeContent')
            }
        };
    }

  componentDidMount(){
    //Change active tabs
    //useless comment
    $('#timeLine').removeClass( "active" );
    $('#aboutMe').addClass( "active" );

  }

   render() {
      return (

       		<section id="hero-area" >
              <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center">
                        <div className="block wow fadeInUp" data-wow-delay=".3s">
                            

                            <section className="cd-intro">
                                <h1 className="wow fadeInUp animated cd-headline slide" data-wow-delay=".4s">
                                <span>HI, MY NAME IS OREO & I AM A</span><br />
                                <span className="cd-words-wrapper">
                                    <b className="is-visible">Professional 家裡蹲</b>
                                </span>
                                </h1>
                                </section>
                                <h2 className="wow fadeInUp animated" data-wow-delay=".6s" >
                                    With 2 years experience, I've occupied many skills including sit,<br /> hand hand and 賣萌. This site showcases some of my work.
                                </h2>
                                <a className="btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green" data-wow-delay=".9s" href="/timeline" data-section="#works" >View Works</a>
                                
                            </div>
                        </div>
                    </div>
                </div>
          </section>


      );
   }
}


