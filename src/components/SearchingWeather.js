import { observer } from 'mobx-react-lite';
import React from 'react';
import store from '../store/store';

const SearchingWeather = observer(() => {

  const [cityName, setCityName] = React.useState('');

  function submitValue(e) {
    e.preventDefault();
    store.searchCurrentWeather(cityName, e.target);
    setCityName('');
  }

  return (
    <section className="serching-weather">
      <h1 className="serching-weather__title">
        What's the weather like today?
      </h1>
      <form className="serching-weather__form" onSubmit={submitValue}>
        <input className="serching-weather__input"
          type="text"
          placeholder="Enter the city"
          id="weather"
          onChange={(e) => {setCityName(e.target.value)}}
          required
        />
        <button className="serching-weather__search" type="submit">Search</button>
      </form>
      <span className={`serching-weather__error ${store.errorText ? 'serching-weather__error_active' : ''}`} id="weather">Sorry, I can't find this city. Try again</span>
    </section>
  )
})

export default SearchingWeather;
