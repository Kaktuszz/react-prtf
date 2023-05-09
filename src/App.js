import React from "react";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import Second from "./components/Second";


function App() {
  // particlesJS.load('particles-js', 'assets/particles.json', function() {
  //   console.log('callback - particles.js config loaded');
  // });
  return (
    <React.Fragment>
      
      <Header />
      <Home />
      <Second />
    </React.Fragment>
  );
}

// anime.js (style boii)

export default App;
