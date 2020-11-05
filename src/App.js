import React,{useEffect} from "react";
import './assets/main.css';
import Navbar from './components/Navbar.js';
import Landing from './components/landing.js';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <>
      <Navbar transparent/>
      <Landing />
    </>
  );
}
export default App;
