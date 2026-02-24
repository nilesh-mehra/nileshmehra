import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="flex flex-col space-y-4">
          <span className="text-2xl font-bold text-white">Nilesh Mehra</span>
          <p className="text-gray-400">
            Personal portfolio showcasing projects, skills, and tech stack. Organized, professional, and responsive design.
          </p>
        </div>

        <div className="flex flex-col space-y-2">
          <h3 className="text-lg font-semibold mb-2 text-white">Quick Links</h3>
          <a href="#hero" className="text-gray-400 hover:text-white transition">Home</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
          <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
          <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-lg font-semibold mb-2 text-white">Connect</h3>
          <div className="flex space-x-4">

            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.287-.012-1.243-.018-2.254-3.338.725-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.774.418-1.305.76-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.467-2.38 1.235-3.222-.124-.303-.536-1.527.117-3.176 0 0 1.008-.322 3.3 1.23a11.45 11.45 0 013.003-.403c1.018.005 2.044.137 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.655 1.65.243 2.873.12 3.176.77.842 1.233 1.912 1.233 3.222 0 4.61-2.805 5.625-5.475 5.922.43.372.815 1.103.815 2.222 0 1.605-.015 2.898-.015 3.293 0 .322.216.699.825.581C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>

            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.238-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.762-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.785-1.75-1.75s.784-1.75 1.75-1.75c.966 0 1.75.784 1.75 1.75s-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.867-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.757 1.381-1.554 2.84-1.554 3.037 0 3.598 2.001 3.598 4.602v5.585z"/>
              </svg>
            </a>

          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nilesh Mehra. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;