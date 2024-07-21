import React from "react";
const HomeContent = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col items-center h-auto gap-10 px-4 leading-10 text-center">
        <div className="w-full font-sans sm:w-2/3 lg:w-1/2">
          <h1 className="text-4xl font-bold sm:text-4xl lg:text-6xl">
            <span className="text-yellow-400">Create <span className="text-white">or</span> Find</span>
            <span className="block text-white">interesting</span>
            <span className="text-yellow-400">Events</span>
            <span className="block text-white">around The world</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;


