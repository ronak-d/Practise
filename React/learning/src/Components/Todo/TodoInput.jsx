import React, { useState } from 'react'


// Input here means that what kind of html format required in the todo application;


const TodoInput = ({Alltodos}) => {

  const [Todo,setTodo] = useState("");

  return (
    <div>
        <input onChange={(e)=>{setTodo(e.target.value)}} type="text" />
        <button onClick={()=>Alltodos(Todo)}>Add Todo</button>
    </div>
  )
}

export default TodoInput;