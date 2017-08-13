const http = require('../api/http-service');

// --------------------------------------------- GET ---------------------------------------------
exports.getLocation = function() {
  const reqUrl = 'http://api.ipify.org?format=json';
  return http.fetchCall(reqUrl, null);
}

exports.getWeather = function(startDate, endDate, location) {
  const reqUrl = 'http://api.worldweatheronline.com/premium/v1/past-weather.ashx?key=65ef952d034f49fa9fc60217171108&q='+location+'&date='+startDate+'&enddate='+endDate;
  return http.fetchCall(reqUrl, null);
}
