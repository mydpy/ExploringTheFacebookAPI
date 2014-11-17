ExploringTheFacebookAPI
=======================
<strong>Author: Sam Edwards - @HandstandSam</strong>

This is an example project to be used with a presentation for the API Craft RVA meetup on November 18th, 2014.

Links
<ul>
<li>Online Version of the example project: http://fbapi.htechlabs.com</li>
<li>Meetup Link: http://www.meetup.com/API-Craft-RVA/events/214759532/</li>
<li>Facebook Developers Page: https://developers.facebook.com/</li>
<li>Facebook API Explorer: https://developers.facebook.com/tools/explorer</li>
</ul>

Libraries Used:
<ul>
	<li>AngularJS 1.2.26 - https://angularjs.org/</li>
	<li>Bootstrap 3.3.1 - http://getbootstrap.com/</li>
	<li>Facebook JS SDK - https://developers.facebook.com/docs/javascript</li>
</ul>

<hr/>

<strong>Create a Facebook Application ID</strong>
https://developers.facebook.com/quickstarts/?platform=web

<strong>Redirect dev.com to your local machine to allow for development</strong>
<small>You can use any domain youwant, dev.com is what I chose.  "localhost" cannot be used, that's why we have to do this.</small>
<pre>sudo /etc/hosts
127.0.0.1	dev.com</pre>

<hr/>

<strong>Initialize Facebook JavaScript SDK</strong>
<pre>
<script>
    window.fbAsyncInit = function () {
        FB.init({
            appId: '{YOUR_APP_ID}',
            version: 'v2.2'
        });
    };

    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
            return;
        }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
</pre>

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