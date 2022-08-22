import React, { useState } from 'react'

// this to do in the way of fetching with the JSON server (mock server).

const Todo = () => {

  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");

  function handleTodo(todo){
    let payloadTodo = {
      id:todolist.length + 1,
      status:false,
      name:todo
    }

    setTodolist([...todolist, payloadTodo])

  }

  return (
    <>
      <div>
        <input type="text" value={value} onchange={(e) => setTodo(e.target.value)}/>     
        <button onClick={() => handleTodo(todo)}>Add</button>
      </div>

      <div>
        {todolist.map((e)=>)}
      </div>
    </>
  )
}

export default Todo;
