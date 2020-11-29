import React from 'react';
import SearchingWeather from './SearchingWeather';
import SearchingResults from './SearchingResults';

function Main(props) {
  return(
    <main className="main">
      <SearchingWeather
        searchCurrent={props.searchCurrent}
      />
      <SearchingResults />
    </main>
  )
}

export default Main;
