import React from 'react';
import REimgs from '../REimgs/REimgs';
import styles from "./Nav.module.css";


const Nav = () => {
  const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
  const arr2 = [
    {
      img:"https://media-exp1.licdn.com/dms/image/C4D03AQGgWT43R3THLg/profile-displayphoto-shrink_100_100/0/1653128642557?e=1665619200&v=beta&t=4MYvSZVOl-vdg8fUOjCdJBXCcl1kAqBWmOhLYwn5u7A",
      name:"Ronak",
      sirname:"Dodeja"
    }
  ];

  return (
    <div>
      {/* To iterate over an array we have to use {} brackets.*/}
      {/* and to write Js in react we use {} also */}    

      {/* // syntactically wrong. */}

      {/*{arr.map((e)=>(
        <div>
          {e}
        </div>
      ))} */}

      {/* syntactically right */}

      {arr.map((e)=>(//html -> js -> html
        <div className={ e % 2 == 0? styles.even : styles.odd}>       
          {e}
        </div>
      ))}

      {/* using Dot (.)  Notation*/}
      {/* using bracket notaion, it can be used when there is Hyphen in the string of the data */}

      {/* how to map an object in react */}
      {arr2.map((e)=>(
        <div>
          {/* passing props and ddata to dynamic function call */}
          <REimgs image={e.img} title={e.name} title2={e.sirname}/> 

          {/* <img src={e.img}/>
          <div>{`${e.name} ${e.sirname}`}</div> */}
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