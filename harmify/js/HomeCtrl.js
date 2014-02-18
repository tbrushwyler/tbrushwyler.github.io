'use strict';

app.controller("HomeCtrl", ['$scope', function($scope) {
	$scope.f = {};
	$scope.adding = false;
	$scope.devices = [
		{ DeviceId: 'harmify-milk-test' },
		{ DeviceId: 'harmify-egg-test' }
	];

	$scope.addDevice = function() {
		var deviceId = $scope.f.DeviceId;
		var device = {
			DeviceId: $scope.f.DeviceId,
		};

		var index = $scope.devices.length;
		$scope.devices.push(device);

		dweetio.get_latest_dweet_for(deviceId, function(err, dweets) {
			$scope.update(device, dweets[0]);
		});

		dweetio.listen_for(deviceId, function(dweet) {
			$scope.update(device, dweet);
		});

		$scope.adding = false;
		$scope.f = {};
	};

	$scope.update = function(device, dweet) {
		device.Type = dweet.content.Type;
		device.Value = dweet.content.Value;
		device.Units = dweet.content.Units;
		device.MaxValue = dweet.content.MaxValue;

		$scope.$apply();
	}

	$scope.init = function() {
		$.each($scope.devices, function(i, device) {
			dweetio.get_latest_dweet_for(device.DeviceId, function(err, dweets) {
				$scope.update(device, dweets[0]);
			});

			dweetio.listen_for(device.DeviceId, function(d) {
				$scope.update(device, d);
			});
		});
	}

	$scope.init();

}]);