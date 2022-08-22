import React, { useState } from 'react'

// this to do in the way of fetching with the JSON server (mock server).

const Todo = () => {

  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");

  return (
    <div>
      <input type="text" value={value} />     
      <button>Add</button>
    </div>
  )
}

export default Todo;
