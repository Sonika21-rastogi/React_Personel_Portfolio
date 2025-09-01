import React from "react";
// import myImage from "./img/Screenshot_20230210-134245_Gallery[1].jpg"; // Import image
import hero from "/img/hero.jpg";
const Hero = () => {
  return (
    
    <div className="min-h-screen  mb-4 bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4">
        <h2 id="Home" className="text-s font-bold text-center">
          Home
        </h2>
      </header>

      {/* Hero Section */}
      <section className="h-[calc(100vh-64px)] w-full mx-auto py-20 xl:px-16 xs:px-8 flex md:flex-row xs:flex-col gap-4 justify-center items-center pb-10 pt-4">
        {/* Left Side - Image */}
        <div className="w-full">
          <img
            className="rounded-full md:max-w-[70%] sm:max-w-[50%] xs:max-w-[60%] mx-auto"
            src={hero}
            alt="My Image"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full flex flex-col justify-center gap-4 text-blue   text-xl text-dark :text-blue-800 md:mt-0 sm:mt-8 xs:mt-4">
          <h1 className="text-3xl font-semibold font-serif">
            Hello, I'm Sonika Rastogi
          </h1>
          <h3 className="capitalize text-indigo-600">
            I'm{" "}
            <span className="typing text-dark-400 dark:text-dark-700">
              Full Stack Developer
            </span>
          </h3>

          <div className="sm:mt-4 xs:mt-2">{/* Add buttons/links here */}</div>
        </div>
      </section>
      
    </div>
    
  );
};

export default Hero;