import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import * as ApiWeather from './ApiWeather';

function App() {

  function searchCurrentWeather(value, form) {
    console.log(value);
    ApiWeather.getCurrentWeather(value)
      .then((data) => {
        console.log(data);
        form.reset();
      })
  }

  return (
    <div className="page">
      <Header />
      <Main
        searchCurrent={searchCurrentWeather}
      />
      <Footer />
    </div>
  );
}

export default App;
