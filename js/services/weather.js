app.factory('weather',  [ '$resource', function($resource) {
    // current weather
    return  $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&units=metric&appid=9ecf063e51c59ca91f3b11d03bfff1f1');
}]);

