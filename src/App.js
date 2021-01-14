import React, { useEffect } from "react";
import './assets/main.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar.js';
import Landing from './components/landing.js';
import Footer from './components/Footer.js';
import Terms from './components/terms';
import Privacy from './components/privacy.js';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const main = () => (
    <>
      <Navbar transparent/>
      <Landing />
      <Footer />
    </>
  )
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={main} />
        <Route exact path="/terminos-y-condiciones" component={Terms} />
        <Route exact path="/politicas-privacidad" component={Privacy} />
      </Switch>
    </Router>
  );
}
export default App;
