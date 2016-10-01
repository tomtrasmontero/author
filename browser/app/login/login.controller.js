'use strict';

app.controller('LoginCtrl', function($scope,LoginService){
	$scope.submitLogin = function(){
		LoginService.submitLogin($scope.email, $scope.password)
		.then(function(){
			console.log('ok');
		})
	};
});