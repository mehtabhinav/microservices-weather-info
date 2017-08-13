const weatherInfoService = require('../service/weather-info-service');

// --------------------------------------------- GET ---------------------------------------------

exports.weatherInfo = function(req, res) {
  const location = (req.query && req.query.loc) ? req.query.loc : null;
  weatherInfoService.getWeatherInfo(location)
                        .then(successResponse.bind(null, res))
                        .catch(failureResponse.bind(null, res));
}

// --------------------------------------------- HELPERS ---------------------------------------------
function successResponse(res, data) {
  res.json(data.status, {body: data.body});
}

function failureResponse(res, err) {
  res.json(500, {body: err});
}
