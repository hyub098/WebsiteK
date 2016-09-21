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
 
                </ul>
            </div>
        </div>
      );
   }
}


