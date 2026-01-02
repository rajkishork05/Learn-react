import React, { useState } from 'react'

const App = () => {

  // const [num, SetNum] = useState(0)
  // const [obj, SetObj] = useState({user: "raj", age:31})
  const [arr, SetArr] = useState(["adi", "rose", "marathi", "lily"])


  const change = ()=>{
    // SetNum(num+1)
    // console.log(num);

    //destructuring objects
    // const newobj = {...obj};
    // newobj.user = "kapru";
    // newobj.age = 50
    // console.log(newobj.user, newobj.age)
    // SetObj(newobj)
    // console.log(obj.user, obj.age)

    //Array destructuring
    const newArr = [...arr];
    newArr[2] = "jash";
    // console.log(newArr)
    // SetArr(newArr)

    //direct method
    SetArr(prev => ([...prev, "jasmine",] ))


  }

  return (
    <div>
      <div className=' bg-cyan-800 h-screen w-screen flex justify-center items-center  gap-10 ' >
        {/* <h1 className='bg-cyan-500 text-5xl py-3 px-5 rounded-3xl ' >{num}</h1> */}
        {/* <h1 className='bg-cyan-500 text-5xl py-3 px-5 rounded-3xl ' >{obj.user} {obj.age}</h1> */}
        {arr.map(function(ele, idx){
          return <h1 key={idx} className='bg-cyan-500 text-5xl py-3 px-5 rounded-3xl ' >{ele} </h1>

        })}
        <button onClick={change} className='text-5xl font-semibold bg-cyan-400 py-4 px-7 rounded-3xl active:scale-95 cursor-pointer' >click me</button>
      </div>
    </div>
  )
}

export default App
