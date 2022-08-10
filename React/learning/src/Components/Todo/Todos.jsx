import React, { useState } from 'react'
import TodoInput from './TodoInput'

const Todos = () => {

    // Callback function to get the single todo from the chile(todoinput);
    

    [TodoList, setTodoList] = useState([]);

  return (
    <div>
        <TodoInput/>

    </div>
  )
}

export default Todos