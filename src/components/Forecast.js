import React from 'react';

function Forecast(props) {

  function dateFormat(str) {
    const arr = str.toString().split('');
    const year = arr.filter((data, index) => index <= 3).join('');
    const month = arr.filter((data, index) => index > 3 && index < 6).join('');
    const day = arr.filter((data, index) => index > 5 && index <= 8).join('');
    const dd = year + '-' + month + '-' + day;

    const date = new Date(dd);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    return date.toLocaleString('en', options);
  }

  return (
    <div className="forecast">
      <time className="forecast__date">{dateFormat(props.forecast.date)}</time>
      <h3 className="forecast__temperature">{props.forecast.temp2m.max} &#730;C&#32;&#47;&#32;{Math.round(((props.forecast.temp2m.max * 9) / 5) + 32)} &#730;F</h3>
      <p className="forecast__nature">{props.forecast.weather}</p>
    </div>
  )
}

export default Forecast;
