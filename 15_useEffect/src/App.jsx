import React, { useEffect, useState } from 'react'

const App = () => {

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(10)

  // useEffect(() => {
  //   console.log("useEffect chal raha hai....")
  // }, [num])

  //one more example
  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(() => {
    console.log("A wala chal raha hai")
  }, [a])
  useEffect(() => {

    console.log("B wala chal raha hai")
  }, [b])


  return (
    // <div className='flex flex-col justify-center gap-6 items-center bg-amber-600 h-screen ' >
    // <h1 className='text-center text-6xl border-2 bg-amber-800 ' > Num : {num}</h1>
    // <h1 className='text-center text-6xl border-2 bg-amber-800 ' >Num2 : {num2}</h1>
    // <button className='border-2 bg-blue-600 text-6xl py-2 px-5 uppercase rounded-2xl  ' onClick={()=>setNum(num+1)}>click</button>
    // <button className='border-2 bg-blue-600 text-6xl py-2 px-5 uppercase rounded-2xl  ' onClick={()=>setNum2(num2+1)}>click 2</button> 
    // </div>

    // example
    <div className='flex flex-col gap-8' >
      <div className='flex gap-20 mt-3 ml-5 ' >
        <h1 className='border-2 bg-lime-600 text-7xl' >A : {a} </h1>
        <h1 className='border-2 bg-lime-600 text-7xl' >B : {b}</h1>
      </div>
      <div className='flex gap-3 ' >
        <button className='border-2 bg-lime-600 text-7xl' onClick={()=> setA(a+1)} >click A</button>
        <button className='border-2 bg-lime-600 text-7xl' onClick={()=> setB(b-1)} >click B</button>
      </div>
    </div>
  )
}

export default App
