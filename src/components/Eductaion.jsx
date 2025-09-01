import React from 'react';

const Education = () => {
  return (
    <div>
      <section id="education" className="pt-16 h-screen bg-blue-100 flex items-center mb-8 justify-center">
        <div className="container mx-auto text-center bg-white">
          <h1 className="text-4xl mt-8 font-bold mb-8">Education</h1>
          <div className=" p-6 rounded-lg  mb-6">
            <h2 className="text-2xl font-semibold">Master Of Computer Application</h2>
            <p className="text-gray-600">Field: Machine & Artificial Intelligence</p>
            <p className="text-gray-600">Amity University Online, 2024-2026</p>
          </div>
          <div className=" p-6 rounded-lg  mb-6">
            <h2 className="text-2xl font-semibold">Bachelor of Commerce</h2>
            <p className="text-gray-600">Mahatma Gandhi Kashi Vidhya Peeth, 2016 - 2019</p>
          </div>
          <div className=" p-6 rounded-lg  mb-6">
            <h2 className="text-2xl font-semibold">Intermediate</h2>
            <p className="text-gray-600">Aryavart Inter College, 2014 - 2016</p>
          </div>
          <div className=" p-6 rounded-lg ">
            <h2 className="text-2xl font-semibold">High School</h2>
            <p className="text-gray-600">Aryavart Inter College, 2014</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;