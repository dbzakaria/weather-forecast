app.factory('forecast',  [ '$resource', 'APP_ID', 'UNITS_SYSTEM', 'FORECAST_LIMIT', function($resource, APP_ID, UNITS_SYSTEM, FORECAST_LIMIT) {
    // upcoming forecast
    return  $resource('http://api.openweathermap.org/data/2.5/forecast?q=:city,:country&units=' + UNITS_SYSTEM + '&appid=' + APP_ID + '&cnt=' + FORECAST_LIMIT);
}]);
