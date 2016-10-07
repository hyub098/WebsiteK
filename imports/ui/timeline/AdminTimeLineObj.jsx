import React, { Component } from 'react';
import NormalTimeLine from './NormalTimeLine.jsx';
import AdminTimeLine from './AdminTimeLine.jsx';



export default class TimeLineObj extends React.Component {
	componentDidMount(){

		var itemId = this.props.item._id;
        //initialize confirm prompt when user click delete
        $('[data-toggle=confirmation]').confirmation({

            //when user click yes run remove function
            onConfirm: function() {
            

                //remove
                Meteor.call('removeTimeLineItem',itemId,function(error,response){
                	console.log("removed");
                });
       
              },
              placement:"right"
        });


        //pop over initialization
         $.fn.extend({

        popoverClosable: function (options) {
       

        options = 
        { 
		    html : true,
		    title: function() {
	    	return $("#popover-header").html();
	    },
		    content: function() {
		      return $("#popover-content").html();
	    	}
	    };


        var $popover_togglers = this;
        tmp = $popover_togglers;
	        $popover_togglers.popover(options);

        $popover_togglers.on('click', function (e) {

            e.preventDefault();
            $popover_togglers.not(this).popover('hide');

        });

        $('html').on('click', '[data-dismiss="popover"]', function (e) {
            $popover_togglers.popover('hide');
            // $popover_togglers.popover();

        });
        
		    }
		});

		$(function () {
		    $('[data-toggle="popover"]').popoverClosable();
		});
	

    }

 

   render() {
   		let classVar = "";
   		if(this.props.item.count % 2 != 0){
   			classVar = "timeline-inverted";
   		}
	    return (

	       	<li  className={classVar}>

	       		{/*
					contents
	       		*/}
                <div className="timeline-badge primary"><a><i className="glyphicon glyphicon-record invert" rel="tooltip" title={this.props.item.date}></i></a></div>
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
                        <a className="boxedit" id="boxedit" data-toggle="popover" ></a>
                    </div>
                    <div className="timeline-body">
                      <p>{this.props.item.desc} </p>
                      <p className="timeline-date">{this.props.item.date}</p>
                    </div>
                </div>


            	{/*
					Edit
            	*/}
				<div id="popover-header" className="hide">
					Edit
					<button type="button" className="close" data-dismiss="popover" aria-hidden="true">&times;</button>
				</div>
				<div id="popover-content" className="hide">
				Coming Soon.
				{/*
				<form>
					<div className="form-group">
					    <label for="Textarea">Description</label>
					    <textarea className="form-control" id={this.props.item.count+"Textarea"} rows="3"></textarea>
					  </div>

					<div className="row">
				        <div className='col-sm-3'>
				            <div className="form-group">
				                <div className='input-group date' id={this.props.item.count+"datepicker"}>
				                    <input type='text' className="form-control" id={this.props.item.count+"date"}/>
				                    <span className="input-group-addon">
				                        <span className="glyphicon glyphicon-calendar"></span>
				                    </span>
				                </div>
				            </div>
				        </div>
				    </div>


				    <button type="submit" className="btn btn-default">Submit</button>
				</form>
				*/}
				</div>
	        </li>
	    );
   }
}


