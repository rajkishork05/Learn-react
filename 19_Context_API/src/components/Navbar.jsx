import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react'
import { ThemeDataContext } from '../Context/ThemeContext'

const Navbar = () => {

    const [theme] = useContext(ThemeDataContext)

  return (
    <div style={{backgroundColor : theme==="light" ? "purple" : "" }} className='flex justify-between bg-cyan-400 px-15 py-2 pt-5 ' > 
      <div className='text-4xl font-bold text-white' >HikeWise</div>
      <Nav2/>
    </div>
  )
}

export default Navbar
