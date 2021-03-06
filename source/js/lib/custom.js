'use strict';
var app = angular

	.module('app', ['ngAnimate','ui.bootstrap', 'duScroll'])

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
					"from_email":email,
					"to":[
						{"email": "sabino@2brains.cl" }
					],
					"subject": subject+' -from sandbox.cl',
					"text": message
				}
			};
			
			m.messages.send(params, function(res) {
				$scope.$apply(function () {
					$scope.sended = true;
					ga('send', 'event', 'Email', 'Send', 'Success');
				});
			}, function(err) {
				$scope.$apply(function () {
					ga('send', 'event', 'Email', 'Send', 'Error');
					$scope.sended_err = true;
				});
			});

		}

	}] );