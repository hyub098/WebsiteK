import { Accounts } from 'meteor/accounts-base';
 
Accounts.ui.config({
  passwordSignupFields: 'EMAIL_ONLY',
      loginExpirationInDays: 7 //Expire loginTokens older than a week.

});