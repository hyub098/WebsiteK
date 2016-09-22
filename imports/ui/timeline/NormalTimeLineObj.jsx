import React, { Component } from 'react';



export default class NormalTimeLineObj extends React.Component {

 
   render() {
        let classVar = "";
        if(this.props.item.count % 2 != 0){
            classVar = "timeline-inverted";
        }
      return (
       
            <li className={classVar}>
              <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record" rel="tooltip" title={this.props.item.date} id=""></i></a></div>
              <div className="timeline-panel">
                <div className="timeline-heading">
                  <img className="img-responsive" src={this.props.item.img}  style={{"width":"100%","height":500}}/>             
                </div>
                <div className="timeline-body">
                  <p>{this.props.item.desc}</p>
                  <p className="timeline-date">{this.props.item.date}</p>
                </div>
                
              </div>
            </li>
          
      );
   }
}


