import React from 'react';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import 'App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <main style={{ height: '700px', backgroundColor: 'hsla(82, 74%, 78%, 0.3)' }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, porro mollitia delectus illo
        pariatur beatae voluptatum veritatis eos consequuntur tempore, exercitationem, nobis ad
        architecto placeat? Libero impedit sint tenetur nobis.
      </main>
      <Footer />
    </div>
  );
}

export default App;
