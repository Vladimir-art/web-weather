export const getCurrentWeather = (value) => {
  return fetch(`
  http://api.weatherstack.com/current
      ? access_key = 5e363436ccfca9ef89824f8d6cf8cb16
      & query = ${value}
      & language = ru`, {
        method: 'GET'
      })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return data;
      })
}
