import React, { useState } from 'react'

const Eg = () => {

  const [show, setShow] = useState(true);

  return (
    <div>
      {show ? <button onClick={()=>setShow(false)}> Say hello </button>
      :
      <button onClick={()=>setShow(true)}> hello Ron </button>}
    </div>
  )
}

export default Eg;
  
// great exercise yet confusing in begning;
// isseue of readability;
