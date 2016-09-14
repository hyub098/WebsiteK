import React, { Component } from 'react';
import NormalTimeLine from './NormalTimeLine.jsx';
import AdminTimeLine from './AdminTimeLine.jsx';



export default class Timeline extends React.Component {

  componentDidMount(){
    //Change active tabs
    $('#aboutMe').removeClass( "active" );
    $('#timeLine').addClass( "active" );

  }

  checkLogin(){
    if (Meteor.user()){
        return <AdminTimeLine />;
    }
    else{
        return <NormalTimeLine />;
    }
  }

   render() {
    let timeline = this.checkLogin();
      return (
       	<div>
            <section className="global-page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block">
                                <h2>My Achievements</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {timeline}
       	</div>
      );
   }
}


