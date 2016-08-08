app.controller('MainCtrl', function($scope, beerService){
  $scope.allBeers = beerService.beers;
  $scope.addBeer = function(){

    beerService.addBeer($scope.name, $scope.style, $scope.abv, $scope.image)

  }

  $scope.removeBeer = function(index){
    beerService.removeBeer(index)
  }

})