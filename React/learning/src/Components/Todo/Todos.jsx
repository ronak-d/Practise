import React, { useState } from 'react'
import TododItem from './TododItem';
import TodoInput from './TodoInput'

const Todos = () => {

    const [TodoList, setTodoList] = useState(["learning react"]);

    // Callback function to get the single todo from the chile(todoinput);
    const Alltodos = ((newtodo) => {

        // what iam ding here with payload is modifying  the newtodo
        // by making a default status as a false = not done 

        const payload = {
            title:newtodo,
            status:false
        }

        console.log(payload);

        // instead of passing new todo we need to pass an payload with every task not done;
        setTodoList([...TodoList,payload]);
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