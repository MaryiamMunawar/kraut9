import React from 'react';
import Navbar from './Components/Navbar';
import Content from './Components/Content';
import Welcome from './Components/Welcome';
import Boxes from './Components/Boxes';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Content />
      <Welcome />
      <Boxes />
      <About />
      <Footer />
    </div>
  );
}

export default App;
