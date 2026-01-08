import React from 'react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full px-8 py-4 bg-gray-900 text-white flex justify-between items-center">
      
      {/* Logo / Name */}
      <div className="text-2xl font-semibold">
        Raj Kishor
      </div>

      {/* Nav Links */}
      <div className="flex gap-6 text-2xl ">
        <Link to="/" className="hover:text-gray-300 transition">Home</Link>
        <Link to="/product" className="hover:text-gray-300 transition">Products</Link>
        <Link to="/shopping" className="hover:text-gray-300 transition">Shopping</Link>
      </div>

    </nav>
  )
}

export default Navbar
