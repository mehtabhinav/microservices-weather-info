const weatherInfoData = require('../data/weather-info-data');

// --------------------------------------------- GET ---------------------------------------------

exports.getWeatherInfo = function(location) {
  const startDate = formatDate(lastWeekDays().lastMonday);
  const endDate = formatDate(lastWeekDays().lastSunday);

  if (location) {
    return weatherInfoData.getWeather(location, new Date());
  }

  return weatherInfoData.getLocation()
                          .then(getIpAddress)
                          .then(weatherInfoData.getWeather.bind(null, '2009-07-20', endDate));
};

// --------------------------------------------- HELPERS ---------------------------------------------
function lastWeekDays () {
  const beforeOneWeek = new Date(new Date().getTime() - 60 * 60 * 24 * 7 * 1000)
  const day = beforeOneWeek.getDay();
  const diffToMonday = beforeOneWeek.getDate() - day + (day === 0 ? -6 : 1);
  const lastMonday = new Date(beforeOneWeek.setDate(diffToMonday))
  const lastSunday = new Date(beforeOneWeek.setDate(diffToMonday + 6));

  return {lastMonday, lastSunday};
};

function formatDate(date) {
    const d = new Date(date);
    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    const year = d.getFullYear();

    if (month.length < 2) {
      month = '0' + month;
    }

    if (day.length < 2) {
      day = '0' + day;
    }

    return [year, month, day].join('-');
}

function getIpAddress(data) {
  const jsonIp = JSON.parse(data.body);
  return (jsonIp && jsonIp.ip) ? jsonIp.ip : null;
}
