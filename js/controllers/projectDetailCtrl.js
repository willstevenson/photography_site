controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', 'ProjectService', function($scope, $routeParams, ProjectService){
	$scope.project = ProjectService.getProjectBySlug($routeParams.projectSlug);
	$scope.bannerSource = 'images/mtwashington2.jpg';
}]);