Timeline = new Mongo.Collection("timeline");
Home = new Mongo.Collection("home");
About = new Mongo.Collection("about");
Contact = new Mongo.Collection("contact");

Meteor.publish('allTimeline',function(){

	//return all resources under this user
	return Timeline.find();
});

Meteor.publish('homeContent',function(){

	//return all resources under home
	return Home.find();
});

Meteor.publish('aboutContent',function(){

	//return all resources under about
	return About.find();
});

Meteor.publish('contactContent',function(){

	//return all resources under contact
	return Contact.find();
});

Meteor.publish('adminContent',function(){

	//return all resources
	return [Home.find(),About.find(),Contact.find()];
});