import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import * as ApiWeather from './ApiWeather';

function App() {

  const [current, setCurrent] = React.useState(null);

  function searchCurrentWeather(value, form) {
    console.log(value);
    ApiWeather.getCurrentWeather(value)
      .then((data) => {
        if (data.success === false) {
          throw new Error('Введите корректные данные');
        } else {
          setCurrent(data);
        }
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
      />
      <Footer />
    </div>
  );
}

export default App;
