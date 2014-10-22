controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$modal', '$timeout', 'ProjectService', function($scope, $routeParams, $modal, $timeout, ProjectService){
	$scope.project = ProjectService.getProjectBySlug($routeParams.projectSlug);
	$scope.bannerSource = 'images/mtwashington2.jpg';
	$timeout(function(){
		console.log('broadcasting');
		$scope.$root.$broadcast('masonry.reload');
	}, 1000)
	$scope.showDetailModal = function(assetObj){
		var modalInstance = $modal.open({
			templateUrl: 'partials/modals/detailModal.html',
			controller: 'DetailModalCtrl',
			resolve: {
				asset: [function(){
					return assetObj;
				}]
			}
		});
	}
}]);