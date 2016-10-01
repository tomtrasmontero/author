app.factory('SignupService', function($http){

	return {
		submitSignup: function(email, password){
			console.log('in the factory')
			$http.post('/api/signup', email, password)
		}
	}
})