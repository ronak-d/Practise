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

// q-2  just making a resuable function.
  const handleOperation = (operation) => {
    //   count=10 ? "reached" : setCount(count-1);
    //   count=0 ? "reached" : setCount(count+1);
    setCount(count + operation);
  }
  return (
    <div>
        <div>Counter :{count} </div>
        {/* <button onClick={handleAdd}> + 1 </button> */}
        {/* <button onClick={handleSub}> - 1 </button> */}

        <button onClick={()=> {handleOperation(1)}}> add 1 </button>
        <button onClick={()=> {handleOperation(-1)}}> sub 1 </button>

    </div>
  )
}

export default Counter;

// q-1)
// condition
// stop at 0 
// and it should not go beyond 10

//  q-2) Now make it resuable using one function only