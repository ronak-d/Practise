import React, { useState } from 'react'

// this to do in the way of fetching with the JSON server (mock server).
// make this todo with the help of backend and useEffect.
// show result with rerender.

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

  useEffect(() =>{

  },[])

  return (
    <>
      <div>
        <input type="text" value={value} onchange={(e) => setTodo(e.target.value)}/>     
        <button onClick={() => handleTodo(todo)}>Add</button>
      </div>

      <div>
        {todolist.map((e)=><div>{e.id} - {e.name}</div>)}
      </div>
    </>
  )
}

export default Todo;
