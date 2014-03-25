'use strict';

/* Controllers */


tcprodwebApp.controller('displayController',['$scope','$firebase',function($scope,$firebase){
	$scope.codes = $firebase(myDataRef);
	
}]);