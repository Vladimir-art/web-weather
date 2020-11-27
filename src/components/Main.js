import React from 'react';
import SearchingWeather from './SearchingWeather';
import SearchingResults from './SearchingResults';

function Main() {
  return(
    <main className="main">
      <SearchingWeather />
      <SearchingResults />
    </main>
  )
}

export default Main;
