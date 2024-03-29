import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from 'components/Header'
import Ecosystem from 'pages/Ecosystem'
import Community from 'pages/Community'
import About from 'pages/About'
import HowToBuy from 'pages/HowToBuy'
import WatchTrailer from 'pages/WatchTrailer'
import Gamefi from 'pages/Gamefi'
import Roadmap from 'pages/Roadmap'
import Updates from 'pages/Updates'
import Team from 'pages/Team'
import DAO from 'pages/DAO'
import Footer from 'components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'assets/scss/style.scss'
import 'assets/fonts/GTUltra/stylesheet.css'
import { ScrollTopButton } from 'components/ScrollTopButton'

function App(): JSX.Element {
  return (
    <Router>
      <ScrollTopButton />
      <Header />
      <Ecosystem />
      <Community />
      <About />
      <HowToBuy />
      <WatchTrailer />
      <Gamefi />
      <Roadmap />
      <Updates />
      <Team />
      <DAO />
      <Footer />
    </Router>
  )
}

export default App
