import React from 'react';
import Header from '../ui/Header.jsx';
export const MainLayout = ({content}) =>(

		<div className="main-layout container">
	     	{/*<ul className="nav nav-tabs" id="myTab">
			  <li className="active" id="aboutMe"><a href="\" >About me</a></li>
			  <li  id="timeLine"><a href="\timeline" >Timeline</a></li>
			</ul>*/}
			<Header />			
			{content}
		</div>


)

