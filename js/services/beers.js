app.service('beerService', function(){

  var beers = [
    {name: 'Guiness', style: 'Dark', abv: '9%', imageUrl: 'img/guiness.jpg', rating:[4,5,5,3], avgRating: 0, edit:false},
    {name: 'Tuborg', style: 'Dark', abv: '9%', imageUrl: 'img/tuborg.jpg', rating:[1,2,3,4,5], avgRating: 0, edit:false},
    {name: 'Stella', style: 'Dark', abv: '9%', imageUrl: 'img/stella.jpg', rating:[2,2,4,5], avgRating: 0, edit:false},
    {name: 'Kozel', style: 'Dark', abv: '9%', imageUrl: 'img/kozel.jpg', rating:[5,5,4,4], avgRating: 0, edit:false}
  ];


  function addBeer(name, style, abv, imageUrl){
    var newBeer = {
      name: name,
      style: style,
      abv: abv,
      imageUrl: imageUrl,
      rating: []
      
    }
    beers.push(newBeer);
  }

  function removeBeer(index){
    beers.splice(index,1);
  }

  function rateBeer(rate,index){
    var average = 0;
    beers[index].rating.push(parseInt(rate));
    for (var i = 0; i < beers[index].rating.length ; i++){

      average += beers[index].rating[i];

    }
    average = average / beers[index].rating.length;
    beers[index].avgRating = parseInt(average);
  }

  function toggleDeath(index){
    beers[index].edit = !beers[index].edit;

  }

  function editBeers(name,style,index){
    beers[index].name = name;
    beers[index].style = style;
    toggleDeath(index);
  }

return {addBeer: addBeer, beers: beers, removeBeer: removeBeer, rateBeer:rateBeer, toggleDeath:toggleDeath, editBeers: editBeers}

})