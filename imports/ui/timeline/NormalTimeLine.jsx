import React, { Component } from 'react';
import NormalTimeLineObj from './NormalTimeLineObj.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';

Timeline = new Mongo.Collection("timeline");

export default class NormalTimeLine extends TrackerReact(React.Component) {
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

    getItems(){
        //get all items
        var allItems = Timeline.find().fetch();
        if(allItems.length < 1){
            return [];
        }
       
        //add an attribute in actual date format
        for(var i =0;i< allItems.length;i++){

            //split the date string
            var dateStr = allItems[i].date.split('/');

            //construct the date variable. Year-Month-day. Month starts counting from 0 so subtract 1 before intializing.
            allItems[i].dateVar = new Date(dateStr[2],parseInt(dateStr[0])-1,dateStr[1]);

        }  

        //sort by date. 
        allItems = this.bubbleSort(allItems);

        for(var i =0;i< allItems.length;i++){
            //add counter to determine the className later
            allItems[i].count = i;
        }
        //latest one go first.
        allItems.reverse();
        return allItems;
    }

    bubbleSort(arr){
        //bubble sort algorithm to sort date
        var len = arr.length;
        for (var i = len-1; i>=0; i--){
         for(var j = 1; j<=i; j++){
           if(arr[j-1].dateVar.getTime() >arr[j].dateVar.getTime()){
               var temp = arr[j-1];
               arr[j-1] = arr[j];
               arr[j] = temp;
            }
         }
       }
       return arr;
    }

 
   render() {
       let items=this.getItems();
       console.log(items);
      return (
       	<div>
            <div className="container">
                <div className="page-header text-center">
                    <h1 id="timeline">Timeline</h1>
                </div>
                <ul className="timeline">
                       {  
                            items.map( (item) => {
                                return (
                                        <NormalTimeLineObj item={item} key={item._id}/>
                                )})
                        }    
                </ul>
            </div>
       	</div>
      );
   }
}


