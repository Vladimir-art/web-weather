import { observer } from 'mobx-react-lite';
import React from 'react';
import Forecast from './Forecast';
import store from '../store/store';

const SearchingResults = observer(() => {

  function dateFormat(str) {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('en', options);
  }

  return (
    <section className={`results ${store.current ? 'results_active' : ''}`}>
      <div className="results__current-weather">
        <div className="results__current-info">
          <h2 className="results__current-title">{store.current.location.name}</h2>
          <time className="results__current-date">{dateFormat(store.current.location.localtime)}</time>
          <h3 className="results__current-temperature">
            {store.current.current.temperature} &#730;C
            <span className="results__span">&#32;&#47;&#32;</span>
            {Math.round(((store.current.current.temperature * 9) / 5) + 32)} &#730;F
          </h3>
          <p className="results__current-nature">{store.current.current.weather_descriptions[0]}</p>
        </div>
        <img className="results__image" src={store.current.current.weather_icons[0]} alt="weather" />
      </div>
      <div className="results__forecast-weather">
        {
          store.forecast && store.forecast.dataseries.filter((data, index) => index > 0 && index <= 4).map((item, index) => {
            return (
              <Forecast key={index} forecast={item} />
            )
          })
        }
      </div>
    </section>
  )
})

export default SearchingResults;
