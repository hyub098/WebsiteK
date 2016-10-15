Meteor.methods({
	//Insert methods
	addTimeLine(img,desc,date){
		Timeline.insert({
			img : img,
			desc :desc,
			date : date,
			createdAt : new Date()
		});
	},
	insertContact(mobile,address,email){
		Contact.insert({
			mobile : mobile,
			address : address,
			email : email,
			createdAt : new Date()
		});
	},
	insertAbout(aboutimg,aboutDesc){
		About.insert({
			aboutimg : aboutimg,
			aboutDesc : aboutDesc,
			createdAt : new Date()
		});
	},
	insertHome(title,job,homeDesc,bgimg){
		Home.insert({
			title : title,
			job : job,
			homeDesc : homeDesc,
			bgimg : bgimg,
			createdAt : new Date()
		});
	},

	//remove methods
	removeTimeLineItem(id){
		Timeline.remove(id);
	},

	//update methods
	updateHome(id,title,job,homeDesc,bgimg){
		Home.update(id,{$set:{
			title : title,
			job : job,
			homeDesc : homeDesc,
			bgimg : bgimg,
			createdAt : new Date()
		}});
	},
	updateHomeWithoutImg(id,title,job,homeDesc){

		Home.update(id,{$set:{
			title : title,
			job : job,
			homeDesc : homeDesc,
			createdAt : new Date()
		}});
	},
	updateAbout(id,aboutimg,aboutDesc){
		About.update(id,{$set:{
			aboutimg : aboutimg,
			aboutDesc : aboutDesc,
			createdAt : new Date()
		}});
	},
	updateAboutWithoutImg(id,aboutDesc){

		About.update(id,{$set:{
			aboutDesc : aboutDesc,
			createdAt : new Date()
		}});
	},
	updateContact(id,mobile,address,email){
		Contact.update(id,{$set:{
			mobile : mobile,
			address : address,
			email : email,
			createdAt : new Date()
		}});
	}


});