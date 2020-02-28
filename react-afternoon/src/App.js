import React from 'react';
import logo from './logo.svg';
import Map from './Components/Map'
import './Styles.css'
// import '../../data'

function App() {
  return (
    <div className="App">
      <header className="header">
        <section>Home</section>
      </header>
        <body className="main-content-container">
        <Map/>
        </body>
    </div>
  );
}

export default App;
