import React, { useState } from 'react'
import TododItem from './TododItem';
import TodoInput from './TodoInput'

const Todos = () => {

    const [TodoList, setTodoList] = useState(["learning react"]);

    // Callback function to get the single todo from the chile(todoinput);
    const Alltodos = ((newtodo) => {
        console.log(newtodo);
        setTodoList([...TodoList,newtodo]);
    });


  return (
    <div>
        <TodoInput Alltodos={Alltodos}/>
        
        {TodoList.map( (e)=> 
            <TododItem todo={e}/>
        )}
    </div>
  )
}

export default Todos;


// - todoinput is a child of todo -> so we now have to take all the elements
// from the child and store in the parent usestate(todolist); okay!