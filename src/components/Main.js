import React from 'react';
import SearchingWeather from './SearchingWeather';
import SearchingResults from './SearchingResults';

function Main(props) {
  return (
    <main className="main">
      <SearchingWeather
        searchCurrent={props.searchCurrent}
        error={props.error}
      />
      {
        props.currentWeather !== null &&
        <SearchingResults
          currentWeather={props.currentWeather}
          forecast={props.forecast}
        />
      }

    </main>
  )
}

export default Main;
