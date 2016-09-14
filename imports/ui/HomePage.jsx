import React, { Component } from 'react';

export default class HomePage extends React.Component {
  
  componentDidMount(){
    //Change active tabs
    $('#timeLine').removeClass( "active" );
    $('#aboutMe').addClass( "active" );

  }

   render() {
      return (

       		<div className="container">
          

  <div className="row">
    <div className="col-md-8 col-xs-10">
      <div className="well panel panel-default">
        <div className="panel-body">
          <div className="row">
            <div className="col-xs-12 col-sm-4 text-center">
              <img src="https://i.imgur.com/234P6wI.jpg" alt="" className="center-block img-circle img-thumbnail img-responsive" />
              <ul className="list-inline ratings text-center" title="Ratings">
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
                <li><a href="#"><span className="fa fa-star fa-lg"></span></a></li>
              </ul>
            </div>

            <div className="col-xs-12 col-sm-8">
              <h2>Oreo Huang</h2>
              <p><strong>About: </strong> Professional 家裡蹲. </p>
              <p><strong>Hobbies: </strong> 吃飯，睡覺，轉圈圈。 </p>
              <p><strong>Skills: </strong>
                <span className="label label-info tags">Sit</span> 
                <span className="label label-info tags">Hand hand</span>
                <span className="label label-info tags">賣萌</span>

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


