import React from "react";

const Footer = () => {
  return (
    <footer className="absolute bottom-0 w-full bg-gray-900 text-gray-300 py-6 mt-10">
      
      <div className="max-w-6xl mx-auto px-4 text-center">
        © {new Date().getFullYear()} Raj Kishor. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

