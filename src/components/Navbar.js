import React from "react";
import Logo from '../assets/favicon.png';
export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <>
      <nav
        className={
          (props.transparent
            ? "top-0 absolute z-50 w-full"
            : "relative shadow-lg bg-white shadow-lg") +
          " flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg"
        }
      >
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <div className="flex flex-col lg:flex-row list-none flex items-center flex-shrink-0 text-white mr-6 ">
              <img src={Logo} alt="Logo" width="40" height="30" />
              <span class="font-semibold text-xl tracking-tight ml-6">Let's Goal</span>
          </div>
            
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i
                className={
                  (props.transparent ? "text-white" : "text-gray-800") +
                  " fas fa-bars"
                }
              ></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-local lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
             <li className="flex items-center">
                <button
                  className={ "bg-green-500 text-white active:bg-green-700 text-xs font-bold uppercase px-4 py-2 rounded-2xl shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease " }}
                >
                  <i className="fas fa-arrow-alt-circle-down"></i> Contáctanos
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
