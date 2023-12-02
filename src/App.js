import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Menu from './components/Menu';
import Booking from './components/Booking';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Menu />
      <Booking />
      <Footer />
    </div>
  );
}

export default App;