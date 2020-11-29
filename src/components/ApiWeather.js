export const getCurrentWeather = (value) => {
  return fetch(`
  http://api.weatherstack.com/current?access_key=5e363436ccfca9ef89824f8d6cf8cb16&query=${value}`, {
    method: 'GET'
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
}

export const getForecastWeather = (data) => {
  return fetch(`
  http://www.7timer.info/bin/api.pl?lon=${data.location.lon}&lat=${data.location.lat}&product=civillight&output=json`, {
    method: 'GET'
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    })
}
