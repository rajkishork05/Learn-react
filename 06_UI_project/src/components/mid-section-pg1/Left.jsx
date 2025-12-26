import React from 'react'
import {ArrowUpLeft} from "lucide-react"
const Left = () => {
  return (
    <div className=' flex flex-col justify-between h-full w-1/3'>
      <div className='p-6' >
        <h1 className='mb-8 text-6xl  font-bold ' >Prospective <br /><span className='leading-20 text-gray-700   ' >customer</span> <br />segmentation</h1>
        <p className='text-xl font-medium text-gray-700 ' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, corporis! ipsum dolor sit amet consectetur adipisicing elit. Quam, architecto.</p>
      </div>
      <div className='hover:scale-110 transition-all' >
<ArrowUpLeft size={70} />
      </div>
    </div>
  )
}

export default Left
