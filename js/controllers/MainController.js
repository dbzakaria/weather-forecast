app.controller('MainController', ['$scope', 'forecast', 'weather', function($scope, forecast, weather) {

    $scope.init = function() {
        $scope.citiesNames =[
            'London,uk',
            'Berlin,de',
            'Moscow,ru',
            'Cairo,eg',
            'Seattle,us'
        ];
        $scope.cities = [];
        $scope.showError = false;
        $scope.errorMessage = "";
    };

    $scope.loadCities = function() {
        angular.forEach($scope.citiesNames, function (value, key) {
            weather.get({city: value}).$promise.then(function (response) {
                console.log(response);
                $scope.cities.push(response);
            }).catch(function(error){
                $scope.showError = true;
                $scope.errorMessage = "Oops! Something went wrong. Try again later.";
            });
        });
    };



    $scope.init();
    $scope.loadCities();

}]);