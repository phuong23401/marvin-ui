import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "components/Header";
// import Footer from "components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css'
import "assets/scss/style.scss";

function App(): JSX.Element {
  return (
    <Router>
      <Header />
      {/* <Footer /> */}
    </Router>
  );
}

export default App;
