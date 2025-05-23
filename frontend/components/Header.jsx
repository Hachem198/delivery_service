"use client";
import React from "react";
import { useEffect } from "react";
export default function Header() {
  useEffect(() => {
    // Add event listener for toggling the menu
    const menuButton = document.querySelector(
      "[data-collapse-toggle='mobile-menu-2']"
    );
    const mobileMenu = document.getElementById("mobile-menu-2");

    menuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }, []);
  return (
    <header>
      <nav className="bg-stone-700 text-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          {/*LOGO AND NAME IN THIS DIV*/}
          <div className="flex items-center lg:order-2">
            <a
              href="#"
              className="text-white hover:bg-black focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2  focus:outline-none"
            >
              Se Connecter
            </a>
            <a
              href="#"
              className="text-white  hover:bg-black focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              S'incrire
            </a>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <a
                  href="/"
                  className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:hover:text-black lg:text-white lg:p-0 dark:text-white"
                  aria-current="page"
                >
                  Acceuil
                </a>
              </li>
              <li>
                <a
                  href="/apropos"
                  className="block py-2 pr-4 pl-3 text-white hover:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  A propos
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="block py-2 pr-4 pl-3 text-white hover:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="block py-2 pr-4 pl-3 text-white hover:text-black border-b border-gray-100 lg:hover:bg-transparent lg:border-0 lg:hover:text-black lg:p-0 dark:text-white lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
