import React, { useEffect, useState } from 'react'

const Use = () => {

    const [showusers, setShowusers] = useState([]);

    // useffect on Mounting => works one time only;
    // both ways are working .then also and await one also.
    useEffect(() =>{
        async function getUsers(){
            // const data = await fetch("http://localhost:3000/users").then( (d) =>
            //     d.json() 
            // );

            const data = await fetch("http://localhost:3000/users");
            let res = await data.json();
            setShowusers(res);
        }
        getUsers();
    },[]);

    return (
        <div>
            {showusers.map((e)=> (<div>{e.name}</div>) )}
        </div>
    )
}

export default Use;

// remember it - 
// useEffect are syncronous in nature one gets completed then it will ove froward for the next one.


// resume at 1:40