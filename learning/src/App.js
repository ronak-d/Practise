import React from "react";
import Counter from "./Components/Counter/Counter";
import Nav from "./Components/Nav/Nav"
import Todos from "./Components/Todo/Todos";
import Example from "./Components/LifecycleM/Example"
import Use from "./Components/useeffect/Use";
function App() {

  function receiver(value) {
    console.log(value + "received child to parent")
  }

  return (
    <div className="App">
      {/* <Nav/>  */}
      {/* <Counter/> */}
      {/* <Child callbackFun={receiver}/> */}
      {/* <Todos/> */}
      {/* <Example/> */}
      <Use/>
    </div>
  );
}

// Sending call back function as a props from app to child function;
// to receive the data from child to parent.
// always remeber to make it destructure to functions which is passes in the props.

let Child = ({callbackFun})=>{

  let childname = "ronak";
  callbackFun(childname);

  return(
    <p>child function sends name to parent "app" function</p>
  )
}

export default App;


// passing function in terms of props from child to parent : interview asked;