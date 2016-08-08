app.controller('MainCtrl', function($scope, beerService){
  $scope.allBeers = beerService.beers;


  $scope.addBeer = function(){
    beerService.addBeer($scope.name, $scope.style, $scope.abv, $scope.image)
    $scope.name="";
    $scope.style="";
    $scope.abv="";
    $scope.image="";
  }

  $scope.removeBeer = function(index){
    beerService.removeBeer(index)
  }

  $scope.getRating = function(beer,index){
    if (beer === undefined){
      return;
    }
    else{
    beerService.rateBeer(beer,index);}

  }

  $scope.enableEdit = function(index){
    beerService.toggleDeath(index);
  }

  $scope.submitEdits = function(editName, editStyle, index){

    beerService.editBeers(editName, editStyle, index);
  }


})