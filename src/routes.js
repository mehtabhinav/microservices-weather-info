const weatherInfoController = require('./controller/weather-info-controller');

module.exports = function (app) {
  app.get('/ping', (req, res) => { res.send(200).json({status: 'ok'}); });

  app.get('/weatherInfo', weatherInfoController.weatherInfo);
};
