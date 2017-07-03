# Weather Forecast


### Description

This tool is built to showcase my knowledge in frontend technologies. The tool is built to:

1. Show the current weather of 5 differennt cities (day, time, tempreture, weather description and wind strength for each city).
![Image of homepage](./screenshots/homepage.png)
2. The next 36-hour forecast for each city.
![Image of city forcast](./screenshots/city_forecast.png)

### Installations

- Just copy and paste `weather-forecast` folder to any running webserver folder (i.e. `/var/www/` in case of Apache)
- Create an account on (http://openweathermap.org/api)  to get an API key.
- Replace `PUT_YOUR_KEY_HERE` with your API key inside `app.js` file.
- Default units system for this application is `metric`, if you want to use another units system change it `app.js`
by supplying the units system preferred `app.constant('UNITS_SYSTEM', 'metric');` look into the api documentation for supported units system.

### Features

- City background changes according to the main weather (Rain, Snow, Cloud, .. etc).
- Clicking on a city, lists 36-hours forecast (next 1 and half day).
- According to the datasource, the forecast includes weather data for every 3 hours.

### Technical choices

- Chose UI framework Bootstrap to help in responsivness.
- Used Angular `$resource` over `$http`, for handling different resources endpoints.
- Created 2 directives for usability:
-- `city`: To render current weather and forecast information for a city.
-- `highchart`: To encapsulate different highcharts types, currently only there is a trial to include the  `baseline` chart.

### Requirements

- Webserver (i.e. Apache)

### Tools used

- AngularJS 1.5.11
- Bootstrap 3.1.1

### Data Source
- [openWeatherMap API](http://openweathermap.org/api)

### TODO

- Include `highcharts` to draw a line chart comparison between cities for the upcoming 36-hour forecast.