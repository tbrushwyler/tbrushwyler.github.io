'use strict';

app.controller('DNCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.retrieve = function() {
		importio.query({"connectorGuids": [
          "3e56a363-947e-4f9e-8eb1-198c99a18704"
        ],
        "input": {
          "webpage/url": "https://news.layervault.com/stories"
        },
    	"asObjects": true}, {
		  "data": function(data) {
		    $scope.items = data;
		  }
		});
		// $http.jsonp("http://www.kimonolabs.com/api/7vtk89ba?apikey=823d413e416e3b686a51c2262afc4c8a&callback=dn_callback");
	}

	window.dn_callback = function(data) {
		$scope.items = data.results.collection1;
	}

	if (!$scope.items) {
		$scope.retrieve();
	}
}]);