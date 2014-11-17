ExploringTheFacebookAPI
=======================
This is an example project to be used with a presentation for the API Craft RVA meetup on November 18th, 2014.

Online Version of the example project: http://fbapi.htechlabs.com

Meetup Link: http://www.meetup.com/API-Craft-RVA/events/214759532/
Facebook Developers Page: https://developers.facebook.com/
Facebook API Explorer: https://developers.facebook.com/tools/explorer

Sample Application: http://fbapi.htechlabs.com/complete.html

<strong>Author: Sam Edwards - @HandstandSam</strong>

<hr/>


<strong>Facebook Login Call</strong>
<pre>
	FB.login(function(response) {
		console.log(response);
		if (response.authResponse) {
			console.log('Logged in.');
			var accessToken = response.authResponse.accessToken;
			console.log("Access Token: " + accessToken);
		} else {
			console.log('User cancelled login or did not fully authorize.');
		}
	}, {
		scope: "public_profile,email"
		//scope: "public_profile,email,user_birthday,user_about_me,user_status,user_location,user_hometown,user_birthday,user_website"
	});
</pre>

<strong>Current User</strong>
<pre>
	FB.api('/me', function(response) {
		console.log(response);
		var fb_user = response;
	});
</pre>

<strong>Current Permissions for App</strong>
<pre>
	FB.api('/me/permissions', function(response) {
		console.log(response);
		var fb_permissions = response;
	});
</pre>