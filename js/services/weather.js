app.factory('weather',  [ '$resource', 'APP_ID', 'UNITS_SYSTEM', function($resource, APP_ID, UNITS_SYSTEM) {
    // current weather
    return  $resource('http://api.openweathermap.org/data/2.5/weather?q=:city&units=' + UNITS_SYSTEM + '&appid=' + APP_ID);
}]);

