import React from 'react'

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-white py-8 mt-auto">
  <div className="max-w-7xl mx-auto px-6">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-center sm:text-left">
      
     
      <div>
        <h3 className="text-lg font-semibold text-blue-400">MyPortfolio</h3>
        <p className="text-gray-400 mt-2">
          Building creative and responsive web experiences.
        </p>
      </div>

    
      <div>
        <h3 className="text-lg font-semibold text-blue-400">Contact Info</h3>
        <p className="text-gray-400 mt-2">rastogi.sonika1999@gmail.com</p>
        <p className="text-gray-400">+91 8726041337</p>
      </div>

   
      <div>
        <h3 className="text-lg font-semibold text-blue-400">Connect with Me</h3>
        <div className="flex justify-center sm:justify-start space-x-4 mt-3">
          
        
          <a href="https://www.linkedin.com/in/sonika-rastogi-6a8a03301/" target="_blank" 
             className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 
              2.76 2.24 5 5 5h14c2.76 0 
              5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
              19h-3v-10h3v10zm-1.5-11.268c-.966 
              0-1.75-.784-1.75-1.75s.784-1.75 
              1.75-1.75 1.75.784 
              1.75 1.75-.784 1.75-1.75 
              1.75zm13.5 11.268h-3v-5.604c0-1.337-.027-3.059-1.863-3.059-1.864 
              0-2.149 1.454-2.149 
              2.957v5.706h-3v-10h2.882v1.367h.041c.401-.76 
              1.379-1.559 2.841-1.559 3.04 
              0 3.6 2.002 3.6 4.604v5.588z"/>
            </svg>
          </a>

         
          <a href="https://github.com/Sonika21-rastogi" target="_blank" 
             className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 
              5.373-12 12 0 5.303 3.438 9.8 
              8.205 11.387.6.113.82-.258.82-.577 
              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.084-.729.084-.729 
              1.205.084 1.84 1.236 1.84 1.236 
              1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.333-5.466-5.931 
              0-1.31.465-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 
              0 0 1.008-.322 3.301 1.23.957-.266 
              1.983-.399 3.003-.405 1.02.006 
              2.047.139 3.006.405 2.291-1.552 
              3.297-1.23 3.297-1.23.653 1.653.241 
              2.873.118 3.176.77.84 1.232 1.911 
              1.232 3.221 0 4.609-2.803 5.628-5.475 
              5.921.43.372.823 1.102.823 2.222 
              0 1.606-.015 2.896-.015 3.286 
              0 .319.216.694.825.576 4.765-1.589 
              8.2-6.084 8.2-11.386 
              0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>

         
          
        </div>
      </div>
    </div>

  
    <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
      © 2024 Sonika Rastogi. All rights reserved.
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer
