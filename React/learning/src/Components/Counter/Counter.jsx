import React, { useState } from 'react'
// to make the clean code write js part upside and try to write html things in return part
// to print UI of counter we need to use function from react
// that is {useState} has [a,b] = useState( Accepts Intial value);

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleAdd = () =>{
    if(count>=10){return} 
    setCount(count+1)
  }

  const handleSub = () =>{
    if(count<=0){return} 
    setCount(count-1)
  }
  return (
    <div>
        <div>Counter :{count} </div>
        {/* <button onClick={handleAdd}> + 1 </button>
        <button onClick={handleSub}> - 1 </button> */}

        <button onClick={handleSub}> - 1 </button>
        <button onClick={handleAdd}> + 1 </button>

    </div>
  )
}

export default Counter;


// condition
// stop at 0 
// and it should not go beyond 10

//Now make it resuable using one function only