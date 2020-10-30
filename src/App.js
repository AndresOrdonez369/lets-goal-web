import React,{useEffect} from "react";
import './assets/main.css';
import Navbar from './components/Navbar.js';
import ImageBackground from './assets/letsbackground.jpg';
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
    <main>
    <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url(" + ImageBackground + ")",
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
    </div>
    <div className="relative flex-start mx-auto mt-20">
              <div className="items-center flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                    <h1 className="text-white font-semibold text-5xl" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="0">
                      Welcome to soccer revolution.
                    </h1>
                </div>
              </div>
            </div>
    </div>
    
    </main>
    </>
    
  );
}
export default App;
