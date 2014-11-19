var app = angular.module('ExploringTheFacebookAPI', ['appControllers']);
var appControllers = angular.module('appControllers', []);

appControllers.controller('SignupCtrl', ['$scope', '$rootScope', '$http',
	function($scope, $rootScope, $http) {
		$scope.fb_user = null;

		$scope.user = {};
		// $scope.user.first_name=null;
		// $scope.user.last_name=null;
		// $scope.user.email=null;
		// $scope.user.bio=null;
		// $scope.user.hometown=null;
		// $scope.user.location=null;
		// $scope.user.gender=null;
		// $scope.user.birthday=null;
		// $scope.user.website=null;
		// $scope.user.facebook_link=null;
		
		$scope.signup = function() {
			alert("TODO: Do signup with user: " + JSON.stringify($scope.user));
		};
		
		$scope.fblogin = function(){
				fb.login(function(response)){
					console.log(response); 
					$scope.fbauth=response; 
					$scope.
				},{
						Scope: "public_profile,email"
				}
				}
		}
	}
]);
