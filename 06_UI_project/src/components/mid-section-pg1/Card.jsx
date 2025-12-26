import React from 'react'
import { ArrowLeft } from 'lucide-react'
const Card = (prop) => {
  return (
    <div  className='hover:scale-108 shrink-0 transition-all  w-80 overflow-hidden relative h-full rounded-4xl ' >
      <img className='h-full object-cover' src={prop.img} alt="" />
      <div className='flex flex-col justify-between p-10 absolute top-0 left-0 h-full w-full' >
        <h1 className='font-medium bg-white w-6 h-9 px-5 py-4 rounded-full text-xl flex justify-center items-center '>{prop.id}</h1>
        <div className='text-white'>
            <p className=' text-lg' >{prop.para}</p>
            <div className=' flex gap-5' >
                <button className='hover:scale-110 transition-all bg-blue-500 mt-4 px-6 py-3 text-lg uppercase rounded-full ' >satisfied</button>
            <button className="hover:scale-110 transition-all bg-blue-500 mt-4 px-6 py-3 text-lg uppercase rounded-full"  ><ArrowLeft /></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
