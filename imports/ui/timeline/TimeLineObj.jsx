import React, { Component } from 'react';
import NormalTimeLine from './NormalTimeLine.jsx';
import AdminTimeLine from './AdminTimeLine.jsx';



export default class TimeLineObj extends React.Component {

 

   render() {
   		let classVar = "";
   		if(this.props.item.count % 2 != 0){
   			classVar = "timeline-inverted";
   		}
	    return (
	       	<li  className={classVar}>

	                      <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title="11 hours ago via Twitter" id=""></i></a></div>
	                      <div className="timeline-panel">

	                        <div className="timeline-heading">
	                            <img className="img-responsive" src={this.props.item.img}  style={{"width":"100%","height":500}}/> 
	                            
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
	                          <p>{this.props.item.desc} </p>
	                          <p className="timeline-date">{this.props.item.date}</p>
	                        </div>
	                      </div>
	                    </li>
	    );
   }
}


