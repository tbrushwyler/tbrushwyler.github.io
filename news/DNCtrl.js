'use strict';

app.controller('DNCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.retrieve = function() {
		$http.jsonp("http://json2jsonp.com/?url=https://news.layervault.com/stories.json&callback=dn_callback");
	}

	window.dn_callback = function(data) {
		$scope.items = data.stories;
	}

	if (!$scope.items) {
		$scope.retrieve();
	}
}]);