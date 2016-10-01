'use strict';

app.controller('SignupCtrl', function($scope, SignupService){
	$scope.submitSignup = function(){
		console.log('in controller')
		SignupService.submitSignup($scope.email, $scope.password); 
	}
}); 