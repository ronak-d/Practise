import React, { useEffect } from 'react'

const Use = () => {

    const users = async() => {
        try {
            let data = await fetch("http://localhost:3000/users");
            let result = await data.json();
            console.log(result);
        } 
        catch (error) {
            console.error(error);
        }
    }

    Use()

    // console.log("Before")
    // useEffect(() => {
    //     console.log("one")
    // })
    // useEffect(() => {
    //     console.log("two")
    // })
    // console.log("after useEffect")

  return (
    <div>
        <h1>hello HR</h1>
    </div>
  )
}

export default Use;

// remember it - 
// useEffect are syncronous in nature one gets completed then it will ove froward for the next one.
