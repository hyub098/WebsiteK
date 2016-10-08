Timeline = new Mongo.Collection("timeline");
HomeDesc = new Mongo.Collection("homeDesc");

Meteor.publish('allTimeline',function(){

	//return all resources under this user
	return Timeline.find();
});