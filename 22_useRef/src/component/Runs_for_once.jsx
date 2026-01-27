import React, { useEffect, useRef, useState } from 'react'

const Runs_for_once = () => {

    const [count, setCount] = useState(0)

  const val = useRef(true)

    useEffect(() => {
        if(val.current){
            setCount(count + 1);
            val.current = false
        }
});

  
  return (
    <div>
      {count}
    </div>
  )
}

export default Runs_for_once
