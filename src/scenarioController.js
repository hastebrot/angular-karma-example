
var app = angular.module("scenario", [])

app.controller("scenarioController", function($scope) {
  $scope.elements = [
    {x: 100},
    {x: 120},
    {x: 150}
  ]
})
