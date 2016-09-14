import React, { Component } from 'react';


export default class Footer extends React.Component {
  
  
 
   render() {
      return (
          <div>
          <section id="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block">
                            <h2 className="title wow fadeInDown" data-wow-delay=".3s" data-wow-duration="500ms">SO WHAT YOU THINK ?</h2>
                            <p className="wow fadeInDown" data-wow-delay=".5s" data-wow-duration="500ms">I am always a cute dog,<br/>please bring me out to play.</p>
                            <a href="/contact" className="btn btn-default btn-contact wow fadeInDown" data-wow-delay=".7s" data-wow-duration="500ms">Contact With Me</a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
       		 <footer id="footer">
                <div className="container">
                    <div className="col-md-8">
                        <p className="copyright">Copyright: <span>2016</span>. </p>
                    </div>

                </div>
            </footer>
          </div>

      );
   }
}


