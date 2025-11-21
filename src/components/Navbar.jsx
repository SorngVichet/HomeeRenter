import React from "react";
import { Link, NavLink } from "react-router-dom";
import LOGO4 from "../assets/LOGO4.png";
const Navbar = () => {
  return (
    <nav className="navbar  border-b-4  border-t-4  border-orange-400  bg-body-tertiary  p-0 lg:pr-20 shadow-2xl fixed-top">
      <div className=" py-2 px-3 w-full flex justify-between items-center   ">
        <div className="navbar-brand w-60 flex gap-3  items-center">
          <img className="" src={LOGO4} style={{ height: "50px" }} alt="" />
          <p className=" border-b-2 pt-0  lg:pt-2 font-bold text-2xl flex gap-2 lg:text-3xl text-blue-700 ">
            <span className=" text-orange-400">Dream</span>
            <span>Home</span>
          </p>
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
        <div className="  d-md-flex  d-none  h-full   md:text-xs lg:text-lg   gap-1    p-2 ">
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
              <NavLink
                to="/HomeeRenter/hotel"
                className=" text-decoration-none bg-amber-200"
              >
                <a className="dropdown-item" href="#">
                  Hoteles
                </a>
              </NavLink>
              <NavLink
                to="/HomeeRenter/villa"
                className=" text-decoration-none text-black"
              >
                <a className="dropdown-item" href="#">
                  Villas
                </a>
              </NavLink>
              <NavLink
                to="/HomeeRenter/condo"
                className=" text-decoration-none text-black bg-amber-200"
              >
                <a className="dropdown-item" href="#">
                  Condos
                </a>
              </NavLink>
              <NavLink
                to="/HomeeRenter/apartment"
                className=" text-decoration-none text-black "
              >
                <a className="dropdown-item" href="#">
                  Apartements
                </a>
              </NavLink>
            </ul>
          </div>
          <NavLink
            to="/HomeeRenter/gallery"
            className=" flex  text-black  text-decoration-none cursor-pointer  border-b text-1xl gap-2 px-1 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
          >
            <i className="fa-regular fa-image"></i>
            <span>Gallery</span>
          </NavLink>
          <NavLink
            to="/HomeeRenter/service"
            className=" flex cursor-pointer text-decoration-none text-black   border-b text-1xl gap-2 px-1 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center"
          >
            <i className="fa-brands fa-atlassian"></i>
            <span>Services</span>
          </NavLink>
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
                <NavLink
                  to="/HomeeRenter/hotel"
                  className=" text-decoration-none text-black bg-amber-200"
                >
                  <a className="dropdown-item" href="#">
                    Hoteles
                  </a>
                </NavLink>
                <NavLink
                  to="/HomeeRenter/villa"
                  className=" text-decoration-none text-black"
                >
                  <a className="dropdown-item" href="#">
                    Villas
                  </a>
                </NavLink>
                <NavLink
                  to="/HomeeRenter/condo"
                  className="  text-decoration-none text-black bg-amber-200"
                >
                  <a className="dropdown-item" href="#">
                    Condos
                  </a>
                </NavLink>
                <NavLink
                  to="/HomeeRenter/apartment"
                  className=" text-decoration-none text-black "
                >
                  <a className="dropdown-item" href="#">
                    Apartements
                  </a>
                </NavLink>
              </ul>
            </div>
            <NavLink
              to="/HomeeRenter/gallery"
              className=" cursor-pointer flex  text-black  text-decoration-none w-full border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center"
            >
              <i className="fa-regular fa-image"></i>
              <span>Galleries</span>
            </NavLink>
            <NavLink
              to="/HomeeRenter/service"
              className=" cursor-pointer text-decoration-none text-black flex w-full  border-b text-2xl gap-2 ps-3 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center"
            >
              <i className="fa-brands fa-atlassian"></i>
              <span>Services</span>
            </NavLink>
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
