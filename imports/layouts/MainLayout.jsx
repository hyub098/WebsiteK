import React from 'react';
import Header from '../ui/Header.jsx';
import Footer from '../ui/Footer.jsx';

export const MainLayout = ({content}) =>(

		<div className="main-layout">
	     	
			<Header />			
			{content}
			<Footer />
		</div>


)

