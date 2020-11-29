import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import * as ApiWeather from './ApiWeather';

function App() {

  const [current, setCurrent] = React.useState(null);
  const [forecast, setForecast] = React.useState(null);

  function searchCurrentWeather(value, form) {
    console.log(value);
    ApiWeather.getCurrentWeather(value)
      .then((data) => {
        if (data.success === false) {
          throw new Error('Введите корректные данные');
        } else {
          setCurrent(data);
          return data;
        }
      })
      .then((data) => {
        ApiWeather.getForecastWeather(data)
          .then((data) => {
            setForecast(data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err))
      .finally(() => {
        form.reset();
      })
  }

  return (
    <div className="page">
      <Header />
      <Main
        searchCurrent={searchCurrentWeather}
        currentWeather={current}
        forecast={forecast}
      />
      <Footer />
    </div>
  );
}

export default App;
