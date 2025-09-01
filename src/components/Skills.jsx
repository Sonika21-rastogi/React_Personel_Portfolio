import React from 'react'

const Skills = () => {
  return (
    <section
      id="skills"
      className="pt-16 bg-gray-100 flex items-center justify-center"
    >
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold mb-8 mb-8 text-center">Skills</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Programming Languages */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Programming Languages</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>JavaScript</li>
              <li>HTML, CSS</li>
            </ul>
          </div>

          {/* Frontend Development */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Frontend Development</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>React.js</li>
            </ul>
          </div>

          {/* Backend Development / Server-Side */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Backend Development</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Node.js, Express.js</li>
              <li>API Development, CRUD Operations</li>
              <li>Authentication & Security: JWT, Bcrypt.js</li>
            </ul>
          </div>

          {/* Databases */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Databases</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>MySQL</li>
              <li>MongoDB</li>
            </ul>
          </div>

          {/* Tools & Technologies */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Tools & Technologies</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Git & GitHub</li>
            </ul>
          </div>

          {/* Deployment */}
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
            <ul className="list-disc list-inside text-left text-gray-700">
              <li>Netlify</li>
              <li>Heroku</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills
