import React from 'react';
import { useEffect,useState } from 'react';

// use of UseEffect.

// useEffcts accepts 2 arguments/parameters. where 2nd one is optional (dependencies in life cycle methods [] ).
// useEffects tells react to render at end of function returning.
// if no dependency given will be render at every time.
// if given [] = empty array will be render at mounting phase.
// if given [state] = an array having state will only render when that state made some changes.

const Learning = () => {

    const [count,setCount] = useState("0");
    const [multiply,setMultiply] = useState("0");

    let handleCount = (event) =>{
        setCount(count - event)
    }

    useEffect(()=>{
        multiply * count;
    },[count]);


  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => handleCount(+1)}></button>
        <button onClick={() => handleCount(-1)}></button>
        <h1>Multipyer: {multiply}</h1>
    </div>
  )
}

export default Learning