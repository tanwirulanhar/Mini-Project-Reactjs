import React from "react";
import HomeContent from "../component/HomeContent";
import Footer from "../component/Footer";
import NavbarLogin from "../component/NavbarLogin";
import CardLogin from "../component/CardLogin";

const HomeLogin = () => {
  return (
    <div>
      <div className=" w-100% h-800 bg-[url('./assets/bg-1.jpg')] bg-cover">
        <NavbarLogin/>
        <div className="flex-col ">
          <div className="h-500">
            <HomeContent />
          </div>
        </div>
      </div>

      <div className="mt-32 w-444 ">
        <div className="pb-10 text-center">
          <h1 className="font-sans text-5xl font-bold">
            <span className="text-yellow-700">Our</span>{" "}
            <span className="text-cyan-800">Mentor</span>
          </h1>
        </div>
        <div>
          <CardLogin />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default HomeLogin;
