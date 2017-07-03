var app = angular.module("ForecastApp", ['ngResource', 'ngRoute']);

app.constant('APP_ID', 'PUT_YOUR_KEY_HERE');
app.constant('UNITS_SYSTEM', 'metric');
app.constant('FORECAST_LIMIT', 12)