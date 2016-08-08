app.service('beerService', function(){

  var beers = [
    {name: 'Guiness', style: 'Dark', abv: '9%', imageUrl: 'img/guiness.jpg'},
    {name: 'Tuborg', style: 'Dark', abv: '9%', imageUrl: 'img/tuborg.jpg'},
    {name: 'Stella', style: 'Dark', abv: '9%', imageUrl: 'img/stella.jpg'},
    {name: 'Kozel', style: 'Dark', abv: '9%', imageUrl: 'img/kozel.jpg'}
  ];


  function addBeer(name, style, abv, imageUrl){
    var newBeer = {
      name: name,
      style: style,
      abv: abv,
      imageUrl: imageUrl
    }
    beers.push(newBeer);
  }

return {addBeer: addBeer, beers: beers}

})