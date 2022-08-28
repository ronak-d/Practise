import React, { useState } from 'react'



// Clean-ups are the things which are done by the React-Dom in the phase of Un-Mounting(removing the element from the UI).
// Clean-ups used to enhance optimisation, Prevents Memory Leak and Cache.


const CleanUpFunction = () => {
  const [count, setCount] = useState(0);

  useEffect(() =>{
    let id = setInterval(()=>{

      setCount((prevValue) => {      
        if(prevValue <= 0){
          clearingInterval(id);
          return 0
        }
      });
  
    },1000)
  },[]);

  return (
    () => clearingInterval(id)
  )
}

export default CleanUpFunction;

// 1:40