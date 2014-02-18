'use strict';

app.controller("HomeCtrl", ['$scope', function($scope) {
	$scope.f = {};
	$scope.adding = false;
	$scope.devices = [];

	$scope.addDevice = function() {
		var deviceId = $scope.f.DeviceId;
		var device = {
			DeviceId: $scope.f.DeviceId,
		};

		var index = $scope.devices.length;
		$scope.devices.push(device);

		dweetio.get_latest_dweet_for(deviceId, function(err, dweets) {
			$scope.updateAtIndex(index, dweets[0]);
		});

		dweetio.listen_for(deviceId, function(d) {
			$scope.updateAtIndex(index, d);
		});

		$scope.adding = false;
		$scope.f = {};
	};

	$scope.updateAtIndex = function(index, dweet) {
		var dev = $scope.devices[index];

		dev.Type = dweet.content.Type;
		dev.Value = dweet.content.Value;
		dev.Units = dweet.content.Units;
		dev.MaxValue = dweet.content.MaxValue;

		$scope.$apply();
	}
}]);