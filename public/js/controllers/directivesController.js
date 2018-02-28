"use strict";
angular.module("fse-recitation")
.controller("directivesController", function($scope) {
	$scope.name = "";
	$scope.names = ['Jani','Hege','Kai'];
	$scope.showAlert = false;
	$scope.toggleShowAlert = () => {
		$scope.showAlert = !$scope.showAlert;
	}
	$scope.addName = () => {
		$scope.names.push($scope.name);
	}
});
