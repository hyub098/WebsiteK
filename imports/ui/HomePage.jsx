import React, { Component } from 'react';

export default class HomePage extends React.Component {

   render() {
      return (

       		<div className="container">
  <div className="row">
    <div className="col-md-8 col-xs-10">
      <div className="well panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-12 col-sm-4 text-center">
              <img src="http://api.randomuser.me/portraits/women/21.jpg" alt="" className="center-block img-circle img-thumbnail img-responsive" />
              <ul className="list-inline ratings text-center" title="Ratings">
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-8">
              <h2>Jane Doe</h2>
              <p><strong>About: </strong> Web Designer / UI Expert. </p>
              <p><strong>Hobbies: </strong> Read, out with friends, listen to music, draw and learn new things. </p>
              <p><strong>Skills: </strong>
                <span className="label label-info tags">html5</span> 
                <span className="label label-info tags">css3</span>
                <span className="label label-info tags">jquery</span>

              </p>
            </div>
        
            <div className="clearfix"></div>
            <div className="col-xs-12 col-sm-4">
              <h2><strong> 20,7K </strong></h2>
              <p><small>Followers</small></p>
              <button className="btn btn-success btn-block"><span className="fa fa-plus-circle"></span> Follow </button>
            </div>

            <div className="col-xs-12 col-sm-4">
              <h2><strong>245</strong></h2>
              <p><small>Following</small></p>
              <button className="btn btn-info btn-block"><span className="fa fa-user"></span> View Profile </button>
            </div>

            <div className="col-xs-12 col-sm-4">
              <h2><strong>43</strong></h2>
              <p><small>Snippets</small></p>
              <button type="button" className="btn btn-primary btn-block"><span className="fa fa-gear"></span> Options </button>  
            </div>

          </div>

        </div>

      </div>

    </div>

  </div>

</div>


      );
   }
}


