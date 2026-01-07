import React, { useEffect, useState } from 'react'
import axios from "axios"
const App = () => {

  const [data, setData] = useState([])
  const [index, setIndex] = useState(1)
  const [loading, setLoading] = useState(false)
  const fetchData = async()=>{
    try {
      setLoading(true)
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=5`)
      setData(response.data)
    } catch (error) {
      console.log(error)
    }finally{
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData();
  }, [index])
  

  return (
   <div className="min-h-screen bg-black px-4 py-6">
  {/* Button */}
  {/* <div className="flex justify-center mb-6">
    <button
      onClick={fetchData}
      className="bg-green-600 hover:bg-green-700 active:scale-95 transition-all 
                 px-6 py-3 rounded-2xl font-semibold text-xl md:text-2xl 
                 text-white shadow-lg"
    >
      Get Data
    </button>
  </div> */}

  {/* Cards Container */}
{loading ? <div className='w-100% text-center mt-20 text-4xl font-bold ' >Loading...</div> : 

  
  <div className="max-w-7xl mx-auto grid 
                  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 
                  gap-6">
    {data.map((ele, idx) => (
      <div
        key={idx}
        className="bg-gray-900 border border-gray-700 rounded-2xl 
                   p-4 flex flex-col items-center text-center
                   hover:scale-105 transition-transform shadow-md"
      >
        <img
          className="h-24 w-24 rounded-full object-cover mb-3 border-2 hover:scale-115 hover:border-green-500 transition-all"
          src={ele.download_url}
          alt="not loading"
        />

        <h1 className="text-white font-semibold text-lg truncate w-full">
          {ele.author}
        </h1>
      </div>
    ))
    }
  </div>}
  <div className='mt-8 flex gap-6 justify-center text-xl font-semibold items-center' >
    <button onClick={()=>{
      if(index>1){
        setIndex(index-1)
        setLoading(false)
      }
    }} className='bg-amber-500  capitalize py-1 px-2 rounded cursor-pointer active:scale-95 ' >prev</button>
    <h3>Page {index}</h3>
    <button onClick={()=> {
      setIndex(index+1) 
      setLoading(false)
      }} className='bg-amber-500  capitalize py-1 px-2 rounded cursor-pointer active:scale-95 ' >next</button>
  </div>
</div>



  )
}

export default App
