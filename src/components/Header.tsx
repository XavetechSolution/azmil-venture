"use client";

import Link from "next/link";
import useAppContext from "../hooks/useAppContext";

function Header() {
  const { state, dispatch } = useAppContext();
  return (
    <header className="sticky top-0 z-50 bg-gray-900 shadow-md">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1 items-center gap-3">
          <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
            <img src="/logo3.png" alt="logo" className="lg:h-11 h-8 w-auto" />

            <div className="flex flex-col leading-tight">
              <span className="text-white font-bold text-sm lg:text-base">
                AZ Multiventure
              </span>
              <span className="text-sm text-gray-400 leading-tight">
                Intercontinental Limited
              </span>
            </div>
          </a>
        </div>

        <div className="hidden md:flex md:gap-x-12">
          <Link
            href="/"
            className="text-base font-semibold text-white"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-base font-semibold text-white"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-base font-semibold text-white"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            About Us
          </Link>

          <Link
            href="/energy_calculator"
            className="text-base font-semibold text-white"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            Energy Calculator
          </Link>
        </div>

        <button
          onClick={() => dispatch({ type: "OPEN_NAV_BAR" })}
          className="md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M3 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 5.25Zm0 4.5A.75.75 0 0 1 3.75 9h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9.75Zm0 4.5a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </nav>
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-900 text-white transform transition-transform duration-300 ${
          state.app.navBar ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col space-y-6 px-6 text-lg font-semibold">
          <Link href="/" onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}>
            Home
          </Link>
          <Link
            href="/products"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            Products
          </Link>
          <Link
            href="/about"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            About Us
          </Link>
          <Link
            href="/energy_calculator"
            onClick={() => dispatch({ type: "CLOSE_NAV_BAR" })}
          >
            Energy Calculator
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
