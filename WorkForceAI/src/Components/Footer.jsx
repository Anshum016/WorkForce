// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0c0c14] text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} WorkforceAI. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <a href="#about" className="hover:text-red-500 transition">About</a>
          <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          <a href="#privacy" className="hover:text-red-500 transition">Privacy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
