import React from 'react';
import Forecast from './Forecast';
// import sunny from '../images/sunny.svg';

function SearchingResults(props) {

  function dateFormat(str) {
    const date = new Date(str);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('en', options);
  }

  console.log(props.currentWeather);
  return (
    <section className={`results ${props.currentWeather ? 'results_active' : ''}`}>
      <div className="results__current-weather">
        <div className="results__current-info">
          <h2 className="results__current-title">{props.currentWeather.location.name}</h2>
          <time className="results__current-date">{dateFormat(props.currentWeather.location.localtime)}</time>
          <h3 className="results__current-temperature">
            {props.currentWeather.current.temperature} &#730;C
            <span className="results__span">&#32;&#47;&#32;</span>
            {((props.currentWeather.current.temperature * 9) / 5) + 32} &#730;F
          </h3>
          <p className="results__current-nature">{props.currentWeather.current.weather_descriptions[0]}</p>
        </div>
        <img className="results__image" src={props.currentWeather.current.weather_icons[0]} alt="weather" />
      </div>
      <div className="results__forecast-weather">
        {
          props.forecast && props.forecast.dataseries.filter((data, index) => index > 0 && index <= 4).map((item, index) => {
            return (
              <Forecast key={index} forecast={item} />
            )
          })
        }
      </div>
    </section>
  )
}

export default SearchingResults;
