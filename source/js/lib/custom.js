'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap'])

	.controller( 'headerCtrl', ['$scope', function($scope) {
		
		$scope.init = function() {
			$scope.initial = true;
		}

	}] )
	.controller( 'contactCtrl', ['$scope', '$http', function($scope, $http) {
		
		var mandrill_api = 'VaXfmvT99HCIcEF8MfyflA';
		
		$scope.sended = false;
		$scope.sended_err = false;
		
		$scope.submitContacto = function() {
			
			var m = new mandrill.Mandrill(mandrill_api);

			var email = $scope.contacto.email.$viewValue;
			var subject = $scope.contacto.subject.$viewValue;
			var message = $scope.contacto.message.$viewValue;

			var params = {
				"message": {
					"from_email":"no-reply@sandbox.cl",
					"to":[
						{"email": email }
					],
					"subject": subject,
					"text": message
				}
			};
			
			m.messages.send(params, function(res) {
				$scope.$apply(function () {
					$scope.sended = true;
				});
			}, function(err) {
				$scope.$apply(function () {
					$scope.sended_err = true;
				});
			});

		}

	}] );