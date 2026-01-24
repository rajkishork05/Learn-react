import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setActiveTab } from '../redux/features/searchSlice';

const Tabs = () => {

const tab = ["Photos", "Videos"];

const dispatch = useDispatch();
const activeTab = useSelector(state=> state.search.activeTab)

  return (
    <div className='flex gap-10 p-8' >
      {tab.map((ele, idx)=>{
        return <button onClick={()=>{
            dispatch(setActiveTab(ele))
        }} className={` rounded-2xl transition font-bold text-xl px-7 py-3 cursor-pointer active:scale-95 ${activeTab === ele ? "bg-indigo-800" : "bg-indigo-400"}`} key={idx}>{ele}</button>
      })}
    </div>
  )
}

export default Tabs
