import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar bg-body-tertiary  lg:pr-20 shadow-2xl fixed-top">
      <div className="container-fluid">
        <div className="navbar-brand w-60 flex gap-2 items-center">
          <i className="fa-solid text-indigo-600 fa-umbrella-beach fs-2"></i>
          <span className=" font-bold text-3xl text-indigo-500 ">
            Home Rantal
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
          <div className=" flex cursor-pointer   border-b   gap-2 px-1.5  py-2 hover:bg-gray-200 transition-all duration-500 items-center">
            <i className="fa-regular fa-house"></i>
            <span>Home</span>
          </div>
          <div className=" flex cursor-pointer   border-b text-1xl gap-2 px-1 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
            <i className="fa-solid fa-globe"></i>
            <span>Community</span>
          </div>
          <div className=" flex cursor-pointer  border-b text-1xl gap-2 px-1 py-2 hover:bg-gray-200 transition-all duration-500 items-center">
            <i className="fa-solid fa-atom"></i>
            <span>Designed</span>
          </div>
          <div className=" flex cursor-pointer   border-b text-1xl gap-2 px-1 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
            <i className="fa-solid fa-people-group"></i>
            <span>About Us</span>
          </div>
        </div>
        <div
          className="offcanvas   d-md-none  offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header border-b-2 shadow  bg-amber-200">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Dream House For All
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body p-0  flex flex-col ">
            <div className=" cursor-pointer flex w-full  border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center">
              <i className="fa-regular fa-house"></i>
              <span>Home</span>
            </div>
            <div className=" cursor-pointer flex w-full  border-b text-2xl gap-2 ps-3 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
              <i className="fa-solid fa-globe"></i>
              <span>Community</span>
            </div>
            <div className=" cursor-pointer flex w-full border-b text-2xl gap-2 ps-3 py-2 hover:bg-gray-200 transition-all duration-500 items-center">
              <i className="fa-solid fa-atom"></i>
              <span>Designed</span>
            </div>
            <div className=" cursor-pointer flex w-full  border-b text-2xl gap-2 ps-3 py-2 bg-gray-300 hover:bg-gray-500 transition-all duration-500 items-center">
              <i className="fa-solid fa-people-group"></i>
              <span>About Us</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
