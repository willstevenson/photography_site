controllers.controller('DetailModalCtrl', ['$scope', '$modalInstance', 'asset', function($scope, $modalInstance, asset){
	$scope.closeModal = function(){
		$modalInstance.close();
	}
	$scope.asset = asset;
}])