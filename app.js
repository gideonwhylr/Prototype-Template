var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    this.title = "Hello World"



  }
]);