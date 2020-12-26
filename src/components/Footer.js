import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex justify-center ">
            <div  className="mb-4" >
                <a href="https://www.facebook.com/Lets-Goal-2124280581013490" title="Mirar Facebook">
                  <button
                  className=" hover:bg-green-500 align-center bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none  m-2"
                  type="button"
                 
                >
                  <i   className="flex fab fa-facebook-square"></i>
                  
                </button>
                </a>
                <a href="https://www.youtube.com/channel/UClBH87l-kHFqx_XZDgcqgWA" title="Mirar Youtube">
                <button
                  className="hover:bg-green-500 bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none m-2 "
                  type="button"
                >
                  <i className="flex fab fa-youtube"></i>
                </button>
                </a>
                <a href="https://github.com/Let-s-Goal" title="Mirar GitHub">
                <button
                  className="hover:bg-green-500 bg-white text-black shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none m-2"
                  type="button"
                >
                  <i className="flex fab fa-github"></i>
                </button>
                </a>
              
                </div>
            </div>
          </div>
         
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-green-400 font-semibold py-1">
                Copyright © {new Date().getFullYear()}{" "}Let's Goal{" "}
                
              </div>
            
          </div>
        </div>
      </footer>
    </>
  );
}
