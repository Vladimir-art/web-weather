import React from 'react';
import Forecast from './Forecast';
import sunny from '../images/sunny.svg';

function SearchingResults() {
  return (
    <section className="results">
      <div className="results__current-weather">
        <div className="results__current-info">
          <h2 className="results__current-title">New York</h2>
          <time className="results__current-date">27 november, 2020</time>
          <h3 className="results__current-temperature">
            +15 &#730;C
            <span className="results__span">&#32;&#47;&#32;</span>
            +{((+15 * 9) / 5) + 32} &#730;F
          </h3>
          <p className="results__current-nature">Sunny</p>
        </div>
        <img className="results__image" src={sunny} alt="weather" />
      </div>
      <div className="results__forecast-weather">
        <Forecast />
        <Forecast />
        <Forecast />
        <Forecast />
      </div>
    </section>
  )
}

export default SearchingResults;
