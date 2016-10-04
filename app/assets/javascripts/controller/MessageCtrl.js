MyApp.controller('MessageCtrl', ['$scope', 'Restangular', function ($scope, Restangular) {
	$scope.text = "MOTHER FUCKER";

	$scope.messages = Restangular.all('messages').getList().$object;
}]);
