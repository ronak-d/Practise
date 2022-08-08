import React from 'react';
// import styles from "./Nav.module.css";


const Nav = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];

  return (
    <div>
      {/* To iterate over an array we have to use {} brackets.*/}
      {/* and to write Js in react we use {} also */}
{/* 
      // syntactically wrong.

      {arr.map((e)=>(
        <div>
          {e}
        </div>
      ))} */}

      {/* syntactically right */}

      {arr.map((e)=>(//html -> js -> html
        <div>       
          {e}
        </div>
      ))}

    </div>

  )
}

export default Nav;

/* 
-Condition-
if Div element is even no. show the number or background green else red okay.
*/