import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary  lg:pr-20 shadow-2xl fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand w-60 flex gap-2 items-center">
          <i className="fa-solid text-indigo-600 fa-umbrella-beach fs-2"></i>
          <span className=" font-bold text-3xl text-indigo-500 ">
            Dream House
          </span>
        </div>
        <button
          className="navbar-toggler d-md-none border-0 "
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <i className="fa-solid text-2xl fa-bars "></i>
        </button>
        <div className="  d-md-flex  d-none  h-full     gap-1    p-2 ">
          <NavLink
            to="/HomeeRenter/"
            className=" flex cursor-pointer text-black  text-decoration-none  border-b   gap-2 px-1.5  py-2 hover:bg-gray-200 transition-all duration-500 items-center"
          >
            <i className="fa-regular fa-house"></i>
            <span>Home</span>
          </NavLink>
          <div className="dropdown items-center ps-3 gap-1 flex bg-gray-300 hover:bg-gray-500 transition-all duration-500 border-b">
            <i className="fa-solid  fa-bars-progress"></i>
            <button
              className="  flex cursor-pointer rounded-0  w-full   justify-between     gap-2 px-1.5  py-2   items-center dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Properties
            </button>
            <ul className="dropdown-menu rounded-0">
              <li className=" bg-amber-200">
                <a className="dropdown-item" href="#">
                  Hoteles
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Villas
                </a>
              </li>
              <li className=" bg-amber-200">
                <a className="dropdown-item" href="#">
                  Condos
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Apartements
                </a>
              </li>
            </ul>
          </div>
          <NavLink
            to="/HomeeRenter/categories"
            className=" flex  text-black  text-decoration-none cursor-pointer  border-b text-1xl gap-2 px-1 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
          >
            <i className="fa-regular fa-image"></i>
            <span>Gallery</span>
          </NavLink>
          <div className=" flex cursor-pointer   border-b text-1xl gap-2 px-1 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
            <i className="fa-brands fa-atlassian"></i>
            <span>Services</span>
          </div>
          <NavLink
            to="/HomeeRenter/about"
            className=" flex cursor-pointer  text-black  text-decoration-none  border-b text-1xl gap-2 px-1 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
          >
            <i className="fa-solid fa-people-group"></i>
            <span>About</span>
          </NavLink>
          <NavLink
            to="/HomeeRenter/contact"
            className=" flex cursor-pointer  text-black  text-decoration-none  border-b text-1xl gap-2 px-1 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center"
          >
            <i className="fa-regular fa-address-card"></i>
            <span>Contact</span>
          </NavLink>
        </div>
        <div
          className="offcanvas   d-md-none  offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-b-2 shadow  bg-amber-200">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Dream House Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0  flex flex-col px-2 ">
            <NavLink
              to="/Homeerenter/"
              className=" cursor-pointer  text-black  text-decoration-none flex w-full  border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
            >
              <i className="fa-regular fa-house"></i>
              <span>Home</span>
            </NavLink>
            <div className="dropdown text-2xl items-center ps-3 gap-2 w-full flex bg-gray-300 hover:bg-gray-500 transition-all duration-500 border-b">
              <i className="fa-solid  fa-bars-progress"></i>
              <button
                className="  flex cursor-pointer rounded-0  w-full   justify-between     gap-2 px-1.5  py-2   items-center dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Properties
              </button>
              <ul className="dropdown-menu rounded-0">
                <li className=" bg-amber-200">
                  <a className="dropdown-item" href="#">
                    Hoteles
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Villas
                  </a>
                </li>
                <li className=" bg-amber-200">
                  <a className="dropdown-item" href="#">
                    Condos
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Apartements
                  </a>
                </li>
              </ul>
            </div>
            <NavLink
              to="/HomeeRenter/categories"
              className=" cursor-pointer flex  text-black  text-decoration-none w-full border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
            >
              <i className="fa-regular fa-image"></i>
              <span>Galleries</span>
            </NavLink>
            <div className=" cursor-pointer flex w-full  border-b text-2xl gap-2 ps-3 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
              <i className="fa-brands fa-atlassian"></i>
              <span>Services</span>
            </div>
            <NavLink
              to="/HomeeRenter/about"
              className=" cursor-pointer  text-black  text-decoration-none flex w-full border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
            >
              <i className="fa-solid fa-people-group"></i>
              <span>About</span>
            </NavLink>
            <NavLink
              to="/Homeerenter/contact"
              className=" cursor-pointer  text-black  text-decoration-none flex w-full  border-b text-2xl gap-2 ps-3 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center"
            >
              <i className="fa-regular fa-address-card"></i>
              <span>Contact</span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
