import React from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-col items-center justify-between px-4 py-8 sm:flex-row sm:px-24">
      <Link to="/">
        <div className="w-40 h-12 mb-4 sm:mb-0">
          <img src={image} alt="logo" />
        </div>
      </Link>
      
      <div className="flex gap-4 text-white sm:gap-8">
        <Link to="/register">
          <h1 className="font-sans text-base font-semibold cursor-pointer sm:text-lg">
            Sign Up
          </h1>
        </Link>
        <Link to="/login">
          <h1 className="font-sans text-base font-semibold cursor-pointer sm:text-lg">
            Sign in
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;


