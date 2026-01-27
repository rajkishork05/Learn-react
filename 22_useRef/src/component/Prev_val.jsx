import React, { useEffect, useRef, useState } from 'react'

const Prev_val = () => {

    const [count, setCount] = useState(0)

    const prev = useRef(0)
    const handler = ()=>{
        setCount(count+1)
        console.log("count : ", count)
        prev.current = count
        console.log("prev : ", prev.current)
    }
    useEffect(() => {
      console.log("this is render current:", count)
      console.log("this is render prev:", prev.current)

    }, [count])
    

  return (
    <div>
      <div>Current Value : {count}</div>
      <div>Previous Value : {prev.current} </div>
      <button onClick={handler} className='px-6 py-3 text-xl' >+</button>
    </div>
  )
}

export default Prev_val
