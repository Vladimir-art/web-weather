import React from 'react';
import SearchingWeather from './SearchingWeather';
import SearchingResults from './SearchingResults';
import Preloader from './Preloader';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

const Main = observer(() => {
  console.log(store.current !== null && !store.preloader);
  return (
    <main className="main">
      <SearchingWeather />
      {
        (store.current !== null && !store.preloader) ?
        <SearchingResults /> : <Preloader isActive={store.preloader} />
      }

    </main>
  )
})

export default Main;
