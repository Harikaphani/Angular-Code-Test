'use strict';

/**
 * @ngdoc function
 * @name angularCodeTestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularCodeTestApp
 */
angular.module('angularCodeTestApp',[])
    .controller('MainCtrl', function($scope, $http) {
        $scope.sortBool = false;
        $http.get("http://jsonplaceholder.typicode.com/posts")
            .then(function(response) {
                $scope.postsData = response.data;
                $scope.showData=true;
            });
        $scope.sortData = function(sortField) {
            $scope.sortValue = sortField;
            $scope.sortBool = !$scope.sortBool;
        }
    });