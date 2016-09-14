import React, { Component } from 'react';


export default class Footer extends React.Component {
  
  
 
   render() {
      return (

       		<div id="top-bar" className="navbar-fixed-top animated-header">

       			<div className="container">

           <div className="navbar-header">


                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    </button>

                    

                    <div className="navbar-brand">
                        <a href="index.html" >
                            Oreo Huang
                        </a>
                    </div>

                </div>

                <nav className="collapse navbar-collapse navbar-right" role="navigation">
                    <div className="main-menu">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="/" >Home</a>
                            </li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/timeline">Achievements</a></li>
                           
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>

            </div>

       		</div>


      );
   }
}


