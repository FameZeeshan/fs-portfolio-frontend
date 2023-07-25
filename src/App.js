import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the ScrollToTopButton component

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Project />
      <Experience />
      <Contact />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
