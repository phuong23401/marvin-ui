import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Ecosystem from "pages/Ecosystem";
import Community from "pages/Community";
import About from "pages/About";
import HowToBuy from "pages/HowToBuy";
import Footer from "components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import "assets/scss/style.scss";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Ecosystem />
      <Community />
      <About />
      <HowToBuy />
      <Footer />
    </Router>
  );
}

export default App;
