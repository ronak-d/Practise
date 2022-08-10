import React from 'react'

const TododItem = ({todo}) => {
  return (
    <>
        <div>{todo}</div>
        <button>Toggle</button>
    </>
  )
}

export default TododItem


// this component created to maintain any button like delete or toggle- okay!

//  to make any task done we can mark it as true = done | false = not done

// const todo{
//     title:"task";
//     staus:"true"
// }
//  ^ 
//  |  means this done has been done just by seeing status true 


// now form the task with boolean value as a key status in all.