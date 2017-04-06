var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'MovieService' , function($scope, MovieService ){
$scope.Moviesobj = MovieService.movie;
$scope.storeMoviefunc = MovieService.storeMovie;



}]);

myApp.controller('OutputController', ['$scope', 'MovieService' , function($scope, MovieService){


$scope.movieArray = MovieService.movieArray;

}]);

myApp.factory('MovieService', [function(){

  var movieArray = [];

  var movieObj = {
    title: '',
    description: '',
    director: '',
    duration: ''
  };


function storeMovie(aMovie) {
  var movieCopy = angular.copy(aMovie);
  movieArray.push(movieCopy);
  console.log(movieArray);
}

  return {
    movie: movieObj,
    movieArray: movieArray,
    storeMovie: storeMovie

  };

}]);
