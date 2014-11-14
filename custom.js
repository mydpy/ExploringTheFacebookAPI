var app = angular.module('ExploringTheFacebookAPI', ['ngRoute', 'ngSanitize', 'appControllers']);
var appControllers = angular.module('appControllers', []);

appControllers.controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', '$routeParams',
	function($scope, $rootScope, $http, $location, $routeParams) {
		
		$scope.user = {};
		$scope.signup = function() {
			alert("do signup with: " + JSON.stringify($scope.user));
		};

		$scope.callFB = function(path, params, callback) {
			var url = "https://graph.facebook.com" + path + "?access_token=" + $scope.accessToken;
			if(params!=undefined && params!=null){
				for(var key in params){
					url+="&" + key+"="+params[key];
				}
			}
			return $http.get(url, {
				cache: false
			}).then(function(response) {
				callback(response.data);
			});
		};
		
		$scope.getMe=function(){
			$scope.callFB("/me", null, function(response){
				console.log(response);
				$scope.facebookuser = response;
				var user = $scope.user;
				user.fname=response.first_name;
				user.lname=response.last_name;
				user.email=response.email;
				user.bio=response.bio;
				if(response.hometown!=undefined){
					user.hometown=response.hometown.name;
				}
				if(response.location!=undefined){
					user.location=response.location.name;
				}
				user.gender = response.gender;
				user.birthdate=response.birthday;
				user.website=response.website;
				user.facebook_link=response.link;
			});
		};
		
		$scope.fbUserImage = function(){
			if($scope.facebookuser!=null){
				return "https://graph.facebook.com/"+$scope.facebookuser.id+"/picture?type=large";
			}
			return "";
		};
		$scope.facebookuser=null;

		$scope.fblogin = function() {
			if($scope.facebookuser==null){
			FB.login(function(response) {
				console.log(response);
   			 	if (response.authResponse) {
					console.log('Logged in.');
					$scope.accessToken = response.authResponse.accessToken;
					console.log("Access Token: " + $scope.accessToken);
					$scope.getMe();
				} else {
				     console.log('User cancelled login or did not fully authorize.');
				}
			}, {scope:"public_profile,user_birthday,email,user_about_me,user_status,user_location,user_hometown,user_birthday,user_website"});
			// relationship_status
			}else{
				FB.logout();
				$scope.facebookuser=null;
			}
		};
		
		// setTimeout(function(){
//
// 			FB.getLoginStatus(function(response) {
// 			  if (response.status === 'connected') {
// 				  $scope.accessToken = response.authResponse.accessToken;
// 				  $scope.getMe();
// 				  console.log(response);
// 			    var uid = response.authResponse.userID;
// 			    var accessToken = response.authResponse.accessToken;
// 			  } else if (response.status === 'not_authorized') {
// 			    // the user is logged in to Facebook,
// 			    // but has not authenticated your app
// 			  } else {
// 			    // the user isn't logged in to Facebook.
// 			  }
// 			 });
//
// 		},1000);


	}
]);
