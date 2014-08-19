controllers.controller('ProjectsCtrl', ['$scope', 'ProjectService', function($scope, ProjectService){
	$scope.projects = ProjectService.projects;
	console.log('on projects page');
}]);