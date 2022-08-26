import React, { useEffect, useState } from 'react';
import axios from 'axios';

// this to do in the way of fetching with the JSON server (mock server).
// make this todo with the help of backend and useEffect.
// show result with rerender.

const Todo = () => {
  const [loading, setLoading] =useState(true);
  const [todolist, setTodolist] = useState([]);
  const [todo, setTodo] = useState("");
  const [page,setPage] = useState(1);

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
  // http://localhost:3000/users?_page=2&_limit=4
    
    setLoading(true);

    // axios.get(`http://localhost:3000/users?_page=${page}&_limit=5`)      // 1=> this way.

    axios("http://localhost:3000/users",{     //-
      method: "GET",                          //
      params: {                               //
        _page: page,                          //                            // 2=> Second way for axios using params
        _limit:5                              //
      }                                       //
    })                                        //-
    .then((response) =>{
      setLoading(false);
      console.log(response.data);
      setTodolist(response.data);
    })
    .catch((error) =>{
      console.log(error);
      setLoading(false);
    })
    
  },[page])

  return (
    <>
      <div>
        <input type="text" onChange={(e) => setTodo(e.target.value)}/>     
        <button onClick={() => handleTodo(todo)}>Add</button>
      </div>

      {loading && <div>Loading... Please Wait</div>}

      <div>
        {todolist.map((e)=> <div key={e.id}> {e.id} - {e.name}</div>)}
      </div>

      <div>
        <button disabled={page<1} onClick={() => setPage(page-1)}>prev</button>
        <button onClick={() => setPage(page+1)}>Next</button>
      </div>
    </>
  )
}

export default Todo;
