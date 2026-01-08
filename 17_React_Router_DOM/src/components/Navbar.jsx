import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    
      <div className=' bg-gray-700  h-20 items-center flex justify-between ' >
        <h1 className='font-bold pl-15 uppercase text-4xl' >Company</h1>
        <ul className='flex pr-15 gap-20 mt-3 cursor-pointer text-xl uppercase font-semibold' >
          <Link to='/' >home</Link>
          <Link to='/about' >about</Link>
          <Link to='/contact' >contact</Link>
        </ul>
      </div>
    )
}

export default Navbar
