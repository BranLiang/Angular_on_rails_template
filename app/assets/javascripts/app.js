var MyApp = angular.module('MyApp', ['ui.router', 'restangular']);

MyApp.config(
	["$httpProvider", '$stateProvider', '$urlRouterProvider', 'RestangularProvider',
		function ($httpProvider, $stateProvider, $urlRouterProvider, RestangularProvider) {
			// restangular configuration
			RestangularProvider.setBaseUrl('/api/v1');
			RestangularProvider.setRequestSuffix('.json');

			// router configuration
			$urlRouterProvider.otherwise('');

			$stateProvider
				.state('message', {
					url: 'message',
					views: {
						'message@': {
							templateUrl: 'templates/messages/index.html',
							controller: 'MessageCtrl'
						}
					}
				});

			// deal with the CSRF problem
			var token = $('meta[name=csrf-token]')
				.attr('content');
			$httpProvider
				.defaults
				.headers
				.common['X-CSRF-Token'] = token;
		}
	]);
