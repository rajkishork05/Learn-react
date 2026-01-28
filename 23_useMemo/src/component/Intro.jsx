import React, { useMemo, useState } from 'react'

const slowFunc=(num)=>{
    console.log("Slow function running...")
  let total =0
  for(let i=0; i<1e9; i++){
    total+=num;
  }
  return total
}

const Intro = () => {

    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(7)

    // const result = slowFunc(number)
    const result = useMemo(() => {
        return slowFunc(number)
    }, [number])

  return (
    <div>
      <h2>result: {result}</h2>
      <button onClick={()=> setCount(count+1)} >
        counter : {count}
      </button>
    </div>
  )
}

export default Intro
