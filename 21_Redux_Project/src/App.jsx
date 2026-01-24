import React from 'react'
// import { fetchPhotos, fetchVideos } from './api/mediaApi'
import SearchBar from './components/SearchBar'
import Tabs from './components/Tabs'
import ResultGrid from './components/ResultGrid'

const App = () => {

// const fetchData = async()=>{
//   const res = await fetchPhotos("dogs")
//   const response = await fetchVideos("dogs")
//   console.log(res.results)
//   console.log(response.videos)
// }
// fetchData();

  return (
    <div className="min-h-screen w-full text-white bg-gradient-to-r from-indigo-500 via-cyan-700 to-blue-500 ">
      <SearchBar/>
      <Tabs/>
     <ResultGrid/>
    </div>

  )
}

export default App
