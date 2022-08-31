import React, { useRef, useState } from 'react'

const ShowRefUses = () => {

    const [counter, setCounter] = useState(0)
    const calclnRef = useRef(2);

    const handleCount = (e) => {
        setCounter(counter + e)
    }

    // let calcln = 2;

    const handleCalcln =(e) =>{
        // let calcln = counter * 2;
        calclnRef.current = calclnRef.current * 2;
        console.log(calclnRef);
    }

  return (
    <div>
        <h3>Counter : {counter}</h3>
        <button onClick={()=>handleCount(+1)}>+</button>
        <button onClick={()=>handleCount(-1)}>-</button>

        <br />
        {/* this  will be showing 2 only that is storerd in the global variable as calcln then it will not render and show through VDOM */}
        <h3>Double calcln  : {calclnRef.current} : <button onClick={handleCalcln}>check calcn</button> </h3>
    </div>
  )
}

export default ShowRefUses


// use ref does not cause a re-render it stores or track the value of a obj = current.state
// SYNTAX => calcln = useref(2) => {current:2};

// why do we use ref instead-
// -> to store the value, and do not lose it, when component is re-rendering
// -> change in this value, should not cause re-render.


// **** you can see that in console if you press the ref it will not re-render but it changes value.