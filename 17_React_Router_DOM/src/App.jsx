import React from 'react'
import {Link, Route , Routes  } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className='h-screen' >
      {/* <div className=' bg-gray-700  h-20 items-center flex justify-between ' >
        <h1 className='font-bold pl-15 uppercase text-4xl' >Company</h1>
        <ul className='flex pr-15 gap-20 mt-3 cursor-pointer text-xl uppercase font-semibold' >
          <Link to='/' >home</Link>
          <Link to='/about' >about</Link>
          <Link to='/contact' >contact</Link>
        </ul>
      </div> */}
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App
