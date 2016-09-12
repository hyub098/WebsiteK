import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/layouts/MainLayout.jsx';


import HomePage from '../imports/ui/HomePage.jsx';
import Timeline from '../imports/ui/Timeline.jsx';

import Register from '../imports/ui/accounts/Register.jsx';



FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<HomePage />)
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

FlowRouter.route('/registerDev',{
	action(){
		mount(MainLayout,{
			content:(<Register />)
		})
	}

});

