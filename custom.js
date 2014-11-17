var app = angular.module('ExploringTheFacebookAPI', ['ngRoute', 'ngSanitize', 'appControllers']);
var appControllers = angular.module('appControllers', []);

appControllers.controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', '$routeParams',
	function($scope, $rootScope, $http, $location, $routeParams) {

		$scope.user = {};
		$scope.fbuser = null;
		
		$scope.signup = function() {
			alert("TODO: Do signup with user: " + JSON.stringify($scope.user));
		};

		$scope.getMe = function() {
			
			FB.api('/me', function(response) {
				console.log(response);
				$scope.fbuser = response;
				var user = $scope.user;
				user.fname = response.first_name;
				user.lname = response.last_name;
				user.email = response.email;
				user.bio = response.bio;
				if (response.hometown != undefined) {
					user.hometown = response.hometown.name;
				}
				if (response.location != undefined) {
					user.location = response.location.name;
				}
				user.gender = response.gender;
				user.birthdate = response.birthday;
				user.website = response.website;
				user.facebook_link = response.link;
				$scope.$apply();
			});
		};
		
		$scope.getPermissions = function() {
			FB.api('/me/permissions', function(response) {
				console.log(response);
				$scope.fbpermissions = response;
				$scope.$apply();
			});
		};
		$scope.getFriends = function() {
			FB.api('/me/taggable_friends', function(response) {
				console.log("Friends:");
				console.log(response);
				$scope.fb_friends=response.data;
				$scope.$apply();
			});
		};


$scope.getFBPictureUrl = function(id){
	return "https://graph.facebook.com/" + id + "/picture?type=large";
}

		$scope.fblogin = function() {
			if ($scope.fbuser == null) {
				FB.login(function(response) {
					console.log(response);
					if (response.authResponse) {
						console.log('Logged in.');
						$scope.accessToken = response.authResponse.accessToken;
						console.log("Access Token: " + $scope.accessToken);
						$scope.getPermissions();
						$scope.getMe();
						$scope.getFriends();
					} else {
						console.log('User cancelled login or did not fully authorize.');
					}
				}, {
					scope: "public_profile,email"
					//scope: "public_profile,email,user_birthday,user_about_me,user_status,user_location,user_hometown,user_birthday,user_website"
				});
			} else {
				FB.logout();
				$scope.fbuser = null;
			}
		};
	}
]);
