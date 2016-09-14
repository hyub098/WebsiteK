import React, { Component } from 'react';

export default class About extends React.Component {
  
  componentDidMount(){
    //Change active tabs
    $('#timeLine').removeClass( "active" );
    $('#aboutMe').addClass( "active" );

  }

   render() {
      return (

       		<div>
		       	<section className="global-page-header">
		            <div className="container">
		                <div className="row">
		                    <div className="col-md-12">
		                        <div className="block">
		                            <h2>About Company</h2>
		                            <ol className="breadcrumb">
		                                <li>
		                                    <a href="index.html">
		                                        <i className="ion-ios-home"></i>
		                                        Home
		                                    </a>
		                                </li>
		                                <li className="active">About</li>
		                            </ol>
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
                            <h3 className="subtitle wow fadeInUp" data-wow-delay=".3s" data-wow-duration="500ms">Why We are Different</h3>
                            <p  className="wow fadeInUp" data-wow-delay=".5s" data-wow-duration="500ms">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p  className="wow fadeInUp" data-wow-delay=".7s" data-wow-duration="500ms">
                                Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
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


