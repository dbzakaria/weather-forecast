app.directive('baselinechart', function(){

    return {
        restrict: 'E',
        replace: true,
        scope: {
            title: '@',
            citiesForecast: '='
        },
        templateUrl: 'js/directives/highchart/baselinechart.html',
        controller: function($scope, $q,    $element, forecast) {

            $scope.loadCitiesData = function() {
                var promises = [];
                angular.forEach($scope.citiesForecast, function(value){
                    promises.push(forecast.get({query: value}).$promise);
                });

                var results = [];
                var citiesForecast = [];
                var cityTemperatures = [];
                var cityTemperature = [];
                $q.all(promises).then(function (arguments){
                    results = Array.prototype.slice.call(arguments);
                    angular.forEach(results, function(city){
                        cityTemperature = [];
                        angular.forEach(city.list, function(forecast){
                            cityTemperature.push(forecast.main.temp);
                        });
                        cityTemperatures.push(cityTemperature);

                        citiesForecast.push(city.list);
                    });
                });

                return cityTemperatures;
            };

            function prepareChartData(citiesForecast) {
                var data = [];
                console.log(citiesForecast);
                angular.forEach(citiesForecast, function(city){
                    console.log(city);
                });
            }

            function render(citiesForecast) {



                Highcharts.chart($element[0],{
                    title: {
                        text: $scope.title
                    },

                    yAxis: {
                        title: {
                            text: 'Temperature'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'middle'
                    },

                    plotOptions: {
                        series: {
                            pointStart: -50
                        }
                    },

                    series: [{
                        data: citiesForecast
                    }]
                });
            }


            var citiesForecast = $scope.loadCitiesData();
            render(citiesForecast);


        }
    };
});