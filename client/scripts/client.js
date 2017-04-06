var myApp = angular.module('myApp', []);

myApp.controller('InputController', ['$scope', 'MovieService', function($scope, MovieService) {
    $scope.Moviesobj = MovieService.movie;
    $scope.storeMoviefunc = MovieService.storeMovie;
}]);

myApp.controller('OutputController', ['$scope', 'MovieService', function($scope, MovieService) {
    $scope.movieArray = MovieService.movieArray;
}]);

myApp.factory('MovieService', [function() {
    var movieArray = [];

    var movieObj = {
        title: '',
        description: '',
        director: '',
        duration: ''
    };

    //function will store the movie object inside of an array
    function storeMovie(aMovie) {
        var movieCopy = angular.copy(aMovie); //makes a copy of the object -  that way when editing the input field, it won't re-write the savedMovie on the DOM
        movieArray.push(movieCopy);
        console.log(movieArray);
        clearInput(aMovie);
    }

    //clear input fields - call this function in storeMovie() so it clears the fiels when the button is clicked
    function clearInput(movie) {
        movie.title = ('');
        movie.description = ('');
        movie.director = ('');
        movie.duration = ('');
    }

    //public variables
    return {
        movie: movieObj,
        movieArray: movieArray,
        storeMovie: storeMovie
    };

}]);
