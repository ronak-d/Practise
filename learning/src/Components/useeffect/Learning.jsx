import React from 'react';
import { useEffect,useState } from 'react';

// use of UseEffect.

// useEffcts accepts 2 arguments/parameters. where 2nd one is optional (dependencies in life cycle methods [] ).
// useEffects tells react to render at end of function returning.
// if no dependency given will be render at every time.
// if given [] = empty array will be render at mounting phase.
// if given [state] = an array having state will only render when that state made some changes.

const Learning = () => {
  return (
    <div>
        const [count,setCount] = useState(0)
    </div>
  )
}

export default Learning