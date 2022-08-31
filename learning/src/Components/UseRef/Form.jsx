import React, { useState } from 'react';


const Form = () => {

    const [formData, setFormData] =useState({
        username:"",
        age:"",
        ops:false
    })

    function handleChange(event){
        // we can also destructure it like (event has (id can be username/age) form event.target).
        // const {id,value} = event.target -> 1 method.

        setFormData({
            ...formData,
            // [id] : value     -> 1 method.
            [event.target.id] : event.target.value // 2 -> method.
            // formData.id(can be username/age) = to the value of username/age.
        })
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(formData);
    }

  return (

    <div>
        {/* WE ARE GIVING ID IN INPUT ELEMENT BEACUSE TO IDENTIFY THE TYPE OF INPUT THE VALUE NEEDS TO BE
            OVERIDDEN OR VALUES NEED TO BE OVERWRITTEN*/}
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} id="username" type="text" placeholder="Enter Username" />
        <input onChange={handleChange} id="age" type="number"placeholder="Enter age" />
        <button onClick={()=>handleChange}>save</button>
    </form>
    </div>
  )
}

export default Form;
