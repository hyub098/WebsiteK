import React, { Component } from 'react';




export default class AdminTimeLine extends React.Component {

    componentDidMount(){


        

        //initialize confirm prompt when user click delete
          $('[data-toggle=confirmation]').confirmation({

            //when user click yes run remove function
            onConfirm: function() {
            

                //save
                alert("removed");
       
              },
              placement:"right"
            });

    }

 
   render() {
      return (
       	<div>
            <div className="container">
                <div className="page-header text-center">
                    <h1 id="timeline">Timeline</h1>
                    <div className="row">
                        <button type="button" className="btn btn-default newButton">New</button>
                    </div>
                </div>
                
                <ul className="timeline">
                    
                    <li  className="timeline-inverted">

                      <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
                      <div className="timeline-panel">

                        <div className="timeline-heading">
                            <img className="img-responsive" src="pikachu.jpg"  style={{"width":"100%","height":500}}/> 
                            
                            <button 
                                className="boxclose" id="boxclose" 
                                data-toggle="confirmation"
                                data-btn-ok-label="Yes!" 
                                data-btn-cancel-label="No!"
                                data-title="Confirm to remove?" 
                                data-singleton="true" 
                                data-popout="true"
                                data-placement="top"
                                style={{"border":"none","background":"none"}}        
                            ></button>
                            <a className="boxedit" id="boxedit" ></a>
                        </div>
                        <div className="timeline-body">
                          <p>皮卡丘的出現啟發了我。I gotta catch'em all! </p>
                          <p className="timeline-date">2016-09-15</p>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
                      <div className="timeline-panel">
                        <div className="timeline-heading">
                          <img className="img-responsive" src="question.jpg"  style={{"width":"100%","height":500}} />            
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
                          <img className="img-responsive" src="snake.jpg"  style={{"width":"100%","height":500}}/>
                          
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
                          <img className="img-responsive" src="home.jpg"  style={{"width":"100%","height":500}} />
                          
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
                          <img className="img-responsive" src="caught.jpg"  style={{"width":"100%","height":500}}/>
                          
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


