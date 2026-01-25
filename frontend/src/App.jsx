import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans antialiased text-cafe-dark bg-cafe-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}

export default App;