import React from "react";
import Navbar from "../component/Navbar";
import HomeContent from "../component/HomeContent";
import Card from "../component/Card";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <div>
      <div className=" w-100% h-800 bg-[url('./assets/bg-1.jpg')] bg-cover">
        <Navbar />
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
          <Card />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
