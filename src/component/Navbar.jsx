import React from "react";
import image from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between px-24 py-8 ">
        <div className="w-56 h-12 ">
          <img src={image} alt="logo" />
        </div>
        <div className="flex gap-8 py-4 text-white">
            <h1 className="font-sans text-lg font-semibold">Sign Up</h1>
            <h1 className="font-sans text-lg font-semibold">Sign in</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
