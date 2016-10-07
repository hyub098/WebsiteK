import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/layouts/MainLayout.jsx';


import HomePage from '../imports/ui/HomePage.jsx';
import About from '../imports/ui/About.jsx';

import Timeline from '../imports/ui/timeline/Timeline.jsx';
import Contact from '../imports/ui/Contact.jsx';
import NewTimeLine from '../imports/ui/timeline/NewTimeLine.jsx';


import Register from '../imports/ui/accounts/Register.jsx';
import Login from '../imports/ui/accounts/Login.jsx';
import Logout from '../imports/ui/accounts/Logout.jsx';

import AdminConsole from '../imports/ui/admin/AdminConsole.jsx';



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
	},
	triggersEnter: [checkGuestLogin]

});
FlowRouter.route('/login',{
	action(){
		mount(MainLayout,{
			content:(<Login />)
		})
	},
	triggersEnter: [checkGuestLogin]

});

FlowRouter.route('/logout',{
	action(){
		mount(MainLayout,{
			content:(<Logout />)
		})
	}

});
FlowRouter.route('/newtimeline',{
	action(){
		mount(MainLayout,{
			content:(<NewTimeLine />)
		})
	},
	triggersEnter: [checkUserLogin]

});
FlowRouter.route('/admin',{
	action(){
		mount(MainLayout,{
			content:(<AdminConsole />)
		})
	},
	triggersEnter: [checkUserLogin]
});

function checkGuestLogin(){
	if(Meteor.userId()){
		FlowRouter.go('/');
	}
}

function checkUserLogin(){
	if(!Meteor.userId()){
		FlowRouter.go('/');
	}
}

