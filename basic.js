var app = angular.module('ExploringTheFacebookAPI', ['appControllers']);
var appControllers = angular.module('appControllers', []);

appControllers.controller('SignupCtrl', ['$scope', '$rootScope', '$http',
	function($scope, $rootScope, $http) {
		$scope.user = {};
		$scope.fb_user = null;
		
		$scope.signup = function() {
			alert("TODO: Do signup with user: " + JSON.stringify($scope.user));
		};
	}
]);
