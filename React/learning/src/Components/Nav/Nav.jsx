import React from 'react';
import styles from "./Nav.module.css";

const array = [1,2,3,4,5,6,7,8,9,10,11,12,13];

const Nav = () => {

  return (
    <div>
      {/* To iterate over an array we have to use {} brackets.*/}
      {/* and to write Js in react we use {} also */}

      {array.map((e) => {
        <div className={ e % 2 === 0? styles.seven : styles.odd }>{el}</div>
      })}
    </div>
  )
}

export default Nav;

/* 
-Condition-
if Div element is even no. show the number or background green else red okay.
*/