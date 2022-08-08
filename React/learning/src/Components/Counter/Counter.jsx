import React, { useState } from 'react'

const Counter = () => {
  [count, setCount] = useState(0);

  return (
    <div>
        <div>Counter :{count} </div>
        <button onClick={setCount}> + 1 </button>
        <button onClick={setCount}> - 1 </button>
    </div>
  )
}

export default Counter;