import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import { observer } from 'mobx-react-lite';

const App = observer(() => {

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
});

export default App;
