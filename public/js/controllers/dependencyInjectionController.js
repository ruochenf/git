"use strict";
angular.module("fse-recitation")
.controller("dependencyInjectionController", function($scope, ngNotify /* add dependency here */) {
	$scope.showNotification = () => {
		ngNotify.set('Your first message.'),{
			position: "bottom",
			sticky: true
		}
		// add code here
	};
});