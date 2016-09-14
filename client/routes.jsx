import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/layouts/MainLayout.jsx';


import HomePage from '../imports/ui/HomePage.jsx';
import About from '../imports/ui/About.jsx';

import Timeline from '../imports/ui/Timeline.jsx';
import Contact from '../imports/ui/Contact.jsx';



FlowRouter.route('/timeline',{
	action(){
		mount(MainLayout,{
			content:(<Timeline />)
		})
	}

});import Register from '../imports/ui/accounts/Register.jsx';
import Login from '../imports/ui/accounts/Login.jsx';



FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<HomePage />)
		})
	}

});
FlowRouter.route('/about',{
	action(){
		mount(MainLayout,{
			content:(<About />)
		})
	}

});
FlowRouter.route('/timeline',{
	action(){
		mount(MainLayout,{
			content:(<Timeline />)
		})
	}

});

FlowRouter.route('/contact',{
	action(){
		mount(MainLayout,{
			content:(<Contact />)
		})
	}

});

FlowRouter.route('/registerDev',{
	action(){
		mount(MainLayout,{
			content:(<Register />)
		})
	}

});
FlowRouter.route('/login',{
	action(){
		mount(MainLayout,{
			content:(<Login />)
		})
	}

});

