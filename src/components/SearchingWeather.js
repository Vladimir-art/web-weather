import React from 'react';

function SearchingWeather() {
  return (
    <section className="serching-weather">
      <h1 className="serching-weather__title">
        What's the weather like today?
      </h1>
      <form className="serching-weather__form">
        <input className="serching-weather__input" type="text" placeholder="Enter the city" required />
        <button className="serching-weather__search" type="submit">Search</button>
      </form>
    </section>
  )
}

export default SearchingWeather;
