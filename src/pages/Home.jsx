import React from "react";
import Navbar from "../component/Navbar";
import HomeContent from "../component/HomeContent";

const Home = () => {
  return (
    <div className=" w-100% h-800 bg-[url('./assets/bg-1.jpg')] bg-cover " >
      <div>
        <Navbar/>

        <HomeContent/>
      </div>
    
    </div>
  );
};

export default Home;



  

  

  
