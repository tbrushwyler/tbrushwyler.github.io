'use strict';

app.controller('HNCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.retrieve = function() {
		$http.jsonp("http://www.kimonolabs.com/api/3qleob74?apikey=823d413e416e3b686a51c2262afc4c8a&callback=hn_callback");
	}

	window.hn_callback = function(data) {
		$scope.items = data.results.collection2;
	}

	if (!$scope.items) {
		$scope.retrieve();
	}
}]);