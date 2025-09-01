import React from "react";

const Resume = () => {
  return (
    <section
      id="resume"
      className="pt-16 bg-gray-100 flex  mb-8  items-center justify-center"
    >
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-8">Resume</h1>
        <p className="text-lg text-gray-700 mb-8">
          You can download my resume by clicking the button below.
        </p>
        <a
          href="/img/SonikaFullstack1y0m.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white mb-9 font-bold py-2 px-4 rounded"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default Resume;

