import React, { useEffect, useRef, useState } from 'react'

const Times_render = () => {

    const [count, setCount] = useState(1)
    const render_Times = useRef(0)

    useEffect(()=>{
        render_Times.current += 1;
        console.log(`component renders : ${render_Times.current}`)
    }, [])


return (
    <div>
      <div>
        {count}
      </div>
      <button onClick={()=> setCount(count+1)} >on click</button>
    </div>
  )
}

export default Times_render
