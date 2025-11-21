import { useState, useEffect } from "react";

import Logo from "../assets/Logo.png";
const About = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className=" flex justify-center flex-col items-center w-full"
    >
      <img src={Logo} alt="" />
    </div>
  );
};

export default About;
