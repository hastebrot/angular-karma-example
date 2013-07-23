
var app = angular.module("unit", [])

app.controller("unitController", function($scope) {
  $scope.elements = [
    {x: 100},
    {x: 120},
    {x: 150}
  ]
})
