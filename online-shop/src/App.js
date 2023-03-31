import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Shop from './components/Shop';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      {/* Use React Router to switch between Home, About, Shop, and Contact components */}
      <Home />
      <Footer />
    </div>
  );
}

export default App;
