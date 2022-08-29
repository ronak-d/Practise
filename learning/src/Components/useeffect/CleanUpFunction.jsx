import React, { useState } from 'react'

// Clean-ups are the things which are done by the React-Dom in the phase of Un-Mounting(removing the element from the UI).
// Clean-ups used to enhance optimisation, Prevents Memory Leak and Cache.

// setInterval => to stop it we use clearInterval.

const CleanUpFunction = () => {
  const [count, setCount] = useState(5);

  useEffect(() =>{
    let id = setInterval(()=>{

      setCount((prevValue) => {      
        if(prevValue <= 0){
          clearInterval(id);
          return 0
        }
      });
  
    },1000)
  },[]);


  // this return is a Clean-Ups performed by react.
  // return ()=> {
  //   clearInterval(id);
  // };

  return (
    <>
    <h3>Count : {count}</h3>
    </>
  )
}

export default CleanUpFunction;

// 1:30