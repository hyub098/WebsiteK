import React from 'react';
import {mount} from 'react-mounter';

import {MainLayout} from '../imports/layouts/MainLayout.jsx';


import HomePage from '../imports/ui/HomePage.jsx';



FlowRouter.route('/',{
	action(){
		mount(MainLayout,{
			content:(<HomePage />)
		})
	}

});

