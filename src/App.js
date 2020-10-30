import React from "react";
import './assets/main.css';
import Navbar from './components/Navbar.js';
import ImageBackground from './assets/letsbackground1.jpg';

function App() {
  return (
    <>
    <Navbar transparent/>
    <main>
    <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
    <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: {ImageBackground}
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
    </div>
    </div>
    </main>
    </>
    
  );
}

export default App;
