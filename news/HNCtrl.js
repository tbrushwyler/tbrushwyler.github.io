'use strict';

app.controller('HNCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.retrieve = function() {
		$http.jsonp("http://api.ihackernews.com/page?format=jsonp&callback=hn_callback");
	}

	window.hn_callback = function(data) {
		$scope.items = data.items;
	}

	if (!$scope.items) {
		$scope.retrieve();
	}
}]);