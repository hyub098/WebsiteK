Timeline = new Mongo.Collection("timeline");


Meteor.publish('allTimeline',function(){

	//return all resources under this user
	return Timeline.find();
});