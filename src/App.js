import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Home from "./Components/Home"
import Card from "./Components/Card";
import About from "./Components/About";
import SecondHandCard from "./Components/SecondHandCard";
import Mission from "./Components/Mission";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Card />
    <SecondHandCard />
    <Mission />
    <Footer />
    </div>
  );
}

export default App;
