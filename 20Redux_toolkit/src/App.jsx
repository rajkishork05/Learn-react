import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, scaleBy } from './Redux/features/counterSlice';

const App = () => {

  const dispatch = useDispatch();
  const count = useSelector((state)=> state.counter.value)
  const [num, setNum] = useState(1)

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
  <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl p-8 w-80 text-center">
    
    <h1 className="text-6xl font-bold text-gray-800 mb-6">
      {count}
    </h1>

    <div className="flex justify-between gap-3">
      <button onClick={()=>dispatch(decrement())} className="flex-1 py-2 rounded-lg bg-red-500 text-white font-semibold hover:bg-red-600 active:scale-95 transition">
        −
      </button>

      <button onClick={()=> dispatch(reset())} className="flex-1 py-2 rounded-lg bg-gray-200 text-gray-800 font-semibold hover:bg-gray-300 active:scale-95 transition">
        Reset
      </button>

      <button onClick={()=>dispatch(increment())} className="flex-1 py-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-95 transition">
        +
      </button>
    </div>
    <input value={num} onChange={(e)=> setNum(e.target.value)} type="number" className='bg-gray-600' />
    <button onClick={()=> dispatch(scaleBy(Number(num)))} className="flex-1 py-2 mt-2 rounded-lg bg-green-500 text-white font-semibold hover:bg-green-600 active:scale-95 transition" >
      Multi
    </button>

  </div>
</div>

  )
}

export default App
