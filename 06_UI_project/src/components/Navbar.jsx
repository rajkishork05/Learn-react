import React from 'react'

const Navbar = () => {
  return (
   <div className='flex justify-between' >
      <button className='text-white bg-black py-2 px-5 rounded-3xl uppercase font-bold text font-little hover:text-black hover:bg-white transition-all ' >target audience</button>
      <h3 className='font-jersey text-gray-700 text-3xl tracking-wider ' >digital banking platform</h3>
    </div>
  )
}

export default Navbar
