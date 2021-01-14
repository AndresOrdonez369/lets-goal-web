import React from "react";
import Logo from '../assets/favicon.png';
import { Link } from 'react-router-dom';

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
              <span className="font-semibold text-xl tracking-tight ml-6">Let's Goal</span>
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
                <Link to={'/terminos-y-condiciones'} className="text-white active:bg-green-700 font-bold text-xs px-2 py-2 rounded-2xl outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3">
                  Términos y condiciones
                </Link>
              </li>
              <li className="flex items-center">
                <Link to={'/politicas-privacidad'} className="text-white active:bg-green-700 font-bold text-xs px-2 py-2 rounded-2xl outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-1 mb-3">
                  Políticas de privacidad
                </Link>
              </li>
              <li className="flex items-center">
                <a href="https://api.whatsapp.com/send?phone=573508761275&text=Estoy%20intesado%20en%20conocer%20m%C3%A1s%20sobre%20Let%27s%20Goal%2C%20la%20aplicaci%C3%B3n%20m%C3%B3vil%20que%20va%20a%20revolucionar%20el%20futbol.">
                <button
                  className={ " hover:bg-black bg-green-500 text-white active:bg-green-700 text-xs font-bold uppercase px-4 py-2 rounded-2xl shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type="button"
                  style={{ transition: "all .15s ease " }}
                >
                  <i className=""></i> Contáctanos
                </button>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
