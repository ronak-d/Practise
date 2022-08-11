import React, { useState } from 'react'
import TododItem from './TododItem';
import TodoInput from './TodoInput'

const Todos = () => {

    const [TodoList, setTodoList] = useState([]);

    // Callback function to get the single todo from the chile(todoinput);
    const Alltodos = ((newtodo) => {

        // what iam ding here with payload is modifying  the newtodo
        // by making a default status as a false = not done 

        const payload = {
            title:newtodo,
            status:false,
            id:TodoList.length, // means used 5 letter random id to found particular elemnt to perform any operation.
        };

        console.log(payload);

        // instead of passing new todo we need to pass an payload with every task not done;
        setTodoList([...TodoList,payload]);
    });


    // find the todo ID toogle to true and get new array , set it again
    const handleToggle = (id) =>{
        console.log(id);
         
        setTodoList([
            ...TodoList.map((e)=> (e.id === id ? {...e, status: !e.status} : e))
            // all elments     => id === id
            // if true => {return element (task) + its ID + while changing true to Status};
            // false => return element as a whole properties
        ])
    }


  return (
    <div>
        <TodoInput Alltodos={Alltodos}/>

        {TodoList.map( (e)=> 
            <TododItem handleToggle={handleToggle} todo={e}/> // this todo={e} has {title:learning react, status:false}
        )}
    </div>
  )
}

export default Todos;


// - todoinput is a child of todo -> so we now have to take all the elements
// from the child and store in the parent usestate(todolist); okay!