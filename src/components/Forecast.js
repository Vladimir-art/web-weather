import React from 'react';

function Forecast() {
  return(
    <div className="forecast">
      <time className="forecast__date">28 november, 2020</time>
      <h3 className="forecast__temperature">+10 &#730;C&#32;&#47;&#32;+{((+10 * 9) / 5) + 32} &#730;F</h3>
      <p className="forecast__nature">Cloudly</p>
    </div>
  )
}

export default Forecast;
