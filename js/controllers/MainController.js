app.controller('MainController', ['$scope', '$q', 'forecast', 'weather', function($scope, $q, forecast, weather) {

    $scope.init = function() {
        $scope.citiesNames =[
            'Amsterdam,nl',
            'Berlin,de',
            'Remarkables,nz',
            'Cairo,eg',
            'Seattle,us'
        ];
        $scope.cities = [];
        $scope.showError = false;
        $scope.errorMessage = "";
    };

    $scope.loadCities = function() {
        var promises = [];
        angular.forEach($scope.citiesNames, function (value, key) {
            promises.push(weather.get({city: value}).$promise);
        });

        $q.all(promises).then(function (arguments){
            $scope.cities = Array.prototype.slice.call(arguments);
        }, function(error){
            $scope.showError = true;
            $scope.errorMessage = "Oops! Something went wrong. Try again later.";
        });
    };

    $scope.init();
    $scope.loadCities();

}]);
