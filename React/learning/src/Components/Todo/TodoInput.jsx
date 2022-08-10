import React, { useState } from 'react'


// Input here means that what kind of html format required in the todo application;


const TodoInput = () => {

    [SingleTodo, setSingleTodo] = useState("");

  return (
    <div>
        <input type="text" />
        <button>Add Todo</button>
    </div>
  )
}

export default TodoInput;