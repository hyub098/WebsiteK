Meteor.methods({
	addTimeLine(img,desc,date){
		Timeline.insert({
			img : img,
			desc :desc,
			date : date,
			createdAt : new Date()
		});
	},
	removeTimeLineItem(id){
		Timeline.remove(id);
	},
	updateHome(title,job,homeDesc,bgimg){
		Home.update({$set:{
			title : title,
			job : job,
			homeDesc : homeDesc,
			bgimg : bgimg,
			createdAt : new Date()
		}});
	},
	updateAbout(aboutimg,aboutDesc){
		About.update({$set:{
			aboutimg : aboutimg,
			aboutDesc : aboutDesc,
			createdAt : new Date()
		}});
	},
	updateContact(mobile,address,email){
		Contact.update({$set:{
			mobile : mobile,
			address : address,
			email : email,
			createdAt : new Date()
		}});
	}
});