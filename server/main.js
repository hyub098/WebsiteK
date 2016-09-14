import { Meteor } from 'meteor/meteor';

Timeline = new Mongo.Collection("timeline");

Meteor.startup(() => {
  // code to run on server at startup
});
