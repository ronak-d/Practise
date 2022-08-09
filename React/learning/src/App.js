import React from "react";
import Counter from "./Components/Counter/Counter";
import Nav from "./Components/Nav/Nav"

function App() {

  function receiver(value) {
    console.log(value + "received child to parent")
  }

  return (
    <div className="App">
      <Nav/> 
      <Counter/>
      <Child callbackFun={receiver}/>
    </div>
  );
}

let Child = ({callbackFun})=>{

  let childname = "ronak";
  callbackFun(childname);

  return(
    <p>child function sends name to parent "app" function</p>
  )

}

export default App;


// passing function in terms of props from child to parent : interview asked;