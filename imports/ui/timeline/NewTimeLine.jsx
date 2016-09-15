import React, { Component } from 'react';




export default class NewTimeline extends React.Component {

	componentDidMount(){

		$('#datetimepicker1').datepicker();
	}

	onSubmit(e){
		e.preventDefault();
		var desc = document.getElementById("Textarea").value;
		var date = document.getElementById("date").value;
		if(desc.trim().length <= 1 || date.trim().length <= 1){
			alert("Fill in details!");
			return;
		}
		alert(desc + date);
	}

   render() {

      return (
      	<div>
      		<section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>Create new Achievements</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br />
	       	<section className="container">
	       	<form onSubmit={this.onSubmit}>
	      		<div className="fileinput fileinput-new" data-provides="fileinput">
				  <div className="fileinput-new thumbnail" style={{width: 200, height: 150}}>
				    <img data-src="holder.js/100%x100%" alt="..." />
				  </div>
				  <div className="fileinput-preview fileinput-exists thumbnail" style={{"max-width": 200,"max-height": 150}}></div>
				  <div>
				    <span className="btn btn-default btn-file"><span className="fileinput-new">Select image</span><span className="fileinput-exists">Change</span><input type="file" name="..." /></span>
				    <a href="#" className="btn btn-default fileinput-exists" data-dismiss="fileinput">Remove</a>
				  </div>
				</div>
				<div className="form-group">
				    <label for="Textarea">Description</label>
				    <textarea className="form-control" id="Textarea" rows="3"></textarea>
				  </div>

				<div className="row">
			        <div className='col-sm-3'>
			            <div className="form-group">
			                <div className='input-group date' id='datetimepicker1'>
			                    <input type='text' className="form-control" id="date"/>
			                    <span className="input-group-addon">
			                        <span className="glyphicon glyphicon-calendar"></span>
			                    </span>
			                </div>
			            </div>
			        </div>
			    </div>




			    <button type="submit" className="btn btn-default">Submit</button>
			</form>
			

	    	</section>

	    	<br />
	    	<br />
	    	<br />
    	</div>
      );
   }


}



