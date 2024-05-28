import React from "react";
import image from "../assets/logo.png";

const Navbar = () => {
  return (
    <>
      <div className="px-24  py-8 flex justify-between">
        <div className="w-56 h-12 ">
          <img src={image} alt="logo" />
        </div>
        <div className="text-white flex gap-8 py-4">
            <h1 className="text-lg font-semibold font-sans">Sign Up</h1>
            <h1 className="text-lg font-semibold font-sans">Sign in</h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
