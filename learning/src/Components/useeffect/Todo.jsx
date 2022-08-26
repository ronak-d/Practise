import React, { useEffect, useState } from 'react';
import axios from 'axios';

// this to do in the way of fetching with the JSON server (mock server).
// make this todo with the help of backend and useEffect.
// show result with rerender.

const Todo = () => {

  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");

  function handleTodo(newtodo){
    console.log(newtodo);

    let payloadTodo = {
      id:todolist.length + 1,
      status:false,
      name:newtodo
    }
    
    // axios POST request to save todo in the server.
    axios.post("http://localhost:3000/users",payloadTodo);

    setTodolist([...todolist, payloadTodo])
  }

  useEffect(() =>{
  // axios GET request to receive todo from the server.
    axios.get("http://localhost:3000/users")
    .then((response) =>{
      console.log(response.data);
      setTodolist(response.data);
    })
    
  },[])

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)}/>     
        <button onClick={() => handleTodo(todo)}>Add</button>
      </div>

      <div>
        {todolist.map((e)=> <div key={e.id}> {e.id} - {e.name}</div>)}
      </div>
    </>
  )
}

export default Todo;
