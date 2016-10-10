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
	updateAllPages(content){
		Content.insert({
			title : content[0],
			job : content[1],
			homeDesc : content[2],
			bgimg : content[3],
			aboutimg : content[4],
			aboutDesc : content[5],
			mobile : content[6],
			address : content[7],
			email : content[8],
			createdAt : new Date()
		});
	}
});