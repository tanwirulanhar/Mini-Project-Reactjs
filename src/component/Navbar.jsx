import React from "react";
import image from "../assets/logo.png";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-24 py-8 ">
        <Link to="/">
          <div className="w-56 h-12 ">
            <img src={image} alt="logo" />
          </div>
        </Link>

        <div className="flex gap-8 py-4 text-white">
          <Link to="/register">
            <h1 className="font-sans text-lg font-semibold cursor-pointer">
              Sign Up
            </h1>
          </Link>
          <Link to="/login">
            <h1 className="font-sans text-lg font-semibold cursor-pointer">
              Sign in
            </h1>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
