app.factory('LoginService', function($http, $state){
	
	return{
		submitLogin: function(email,password){
		var test = {email: email, password: password}
		console.log(test); 
			return $http.post('/api/login', test)
			.then(function(result){	
				console.log(result);
				if(result.data ===  'not authorized'){
					console.log('user not found'); 
					$state.go('login'); 
				} 
				else {
					$state.go('stories'); 
				};

			});
		}
	};
});