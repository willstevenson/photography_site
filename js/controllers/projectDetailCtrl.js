controllers.controller('ProjectDetailCtrl', ['$scope', '$routeParams', '$modal', 'ProjectService', function($scope, $routeParams, $modal, ProjectService){
	$scope.project = ProjectService.getProjectBySlug($routeParams.projectSlug);
	$scope.bannerSource = 'images/mtwashington2.jpg';
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