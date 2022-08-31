import React from 'react'

const ShowRefUses = () => {

    const [counter, setCounter] = usestate(0)


  return (
    <div>
        <h3>Counter : {counter}</h3>
        <button onClick={setCounter(counter+1)}>+</button>
        <button onClick={setCounter(counter-1)}>-</button>
    </div>
  )
}

export default ShowRefUses


// use ref does not cause a re-render it stores or track the value of a obj = current.state
// SYNTAX => calcln = useref(2) => {current:2};

