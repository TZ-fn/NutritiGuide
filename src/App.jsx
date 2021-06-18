import React from 'react';
import Context from 'components/Context/Context';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Main from 'components/Main/Main';
import 'App.css';

function App() {
  return (
    <div className='App'>
      <Context>
        <Header />
        <Main />
        <Footer />
      </Context>
    </div>
  );
}

export default App;
