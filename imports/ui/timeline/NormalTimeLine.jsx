import React, { Component } from 'react';


Timeline = new Mongo.Collection("timeline");

export default class NormalTimeLine extends React.Component {

 
   render() {
      return (
       	<div>
                 



               		<div className="container">
    <div className="page-header text-center">
        <h1 id="timeline">Timeline</h1>
    </div>
    <ul className="timeline">
        <li>
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="champion.png"  style={{"width":500,"height":500}}/>
              
            </div>
            <div className="timeline-body">
              <p>And now, I am a champion!</p>
              
            </div>
            
          </div>
        </li>
        
        <li  className="timeline-inverted">
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="pikachu.jpg"  style={{"width":500,"height":500}}/>
              
            </div>
            <div className="timeline-body">
              <p>皮卡丘的出現啟發了我。I gotta catch'em all! </p>
             
            </div>
            

          </div>
        </li>
        <li>
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="question.jpg"  style={{"width":500,"height":500}} />
              
            </div>
            <div className="timeline-body">
              <p>I started to question my life, I can't continue this way.</p>
              
            </div>
            
            
          </div>
        </li>
        
        <li  className="timeline-inverted">
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="snake.jpg"  style={{"width":500,"height":500}}/>
              
            </div>
            <div className="timeline-body">
              <p>And I became so lazy.</p>
              
            </div>
            
          </div>
        </li>
        <li>
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="home.jpg"  style={{"width":500,"height":500}} />
              
            </div>
            <div className="timeline-body">
              <p>Then, I start living happily in their house.</p>
              
            </div>
            
          </div>
        </li>
        
        <li  className="timeline-inverted">
          <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
          <div className="timeline-panel">
            <div className="timeline-heading">
              <img className="img-responsive" src="caught.jpg"  style={{"width":500,"height":500}}/>
              
            </div>
            <div className="timeline-body">
              <p>I was caught by brothers of three men.</p>
              
            </div>
          </div>
        </li>
        
        
        
    </ul>
</div>
       	</div>
      );
   }
}


