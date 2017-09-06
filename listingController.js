angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
	  $scope.listings = Listings;
	  $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec.
     */
	 
    $scope.addListing = function() {
		/* Take value in box variables, concate obj array*/
		$scope.listings = $scope.listings.concat([{
			"code": $scope.newCode,
			"name": $scope.newName,
			"coordinates":{
				"latitude": $scope.newLat,
				"longitude": $scope.newLong,
			},
			"address": $scope.newAdd}
		])
		/* Clear box variables */
		$scope.newCode = $scope.newName = $scope.newLat = $scope.newLong = $scope.newAdd = "";
	};
    $scope.deleteListing = function(listing) {
		var index = $scope.listings.indexOf(listing);
    $scope.listings.splice(index,1);
	};
    $scope.showDetails = function(listing) {
		var index = $scope.listings.indexOf(listing);
		
			$scope.Code=$scope.listings[index].code;
			$scope.Name=$scope.listings[index].name;
		if(angular.isUndefined($scope.listings[index].coordinates)){
			$scope.Latitude="N/A"
			$scope.Longitude="N/A"
		}
		else{
			$scope.Latitude = $scope.listings[index].coordinates.latitude;
			$scope.Longitude = $scope.listings[index].coordinates.longitude;
		}
		if(angular.isUndefined($scope.listings[index].address)){
			$scope.Address="N/A"
		}
		else{
			$scope.Address = $scope.listings[index].address;
		}
	};
	}
]);