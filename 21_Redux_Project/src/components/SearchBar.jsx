import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import { setQuery } from '../redux/features/searchSlice';

const SearchBar = () => {

const [search, setSearch] = useState("")

const dispatch = useDispatch();

const submitHandler = (e)=>{
    e.preventDefault()
    dispatch(setQuery(search))
    setSearch("")
}

return (
 
  <div className='w-full bg-indigo-500 flex justify-center py-8' >
    <form
    onSubmit={submitHandler}
    className="flex items-center gap-2 bg-white/90 backdrop-blur-md p-2 rounded-2xl shadow-lg w-full max-w-xl mx-4 "
  >
    <input
          value={search}
      onChange={(e) => setSearch(e.target.value)}
      type="text"
      placeholder="Search anything..."
      className="flex-1 px-4 py-2 rounded-xl text-gray-800 placeholder-gray-400
                 focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />

    <button
      type="submit"
      className="px-6 py-2 cursor-pointer rounded-xl bg-indigo-500 text-white font-semibold
                 hover:bg-indigo-600 active:scale-95 transition"
    >
      Search
    </button>
  </form>

  

  </div>

  )
}
export default SearchBar
