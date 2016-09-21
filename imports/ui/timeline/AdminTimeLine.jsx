import React, { Component } from 'react';

import TimeLineObj from './TimeLineObj.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';


export default class AdminTimeLine extends TrackerReact(React.Component) {


  constructor(){
      super();

      this.state = {

        subscription:{
                  items:Meteor.subscribe('allTimeline')
        }
    };
  }

  componentWillUnmount(){
    this.state.subscription.items.stop();
  }

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

    getItems(){
        //TODO: ordering
        var allItems = Timeline.find().fetch();
        allItems.reverse();
        // console.log(allItems);
        for(var i =0;i< allItems.length;i++){
            allItems[i].count = i;
            console.log(allItems[i]);
        }
        return allItems;
    }

 
   render() {
        let num = 1;
        let items=this.getItems();
      return (
       	<div>
             

                        
            <div className="container">
                <div className="page-header text-center">
                    <h1 id="timeline">Timeline</h1>
                    <div className="row">
                        <a href="/newtimeline" className="btn btn-default newButton">New</a>
                    </div>
                </div>
                
                <ul className="timeline">
                     {  items.map( (item,num) => {
                           return  (

                                        <TimeLineObj item={item} num={num}/>

                                )})
                    }

                 {/*   
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
                    </li>  */}    
                </ul>
            </div>
        </div>
      );
   }
}


