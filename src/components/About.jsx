import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 mt-8 2xl:pt-16"
    >
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid items-center grid-cols-1 md:grid-cols-2">
          {/* Left Side - Text */}
          <div>
            <h1 className="text-4xl mb-6 font-bold ">About Me</h1>

            <h2 className="text-2xl font-bold leading-tight text-black dark:text-white sm:text-1xl lg:text-2xl">
              Hey 👋 I am
              <br className="block sm:hidden" /> Sonika Rastogi
            </h2>

            <p className="max-w-lg mt-5 mb-6 text-s leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
              I'm Sonika passionate about software development. I enjoy coding,
              problem-solving, and creating innovative solutions. Let's connect
              and build something great!
            </p>

            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300 md:mb-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span>
                <span className="relative">Have a question?</span>
              </span>
              <br className="block sm:hidden" />
              <a
                href="https://www.linkedin.com/in/sonika-rastogi-6a8a03301/"
                className="transition-all duration-200 text-sky-500 dark:text-sky-400 hover:text-sky-600 dark:hover:text-sky-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              ><br></br>
                LinkedIn
              </a>
            </p>
          </div>

          {/* Right Side - Images */}
          <div className="hidden md:block relative">
            <img
              className="absolute inset-x-0 bottom-0 -mb-30 left-1/2 -translate-x-1/2 sm:left-auto sm:translate-x-0 sm:scale-90 md:scale-100 z-[-1]"
              src=""
              alt="Background Shape"
            />

            <img
              className="relative w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 sm:scale-90 md:scale-100"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" // Replace with your image
              alt="Sonika Rastogi"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;