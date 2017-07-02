app.directive('city', function(){
    this.forecastVisible = false;
    return {
        restrict: 'E',
        scope: {
            city: '='
        },
        templateUrl: 'js/directives/city/city.html',
        controller: function($scope, forecast) {
            $scope.getWeatherIcon = function (iconName) {
                return "http://openweathermap.org/img/w/" + iconName + ".png";
            };
            $scope.getTimeInMilliSeconds = function(dt) {
                return dt*1000;
            }
            $scope.showForecast = function (cityName, countryName) {
                this.forecastVisible = !this.forecastVisible;
                forecast.get({ city: cityName, country: countryName }).$promise.then(function(response){
                    console.log(response.list);
                    $scope.forecast = response.list;
                }).catch(function(error){

                });
            };
        }
    };
});