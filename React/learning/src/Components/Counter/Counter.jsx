import React, { useState } from 'react'

// to print UI of counter we need to use function from react
// that is {useState} has [a,b] = useState( Accepts Intial value);

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
        <div>Counter :{count} </div>
        <button onClick={()=>{setCount(count+1)}}> + 1 </button>
        <button onClick={()=>{setCount(count-1)}}> - 1 </button>
    </div>
  )
}

export default Counter;