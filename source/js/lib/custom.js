'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap'])
	.controller( 'headerCtrl', ['$scope', function($scope) {
		
		$scope.init = function() {
			$scope.initial = true;
		}

	}] );