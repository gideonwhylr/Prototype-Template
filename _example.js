var app = angular.module('app', []);

app.controller('Controller', ['$scope', '$window', '$location', '$anchorScroll',
  function($scope, $window, $location, $anchorScroll) {
    this.title = "Hello World"

    this.showButton = false
    this.updateShowButton = function(show) {
      this.showButton = show
    }

    this.addItem = function() {
      let number = this.items.length + 1
      this.items.push({
        title: "Item " + number,
        subtitle: "Item " + number + " Subtitle",
      })
    }

    this.removeItem = function() {
      this.items.splice(-1, 1)
    }

    this.items = [];
    this.addItem();
    this.addItem();
    this.addItem();

  }
]);
