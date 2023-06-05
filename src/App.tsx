import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
import Footer from "components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import "assets/scss/style.scss";
import Ecosystem from "pages/Ecosystem";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      <Ecosystem />
      <Footer />
    </Router>
  );
}

export default App;
