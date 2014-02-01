'use strict';

app.controller("LoginCtrl", ['$scope', function($scope) {
	$scope.percent = 0;
	$scope.registering = false;
	$scope.f = {};

	$scope.login = function() {
		window.location.replace("index.html");
	}

	$scope.register = function() {
		if (!$scope.registering) {
			$scope.registering = true;
			$scope.valuesChanged();
			$("#register").parent().attr("class", "col-xs-10");
		} else {
			window.location.replace("index.html");
		}
	}

	$scope.valuesChanged = function() {
		$scope.percent = 0;
		var amt = $scope.registering ? 34 : 50;

		if ($scope.form.email.$valid)
			$scope.percent += amt;
		if ($scope.form.$dirty && $scope.f.Password)
			$scope.percent += amt;
		if ($scope.registering && $scope.f.ConfirmPassword && $scope.f.ConfirmPassword == $scope.f.Password)
			$scope.percent += amt;
	}

	$scope.usernameValid = function() {
		return ($scope.f.Email && $scope.f.Email.length > 3);
	}

	$scope.$watch('f.Email', $scope.valuesChanged);
	$scope.$watch('f.Password', $scope.valuesChanged);
	$scope.$watch('f.ConfirmPassword', $scope.valuesChanged);
}]);