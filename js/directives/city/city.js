app.directive('city', function(){
    this.forecastVisible = false;
    this.showError = false;
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
            };

            $scope.showForecast = function (cityName, countryName) {
                forecast.get({ city: cityName, country: countryName }).$promise.then(function(response){
                    $scope.forecastVisible = !$scope.forecastVisible;
                    $scope.forecast = response.list;
                }).catch(function(error){
                    $scope.showError = true;
                    $scope.errorMessage = "Oops! Something went wrong. Try again later.";
                });
            };
        }
    };
});